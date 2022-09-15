import { Repository, EntityRepository, Brackets } from 'typeorm';
import { Card } from './entity/card.entity';
import { User } from '../auth/entity/user.entity';
import { ModifyCardDto } from './dto/add-card.dto';
import { BadRequestException, Logger } from '@nestjs/common';
import { CardAmount } from './entity/card-amount.entity';
import { DbAddCard } from './dto/db-add-card.model';
import { CardQuantity } from './dto/card-quantity.model';
import { PossibleCardVariation } from './entity/possible-card-variation.entity';
import { CardVariation } from './entity/card-variation.entity';

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {
    private logger = new Logger('CardRepository');

    async getCardSet(cardSet: string): Promise<Card[]> {
        return this.createQueryBuilder('card')
            .innerJoinAndSelect('card.cardSet', 'cardSet', 'cardSet.short_name = :name', {
                name: cardSet,
            })
            .getMany();
    }

    async getCardSetUser(cardSet: string, userId: number): Promise<Card[]> {
        return this.createQueryBuilder('t_card')
            .innerJoinAndSelect('t_card.cardSet', 't_cardSet', 't_cardSet.short_name = :name', {
                name: cardSet,
            })
            .leftJoinAndSelect(
                't_card.cardAmount',
                't_cardAmount',
                't_cardAmount.user_1 = :userId',
                { userId },
            )
            .getMany();
    }

    async modifySetCard(modifyCard: ModifyCardDto, user: User) {
        this.logger.verbose(
            `Method modifySetCard starting. ModifyCardDto: ${JSON.stringify(modifyCard)}`,
        );
        const { id: userId } = user;
        const { setShortName, cardQuantitys } = modifyCard;

        this.checkCardUniqueness(modifyCard);
        const lastCard = await this.getLastCardFromSet(setShortName);
        this.checkCardNumberValidity(cardQuantitys, lastCard.cardNumber);

        // Megnézni, hogy az adott kártyából van-e olyan típus
        const pCardVariations = await this.getAllPossibleVariationForCardSet(setShortName, userId);
        await this.checkPossibleCardVariations(pCardVariations, cardQuantitys, setShortName);

        const userCards = await this.getCardsForSaving(modifyCard, userId);
        await this.addCardsToDb(userCards, pCardVariations, modifyCard.cardQuantitys, userId);
    }

    async checkPossibleCardVariations(
        pCardVariations: PossibleCardVariation[],
        cardQuantitys: CardQuantity[],
        setShortName: string,
    ) {
        for (const cardQuantity of cardQuantitys) {
            const pCardVariation = pCardVariations.find(pcv => {
                return (
                    cardQuantity.cardNumber === pcv.card.cardNumber &&
                    cardQuantity.type === pcv.cardVariantType
                );
            });

            if (!pCardVariation) {
                throw new Error(
                    `Not existing card variation. CardSet: ${setShortName}, ` +
                        `CardNumber: ${cardQuantity.cardNumber}, CardVariantType: ${cardQuantity.type}`,
                );
            }

            if (
                !pCardVariation.hasFoil &&
                (cardQuantity.cardQuantityFoil || cardQuantity.cardQuantityFoil > 0)
            ) {
                throw new Error(
                    `Can't add Foil card for this card with this variation ` +
                        `[CardSet: ${setShortName}, cardNum: ${cardQuantity.cardNumber}, cardVariation: ${pCardVariation.cardVariantType}]`,
                );
            }

            if (
                !pCardVariation.hasNormal &&
                (cardQuantity.cardQuantity || cardQuantity.cardQuantity > 0)
            ) {
                throw new Error(
                    `Can't add Normal card for this card with this variation ` +
                        `[CardSet: ${setShortName}, cardNum: ${cardQuantity.cardNumber}, cardVariation: ${pCardVariation.cardVariantType}]`,
                );
            }
        }
    }

    async getAllPossibleVariationForCardSet(
        setShortName: string,
        userId: number,
    ): Promise<PossibleCardVariation[]> {
        return await this.manager
            .createQueryBuilder<PossibleCardVariation>(PossibleCardVariation, 'pcv')
            .innerJoinAndSelect('pcv.card', 'c')
            .innerJoin('c.cardSet', 'cs')
            .leftJoinAndSelect('pcv.cardVariation', 'cv')
            .leftJoin('cv.cardAmount', 'ca')
            .where('cs.short_name = :setShortName and (ca.user_1 is NULL or ca.user_1 = :userId)', {
                setShortName,
                userId,
            })
            .getMany();
    }

    async getAllPossibleVariation(
        setShortName: string,
        cardNumber: number,
    ): Promise<PossibleCardVariation[]> {
        return await this.manager
            .createQueryBuilder<PossibleCardVariation>(PossibleCardVariation, 'pcv')
            .innerJoin('pcv.card', 'c')
            .innerJoin('c.cardSet', 'cs')
            .where('cs.short_name = :setShortName and c.card_number = :cardNumber', {
                setShortName,
                cardNumber,
            })
            .getMany();
    }

    async getAllVersionForCardWithUser(uniqueCardId: number, userId: number): Promise<Card[]> {
        return this.createQueryBuilder('t_card')
            .innerJoinAndSelect('t_card.cardSet', 't_cardSet')
            .leftJoinAndSelect(
                't_card.cardAmount',
                't_cardAmount',
                't_cardAmount.user_1 = :userId',
                { userId },
            )
            .where('t_card.unique_card_1 = :uniqueCardId', { uniqueCardId })
            .getMany();
    }

    async getAllVersionForCard(uniqueCardId: number): Promise<Card[]> {
        return this.createQueryBuilder('t_card')
            .innerJoinAndSelect('t_card.cardSet', 't_cardSet')
            .where('t_card.unique_card_1 = :uniqueCardId', { uniqueCardId })
            .getMany();
    }

    /**
     * Check if there is more than one from the same card number
     * @param modifyCard
     */
    private checkCardUniqueness(modifyCard: ModifyCardDto) {
        modifyCard.cardQuantitys.reduce((a: number[], b) => {
            if (a[b.cardNumber]) {
                throw new BadRequestException(
                    `There was more than one from the same card number: ${b.cardNumber}`,
                );
            }
            a[b.cardNumber] = (a[b.cardNumber] || 0) + 1;
            return a;
        }, []);
    }

    /**
     * Give back the last card (last card number of the set).
     * @param setShortName filter the t_cardset.short_name column
     * @throws `BadRequestException` - If the `setShortName` not exist in the t_cardset.short_name column table
     */
    private async getLastCardFromSet(setShortName: string): Promise<Card> {
        const lastCard = await this.createQueryBuilder('t_card')
            .select('t_card.cardNumber')
            .innerJoin('t_card.cardSet', 't_cardSet', 't_cardSet.short_name = :name', {
                name: setShortName,
            })
            .orderBy('t_card.cardNumber', 'DESC')
            .getOne();
        if (!lastCard) {
            throw new BadRequestException(`The set name is not in the database: ${setShortName}`);
        }
        return lastCard;
    }

    /**
     * Check if the card number is in the limit. if it is higher than `lastCardNumber` then throw exception
     * @param addCard This conteins the card numer list
     * @param lastCardNumber This is the limit
     * @throws `BadRequestException`
     */
    private checkCardNumberValidity(cardQuantitys: CardQuantity[], lastCardNumber: number) {
        const incorrectNum = cardQuantitys.filter(item => item.cardNumber > lastCardNumber);

        if (incorrectNum.length > 0) {
            throw new BadRequestException(
                `There are card number which is higher than the max: ${incorrectNum[0].cardNumber}`,
            );
        }
    }

    /**
     * Get all cards from the database which is in the modifyCard.cardQuantitys
     *  cardId, cardAmountId, cardNumber, quantity
     *  Left join is kell a cardId-hoz
     * @param modifyCard
     * @param userId Get cards from the given user
     */
    private async getCardsForSaving(
        modifyCard: ModifyCardDto,
        userId: number,
    ): Promise<DbAddCard[]> {
        const userCards: DbAddCard[] = await this.createQueryBuilder('t_card')
            .select([
                't_card.id as cardId',
                't_card_amount.id as cardAmountId',
                't_card_amount.amount as quantity',
                't_card_amount.foilAmount as quantityFoil',
                't_card.cardNumber as cardNumber',
            ])
            .leftJoin('t_card.cardAmount', 't_card_amount', 't_card_amount.userId = :userId', {
                userId,
            })
            .innerJoin('t_card.cardSet', 't_cardSet', 't_cardSet.short_name = :name', {
                name: modifyCard.setShortName,
            })
            .where(
                new Brackets(qb => {
                    modifyCard.cardQuantitys.forEach((cardQty, ind) =>
                        qb.orWhere(`t_card.cardNumber = :cardNumber${ind}`, {
                            ['cardNumber' + ind]: cardQty.cardNumber,
                        }),
                    );
                    return qb;
                }),
            )
            // .getSql();
            .getRawMany();

        this.logger.verbose(
            `Method getCardsForSaving is finished. Return value: ${JSON.stringify(userCards)}`,
        );
        return userCards;
    }

    /**
     * Updates/Inserts card quantity to the db
     * @param userCards Cards in the db
     * @param cardQuantitys The new cards
     * @param userId
     */
    private async addCardsToDb(
        userCards: DbAddCard[],
        pCardVariations: PossibleCardVariation[],
        cardQuantitys: CardQuantity[],
        userId: number,
    ) {
        for (const userCard of userCards) {
            const newAddCard = cardQuantitys.find(card => card.cardNumber === userCard.cardNumber);
            const pCardVariation = pCardVariations.find(pcv => {
                return (
                    newAddCard.cardNumber === pcv.card.cardNumber &&
                    newAddCard.type === pcv.cardVariantType
                );
            }); // There can only 1 element
            const cardVariation = pCardVariation.cardVariation[0];

            if (userCard.cardAmountId) {
                await this.updateCardAmount(
                    userCard,
                    newAddCard.cardQuantity,
                    newAddCard.cardQuantityFoil,
                    userId,
                );

                if (!cardVariation) {
                    await this.insertCardVariation(
                        userCard.cardAmountId,
                        pCardVariation,
                        newAddCard,
                    );
                } else {
                    await this.updateCardVariation(cardVariation, newAddCard);
                }
            } else {
                const cardAmount = await this.insertCardAmount(
                    userCard.cardId,
                    newAddCard.cardQuantity,
                    newAddCard.cardQuantityFoil,
                    userId,
                );
                this.insertCardVariation(cardAmount.id, pCardVariation, newAddCard);
            }
        }
    }

    private async updateCardVariation(cardVariation: CardVariation, cardQuantitys: CardQuantity) {
        const updateCardVariantAmount: any = {};
        updateCardVariantAmount['n' + cardQuantitys.language] =
            cardVariation['n' + cardQuantitys.language] + cardQuantitys.cardQuantity;
        updateCardVariantAmount['f' + cardQuantitys.language] =
            cardVariation['f' + cardQuantitys.language] + cardQuantitys.cardQuantityFoil;

        await this.manager.update<CardVariation>(
            CardVariation,
            { id: cardVariation.id },
            updateCardVariantAmount,
        );
    }

    private async insertCardVariation(
        cardAmountId: number,
        pCardVariation: PossibleCardVariation,
        cardQuantitys: CardQuantity,
    ) {
        const insertCardVariation = this.manager.create<CardVariation>(CardVariation);
        const cardAmount = this.manager.create<CardAmount>(CardAmount);
        cardAmount.id = cardAmountId;
        insertCardVariation.cardAmount = cardAmount;
        insertCardVariation.possibleCardVariation = pCardVariation;
        insertCardVariation['n' + cardQuantitys.language] = cardQuantitys.cardQuantity;
        insertCardVariation['f' + cardQuantitys.language] = cardQuantitys.cardQuantityFoil;

        await this.manager.save<CardVariation>(insertCardVariation);
    }

    /**
     * Insert the new quantity. Use it with remove (negative number) and adding (positive number)
     * @param cardId
     * @param cardQuantity
     * @param userId
     */
    private async insertCardAmount(
        cardId: number,
        cardQuantity: number,
        cardQuantityFoil: number,
        userId: number,
    ): Promise<CardAmount> {
        cardQuantity = cardQuantity > 0 ? cardQuantity : -1 * cardQuantity;
        const insertCardAmount = new CardAmount();
        insertCardAmount.amount = cardQuantity;
        insertCardAmount.foilAmount = cardQuantityFoil;
        insertCardAmount.userId = userId;
        insertCardAmount.cardId = cardId;
        const cardAmount = await insertCardAmount.save();
        this.logger.verbose(
            `Save card amount with is ${insertCardAmount.id} with ${cardQuantity} quantity and ` +
                ` ${cardQuantityFoil} foil quantity for userId ${userId} and CardId ${cardId}`,
        );

        return cardAmount;
    }

    /**
     * Find the new quantity and update. Use it with remove (negative number) and adding (positive number)
     * @param userCard
     * @param modifyQuantity
     * @param userId
     */
    private async updateCardAmount(
        userCard: DbAddCard,
        modifyQuantity: number,
        modifyQuantityFoil: number,
        userId: number,
    ) {
        let newAmount = userCard.quantity + modifyQuantity;
        let newAmountFoil = userCard.quantityFoil + modifyQuantityFoil;
        newAmount = newAmount > 0 ? newAmount : 0;
        newAmountFoil = newAmountFoil > 0 ? newAmountFoil : 0;
        await CardAmount.update(
            { id: userCard.cardAmountId },
            { amount: newAmount, foilAmount: newAmountFoil },
        );
        this.logger.verbose(
            `Update cardAmountId ${userCard.cardAmountId} to (initial) ${userCard.quantity} + (adding value) ` +
                `${modifyQuantity} and (initial foil) ${userCard.quantityFoil} + (adding value foil) ${modifyQuantityFoil} ` +
                ` for userId ${userId} and CardId ${userCard.cardId}`,
        );
    }
}
