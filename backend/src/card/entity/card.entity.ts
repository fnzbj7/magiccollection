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
import { UniqueCard } from './unique-card.entity';

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

    @ManyToOne(
        () => CardSet, // type
        cardSet => cardSet.card,
    )
    @JoinColumn({ name: 'card_set_1' })
    cardSet: CardSet;

    @ManyToOne(
        () => UniqueCard, // type
        uniqueCard => uniqueCard.card,
    )
    @JoinColumn({ name: 'unique_card_1' })
    uniqueCard: UniqueCard;

    @OneToMany(
        () => CardAmount, // type
        cardAmount => cardAmount.card,
    )
    cardAmount: CardAmount[];
}
