import { Controller, Get, Post, Logger } from '@nestjs/common';
import { CalendarEvent } from './entity/calendar-event.entity';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
    private logger = new Logger(CalendarController.name);

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

    @Post('/add')
    async addCalendarEvent(dat: Date) {
        this.logger.log(dat);
        const a = new CalendarEvent();
        // a.eventStart = new Date();
        // await a.save();
        return 'alma';
    }
}
