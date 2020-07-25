import { Controller, Get, Post, Logger, Body } from '@nestjs/common';
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

    // TODO autentikáció
    @Post('/add')
    async addCalendarEvent(@Body() calendarEvent: CalendarEvent) {
        this.logger.log(calendarEvent);
        await this.calendarService.saveCalendarEvent(calendarEvent);
        // a.eventStart = new Date();
        // await a.save();
    }
}
