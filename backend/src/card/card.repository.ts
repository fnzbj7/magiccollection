import { Repository, EntityRepository, Brackets } from 'typeorm';
import { Card } from './entity/card.entity';
import { User } from '../auth/entity/user.entity';
import { AddCardDto } from './dto/add-card.dto';
import { BadRequestException } from '@nestjs/common';
import { CardAmount } from './entity/card-amount.entity';
import { DbAddCard } from './dto/db-add-card.model';

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {
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

    async addSetCard(addCard: AddCardDto, userId: number) {
        // check if there is more than one from the same card number
        addCard.cardQuantitys.reduce((a, b) => {
            if (a[b.cardNumber]) {
                throw new BadRequestException(
                    `There was more than one from the same card number: ${
                        b.cardNumber
                    }`,
                );
            }
            return { ...a, [b.cardNumber]: (a[b.cardNumber] || 0) + 1 };
        }, {});

        // Check if the card number is in the limit
        const cardss = await this.createQueryBuilder('t_card')
            .select('t_card.cardNumber')
            .innerJoin(
                't_card.cardSet',
                't_cardSet',
                't_cardSet.short_name = :name',
                { name: addCard.setShortName },
            )
            .orderBy('t_card.cardNumber', 'DESC')
            .getOne();
        if (!cardss) {
            throw new BadRequestException(
                `The set name is not in the database: ${addCard.setShortName}`,
            );
        }
        const incorrectNum = addCard.cardQuantitys.filter(
            item => item.cardNumber > cardss.cardNumber,
        );

        if (incorrectNum.length > 0) {
            throw new BadRequestException(
                `There are card number which is higher than the max: ${
                    incorrectNum[0].cardNumber
                }`,
            );
        }

        // Get all the cards
        // cardId, cardAmountId, cardNumber, quantity
        //Left join is kell a cardId-hoz
        const userCards: DbAddCard[] = await this.createQueryBuilder('t_card')
            .select([
                't_card.id as cardId',
                't_card_amount.id as cardAmountId',
                't_card_amount.amount as quantity',
                't_card.cardNumber as cardNumber',
            ])
            .leftJoin('t_card.cardAmount', 't_card_amount')
            .leftJoin('t_card_amount.user', 't_user', 't_user.id = :userId', {
                userId,
            })
            .innerJoin(
                't_card.cardSet',
                't_cardSet',
                't_cardSet.short_name = :name',
                { name: addCard.setShortName },
            )
            .where(
                new Brackets(qb => {
                    addCard.cardQuantitys.forEach((cardQty, ind) =>
                        qb.orWhere(`t_card.cardNumber = :cardNumber${ind}`, {
                            ['cardNumber' + ind]: cardQty.cardNumber,
                        }),
                    );
                    // qb.where('1 = 2');
                    return qb;
                }),
            )
            // .getSql();
            .getRawMany();
        console.log(userCards);

        // Updates/Inserts card quantity
        userCards.forEach(async userCard => {
            const newAddCard = addCard.cardQuantitys.find(
                card => card.cardNumber === userCard.cardNumber,
            );
            if (userCard.cardAmountId) {
                // find the new quantity and update
                await CardAmount.update(
                    { id: userCard.cardAmountId },
                    { amount: userCard.quantity + newAddCard.cardQuantity },
                );
            } else {
                const insertCardAmount = new CardAmount();
                insertCardAmount.amount = newAddCard.cardQuantity;
                insertCardAmount.userId = userId;
                insertCardAmount.cardId = userCard.cardId;
                await insertCardAmount.save();
            }
        });
    }
}
