import { EntityRepository, Repository, getConnection } from 'typeorm';
import { CalendarEvent } from '../entity/calendar-event.entity';
import { User } from '../../auth/entity/user.entity';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(CalendarEvent)
export class CalendarEventRepository extends Repository<CalendarEvent> {
    async getAllCalendarEvent(): Promise<CalendarEvent[]> {
        return this.find();
    }

    async joinCalendarEvent(calendarEvent: CalendarEvent, user: User) {
        try {
            await getConnection()
                .createQueryBuilder()
                .relation(CalendarEvent, 'users')
                .of(calendarEvent.id)
                .add(user.id);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('User already joined this event!');
            } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
                throw new ConflictException(
                    `There is no Calendar event with id ${calendarEvent.id}!`,
                );
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async leaveCalendarEvent(calendarId: number, user: User) {
        try {
            await getConnection()
                .createQueryBuilder()
                .relation(CalendarEvent, 'users')
                .of(calendarId)
                .remove(user.id);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('User already joined this event!');
            } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
                throw new ConflictException(`There is no Calendar event with id ${calendarId}!`);
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}
