import { EntityRepository, Repository } from 'typeorm';
import { CalendarEvent } from '../entity/calendar-event.entity';

@EntityRepository(CalendarEvent)
export class CalendarEventRepository extends Repository<CalendarEvent> {
    async getAllCalendarEvent(): Promise<CalendarEvent[]> {
        return await this.find();
    }
}
