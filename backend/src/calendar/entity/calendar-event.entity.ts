import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { User } from '../../auth/entity/user.entity';

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

  @ManyToMany(
    () => User, // type
    (user) => user.calendarEvents,
  )
  @JoinTable({
    name: 'user_calendar_event',
    joinColumn: { name: 'calendar_event_1' },
    inverseJoinColumn: { name: 'user_1' },
  })
  users: User[];
}
