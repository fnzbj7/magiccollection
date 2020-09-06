import { Controller, Get, Post, Logger, Body, UseGuards } from '@nestjs/common';
import { CalendarEvent } from './entity/calendar-event.entity';
import { CalendarService } from './calendar.service';
import { PrivilegeGuard } from '../auth/privilege.guard';
import { PrivilegeEnum } from '../auth/enum/privilege.enum';
import { AuthGuard } from '@nestjs/passport';

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
    @UseGuards(AuthGuard(), new PrivilegeGuard(PrivilegeEnum.EVENT_MODIFY))
    async addCalendarEvent(@Body() calendarEvent: CalendarEvent) {
        this.logger.log(calendarEvent);
        await this.calendarService.saveCalendarEvent(calendarEvent);
        // a.eventStart = new Date();
        // await a.save();
    }
}
