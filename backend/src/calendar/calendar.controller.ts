import { Controller, Get } from '@nestjs/common';
import { CalendarEvent } from './entity/calendar-event.entity';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
    constructor(private calendarService: CalendarService) {}

    @Get('/test')
    async getTest() {
        const a = new CalendarEvent();
        a.eventStart = new Date();
        await a.save();
        return 'alma';
    }

    @Get('/all')
    async getAllCalendarEvent() {
        return await this.calendarService.getAllCalendarEvent();
    }
}
