import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Privilege extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    desc: string;

    @ManyToMany(
        type => User,
        user => user.privileges,
    )
    users: User[];
}
