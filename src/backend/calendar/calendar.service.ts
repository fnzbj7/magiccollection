import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarEventRepository } from './repository/calendar-event.repository';
import { CalendarEvent } from './entity/calendar-event.entity';
import { getConnection } from 'typeorm';
import { User } from '../auth/entity/user.entity';

@Injectable()
export class CalendarService {
    constructor(
        @InjectRepository(CalendarEventRepository)
        private calendarEventRepository: CalendarEventRepository,
    ) {}

    async getAllCalendarEvent(): Promise<CalendarEvent[]> {
        return await this.calendarEventRepository.getAllCalendarEvent();
    }

    async saveCalendarEvent(calendarEvent: CalendarEvent): Promise<CalendarEvent> {
        return await this.calendarEventRepository.save(calendarEvent);
    }

    async deleteCalendarEvent(id: number) {
        await this.calendarEventRepository.delete({ id });
    }

    async joinCalendarEvent(calendarEvent: CalendarEvent, user: User) {
        await this.calendarEventRepository.joinCalendarEvent(calendarEvent, user);
    }

    async leaveCalendarEvent(calendarId: number, user: User) {
        await this.calendarEventRepository.leaveCalendarEvent(calendarId, user);
    }

    async allCalendarEventParticipant(calendarId: number): Promise<String[]> {
        const calendarEvent: CalendarEvent = await this.calendarEventRepository.findOne(
            calendarId,
            { relations: ['users'] },
        );
        return calendarEvent.users.map(user => user.name);
    }
}
