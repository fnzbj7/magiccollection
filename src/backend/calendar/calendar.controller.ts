import {
    Controller,
    Get,
    Post,
    Logger,
    Body,
    UseGuards,
    Patch,
    Delete,
    Param,
} from '@nestjs/common';
import { CalendarEvent } from './entity/calendar-event.entity';
import { CalendarService } from './calendar.service';
import { PrivilegeGuard } from '../auth/privilege.guard';
import { PrivilegeEnum } from '../auth/enum/privilege.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('calendar')
export class CalendarController {
    private logger = new Logger(CalendarController.name);

    constructor(private calendarService: CalendarService) {}

    @Get('/all')
    async getAllCalendarEvent(): Promise<CalendarEvent[]> {
        return await this.calendarService.getAllCalendarEvent();
    }

    @Post('/add')
    @UseGuards(AuthGuard(), new PrivilegeGuard(PrivilegeEnum.EVENT_MODIFY))
    async addCalendarEvent(@Body() calendarEvent: CalendarEvent): Promise<CalendarEvent> {
        this.logger.log(calendarEvent);
        return await this.calendarService.saveCalendarEvent(calendarEvent);
    }

    @Patch('/modify')
    @UseGuards(AuthGuard(), new PrivilegeGuard(PrivilegeEnum.EVENT_MODIFY))
    async modifyCalendarEvent(@Body() calendarEvent: CalendarEvent): Promise<CalendarEvent> {
        this.logger.log(calendarEvent);
        return await this.calendarService.saveCalendarEvent(calendarEvent);
    }

    @Delete('/delete/:id')
    @UseGuards(AuthGuard(), new PrivilegeGuard(PrivilegeEnum.EVENT_MODIFY))
    async deleteCalendarEvent(@Param('id') id: number) {
        this.logger.log(id);
        await this.calendarService.deleteCalendarEvent(id);
    }
}
