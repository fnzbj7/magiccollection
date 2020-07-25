import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class CalendarEvent extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventStart: Date;

    @Column()
    hour: number;

    @Column()
    minute: number;

    @Column()
    title: string;

    @Column()
    location: string;
}
