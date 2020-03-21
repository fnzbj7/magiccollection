import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarEventRepository } from './repository/calendar-event.repository';
import { CalendarEvent } from './entity/calendar-event.entity';

@Injectable()
export class CalendarService {
    constructor(
        @InjectRepository(CalendarEventRepository)
        private calendarEventRepository: CalendarEventRepository,
    ) {}

    async getAllCalendarEvent(): Promise<CalendarEvent[]> {
        return await this.calendarEventRepository.getAllCalendarEvent();
    }
}
