import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { User } from '../../auth/entity/user.entity';
import { Card } from './card.entity';

@Entity()
export class CardAmount extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(type => User, user => user.cardAmount)
  @JoinColumn({ name: 'user_1' })
  user: User;

  @Column({name: 'user_1'})
  userId: number;

  @ManyToOne(type => Card, card => card.cardAmount)
  @JoinColumn({ name: 'card_1' })
  card: Card;
}
