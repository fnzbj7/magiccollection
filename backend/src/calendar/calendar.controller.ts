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
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/entity/user.entity';
import { CalendarParticipantUserDto } from './dto/calendar-participant-user.dto';

@Controller('calendar')
export class CalendarController {
    private logger: Logger = new Logger(CalendarController.name);

    constructor(private calendarService: CalendarService) {}

    @Get('/all')
    async getAllCalendarEvent(): Promise<CalendarEvent[]> {
        return this.calendarService.getAllCalendarEvent();
    }

    @Post('/add')
    @UseGuards(AuthGuard(), new PrivilegeGuard(PrivilegeEnum.EVENT_MODIFY))
    async addCalendarEvent(@Body() calendarEvent: CalendarEvent): Promise<CalendarEvent> {
        this.logger.log(calendarEvent);
        return this.calendarService.saveCalendarEvent(calendarEvent);
    }

    @Patch('/modify')
    @UseGuards(AuthGuard(), new PrivilegeGuard(PrivilegeEnum.EVENT_MODIFY))
    async modifyCalendarEvent(@Body() calendarEvent: CalendarEvent): Promise<CalendarEvent> {
        this.logger.log(calendarEvent);
        return this.calendarService.saveCalendarEvent(calendarEvent);
    }

    @Delete('/delete/:id')
    @UseGuards(AuthGuard(), new PrivilegeGuard(PrivilegeEnum.EVENT_MODIFY))
    async deleteCalendarEvent(@Param('id') id: number) {
        this.logger.log(id);
        await this.calendarService.deleteCalendarEvent(id);
    }

    @Post('/join')
    @UseGuards(AuthGuard())
    async joinCalendarEvent(
        @Body() calendarEvent: CalendarEvent,
        @GetUser() user: User,
    ): Promise<string[]> {
        await this.calendarService.joinCalendarEvent(calendarEvent, user);
        return this.calendarService.allCalendarEventParticipant(calendarEvent.id);
    }

    @Delete('/leave/:id')
    @UseGuards(AuthGuard())
    async leaveCalendarEvent(
        @Param('id') calendarId: number,
        @GetUser() user: User,
    ): Promise<string[]> {
        await this.calendarService.leaveCalendarEvent(calendarId, user);
        return this.calendarService.allCalendarEventParticipant(calendarId);
    }

    @Get('/allparticipant/:id')
    async allCalendarEventParticipant(@Param('id') calendarId: number): Promise<string[]> {
        return this.calendarService.allCalendarEventParticipant(calendarId);
    }

    @Get('/allparticipantuser/:id')
    @UseGuards(AuthGuard())
    async allCalendarEventParticipantWithUser(
        @Param('id') calendarId: number,
        @GetUser() user: User,
    ): Promise<CalendarParticipantUserDto> {
        return this.calendarService.allCalendarEventParticipantUser(calendarId, user);
    }
}
