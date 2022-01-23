import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    BaseEntity,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { User } from '../../auth/entity/user.entity';
import { CardVariation } from './card-variation.entity';
import { Card } from './card.entity';

@Entity()
export class CardAmount extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    amount: number;

    @Column({ name: 'foil_amount', default: 0 })
    foilAmount: number;

    @ManyToOne(
        () => User, // type
        user => user.cardAmount,
    )
    @JoinColumn({ name: 'user_1' })
    user: User;

    @Column({ name: 'user_1' })
    userId: number;

    @ManyToOne(
        () => Card, // type
        card => card.cardAmount,
    )
    @JoinColumn({ name: 'card_1' })
    card: Card;

    @Column({ name: 'card_1' })
    cardId: number;

    @OneToMany(
        () => CardVariation, // type
        cardVariation => cardVariation.cardAmount,
    )
    cardVariation: CardVariation[];
}
