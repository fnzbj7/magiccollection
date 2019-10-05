import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CardSet } from './card-set.entity';
import { CardAmount } from './card-amount.entity';

@Entity()
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'card_number' })
  cardNumber: number;

  @Column()
  name: string;

  @Column()
  rarity: string;

  @Column()
  layout: string;

  @ManyToOne(type => CardSet, cardSet => cardSet.card)
  @JoinColumn({ name: 'card_set_1' })
  cardSet: CardSet;

  @OneToMany(type => CardAmount, cardAmount => cardAmount.card)
  cardAmount: CardAmount[];
}
