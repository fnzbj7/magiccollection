import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  Unique,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CardAmount } from '../../card/entity/card-amount.entity';
import { Privilege } from './privilege.entity';
import { CalendarEvent } from '../../calendar/entity/calendar-event.entity';

export enum UserSource {
  SITE = 'site',
  FB = 'fb',
}

@Entity()
@Unique(['email', 'source'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  salt: string;

  @Column({ nullable: true, length: 10 })
  dci: string;

  @Column({ nullable: true, default: false })
  activated: boolean;

  @Column({ type: 'enum', enum: UserSource, default: UserSource.SITE })
  source: UserSource;

  @OneToMany(
    () => CardAmount, // type
    (cardAmount) => cardAmount.user,
    {
      nullable: true,
    },
  )
  cardAmount: CardAmount[];

  @ManyToMany(
    () => Privilege, // type
    (privilege) => privilege.users,
  )
  @JoinTable({
    name: 'user_privilege',
    joinColumn: { name: 'user_1' },
    inverseJoinColumn: { name: 'privilege_1' },
  })
  privileges: Privilege[];

  @ManyToMany(
    () => CalendarEvent, // type
    (calendarEvent) => calendarEvent.users,
  )
  calendarEvents: CalendarEvent[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
