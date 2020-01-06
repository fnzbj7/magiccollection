import { Repository, EntityRepository, Brackets } from 'typeorm';
import { Card } from './entity/card.entity';
import { User } from '../auth/entity/user.entity';
import { ModifyCardDto } from './dto/add-card.dto';
import { BadRequestException, Logger } from '@nestjs/common';
import { CardAmount } from './entity/card-amount.entity';
import { DbAddCard } from './dto/db-add-card.model';
import { CardQuantity } from './dto/card-quantity.model';

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {
    private logger = new Logger('CardRepository');

    async getCardSet(cardSet: string): Promise<Card[]> {
        return await this.createQueryBuilder('card')
            .innerJoinAndSelect(
                'card.cardSet',
                'cardSet',
                'cardSet.short_name = :name',
                { name: cardSet },
            )
            .getMany();
    }

    async getCardSetUser(cardSet: string, user: User): Promise<Card[]> {
        return await this.createQueryBuilder('t_card')
            .innerJoinAndSelect(
                't_card.cardSet',
                't_cardSet',
                't_cardSet.short_name = :name',
                { name: cardSet },
            )
            .leftJoinAndSelect(
                't_card.cardAmount',
                't_cardAmount',
                't_cardAmount.user_1 = :userId',
                { userId: user.id },
            )
            .getMany();
    }

    async modifySetCard(modifyCard: ModifyCardDto, user: User) {
        this.logger.verbose(
            `Method removeSetCard starting. ModifyCardDto: ${JSON.stringify(user)}`,
        );
        const userId = user.id;
        this.checkCardUniqueness(modifyCard);
        const lastCard = await this.getLastCardFromSet(modifyCard.setShortName);
        this.checkCardNumberValidity(
            modifyCard.cardQuantitys,
            lastCard.cardNumber,
        );

        const userCards = await this.getCardsForSaving(modifyCard, userId);
        this.addCardsToDb(userCards, modifyCard.cardQuantitys, userId);
    }

    /**
     * Check if there is more than one from the same card number
     * @param modifyCard
     */
    private checkCardUniqueness(modifyCard: ModifyCardDto) {
        modifyCard.cardQuantitys.reduce((a, b) => {
            if (a[b.cardNumber]) {
                throw new BadRequestException(
                    `There was more than one from the same card number: ${
                        b.cardNumber
                    }`,
                );
            }
            return { ...a, [b.cardNumber]: (a[b.cardNumber] || 0) + 1 };
        }, {});
    }

    /**
     * Give back the last card (last card number of the set).
     * @param setShortName filter the t_cardset.short_name column
     * @throws `BadRequestException` - If the `setShortName` not exist in the t_cardset.short_name column table
     */
    private async getLastCardFromSet(setShortName: string): Promise<Card> {
        const lastCard = await this.createQueryBuilder('t_card')
            .select('t_card.cardNumber')
            .innerJoin(
                't_card.cardSet',
                't_cardSet',
                't_cardSet.short_name = :name',
                { name: setShortName },
            )
            .orderBy('t_card.cardNumber', 'DESC')
            .getOne();
        if (!lastCard) {
            throw new BadRequestException(
                `The set name is not in the database: ${setShortName}`,
            );
        }
        return lastCard;
    }

    /**
     * Check if the card number is in the limit. if it is higher than `lastCardNumber` then throw exception
     * @param addCard This conteins the card numer list
     * @param lastCardNumber This is the limit
     * @throws `BadRequestException`
     */
    private checkCardNumberValidity(
        cardQuantitys: CardQuantity[],
        lastCardNumber: number,
    ) {
        const incorrectNum = cardQuantitys.filter(
            item => item.cardNumber > lastCardNumber,
        );

        if (incorrectNum.length > 0) {
            throw new BadRequestException(
                `There are card number which is higher than the max: ${
                    incorrectNum[0].cardNumber
                }`,
            );
        }
    }

    /**
     * Get all the cards
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
                't_card.cardNumber as cardNumber',
            ])
            .leftJoin(
                't_card.cardAmount',
                't_card_amount',
                't_card_amount.userId = :userId',
                {
                    userId,
                },
            )
            .innerJoin(
                't_card.cardSet',
                't_cardSet',
                't_cardSet.short_name = :name',
                { name: modifyCard.setShortName },
            )
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
            `Method getCardsForSaving is finished. Return value: ${JSON.stringify(
                userCards,
            )}`,
        );
        return userCards;
    }

    /**
     * Updates/Inserts card quantity to the db
     * @param userCards Cards in the db
     * @param cardQuantitys The new cards
     * @param userId
     */
    private addCardsToDb(
        userCards: DbAddCard[],
        cardQuantitys: CardQuantity[],
        userId: number,
    ) {
        userCards.forEach(async userCard => {
            const newAddCard = cardQuantitys.find(
                card => card.cardNumber === userCard.cardNumber,
            );
            if (userCard.cardAmountId) {
                await this.updateCardAmount(
                    userCard,
                    newAddCard.cardQuantity,
                    userId,
                );
            } else {
                await this.insertCardAmount(
                    userCard.cardId,
                    newAddCard.cardQuantity,
                    userId,
                );
            }
        });
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
        userId: number,
    ) {
        cardQuantity = cardQuantity > 0 ? cardQuantity : -1 * cardQuantity;
        const insertCardAmount = new CardAmount();
        insertCardAmount.amount = cardQuantity;
        insertCardAmount.userId = userId;
        insertCardAmount.cardId = cardId;
        await insertCardAmount.save();
        this.logger.verbose(
            `Save card amount with is ${
                insertCardAmount.id
            } with ${cardQuantity} quantity for userId ${userId} and CardId ${cardId}`,
        );
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
        userId: number,
    ) {
        let newAmount = userCard.quantity + modifyQuantity;
        newAmount = newAmount > 0 ? newAmount : 0;
        await CardAmount.update(
            { id: userCard.cardAmountId },
            { amount: newAmount },
        );
        this.logger.verbose(
            `Update cardAmountId ${userCard.cardAmountId} to (initial) ${
                userCard.quantity
            } + (adding value) ${modifyQuantity} for userId ${userId} and CardId ${
                userCard.cardId
            }`,
        );
    }
}
