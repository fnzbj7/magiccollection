import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CardVariantType } from './card-variant-type.enum';
import { CardVariation } from './card-variation.entity';
import { Card } from './card.entity';

@Entity()
export class PossibleCardVariation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: CardVariantType, default: CardVariantType.NORMAL })
    cardVariantType: CardVariantType;

    @Column({ name: 'has_normal' })
    hasNormal: boolean;

    @Column({ name: 'has_foil' })
    hasFoil: boolean;

    @OneToMany(
        () => CardVariation, // type
        cardVariation => cardVariation.possibleCardVariation,
    )
    cardVariation: CardVariation[];

    @ManyToOne(
        () => Card, // type
        card => card.possibleCardVariation,
    )
    @JoinColumn({ name: 'card_1' })
    card: Card;
}
