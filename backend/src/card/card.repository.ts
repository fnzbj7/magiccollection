import { Repository, EntityRepository } from 'typeorm';
import { Card } from './entity/card.entity';
import { User } from '../auth/entity/user.entity';

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
    ).leftJoinAndSelect(
      't_card.cardAmount',
      't_cardAmount',
      't_cardAmount.user_1 = :userId',
      {userId: user.id},
    ).getMany();
  }
}
