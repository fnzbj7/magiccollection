import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from './card.entity';

@Entity()
export class UniqueCard extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'card_name', unique: true })
    cardName: string;

    @OneToMany(
        () => Card, // type
        card => card.uniqueCard,
    )
    card: Card[];
}
