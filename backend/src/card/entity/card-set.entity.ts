import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Card } from './card.entity';

@Entity()
export class CardSet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'short_name' })
  shortName: string;

  @OneToMany(
    () => Card, // type
    (card) => card.cardSet,
  )
  card: Card[];
}
