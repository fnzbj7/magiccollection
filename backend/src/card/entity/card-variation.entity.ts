import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CardAmount } from './card-amount.entity';
import { PossibleCardVariation } from './possible-card-variation.entity';

/**
 * Elnevezés (n|f)([En,Jp,Ge])
 * n = Normal, f = Foil
 * en, jp, ge = Languages
 */
@Entity()
export class CardVariation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // EN - English
    @Column({ default: 0 })
    nEn: number;

    @Column({ default: 0 })
    fEn: number;

    // JP - Japanese
    @Column({ default: 0 })
    nJp: number;

    @Column({ default: 0 })
    fJp: number;

    // SP - Spanish
    @Column({ default: 0 })
    nSp: number;

    @Column({ default: 0 })
    fSp: number;

    // FR - French
    @Column({ default: 0 })
    nFr: number;

    @Column({ default: 0 })
    fFr: number;

    // DE - German
    @Column({ default: 0 })
    nDe: number;

    @Column({ default: 0 })
    fDe: number;

    // IT - Italian
    @Column({ default: 0 })
    nIt: number;

    @Column({ default: 0 })
    fIt: number;

    // PT - Portuguese
    @Column({ default: 0 })
    nPt: number;

    @Column({ default: 0 })
    fPt: number;

    // KR - Korean
    @Column({ default: 0 })
    nKr: number;

    @Column({ default: 0 })
    fKr: number;

    // RU - Russian
    @Column({ default: 0 })
    nRu: number;

    @Column({ default: 0 })
    fRu: number;

    // CS - Simplified Chinese
    @Column({ default: 0 })
    nCs: number;

    @Column({ default: 0 })
    fCs: number;

    // CT - Traditional Chinese
    @Column({ default: 0 })
    nCt: number;

    @Column({ default: 0 })
    fCt: number;

    @ManyToOne(
        () => CardAmount, // type
        cardAmount => cardAmount.cardVariation,
    )
    @JoinColumn({ name: 'card_amount_1' })
    cardAmount: CardAmount;

    @ManyToOne(
        () => PossibleCardVariation, // type
        possibleCardVariation => possibleCardVariation.cardVariation,
    )
    @JoinColumn({ name: 'possible_card_variation_1' })
    possibleCardVariation: PossibleCardVariation;

    /*
    TODO
        Kapcsolódik egy possible-höz
        Kapcsolódik egy card amounthoz
        van darabszáma nyelvenként.
    */
}
