import { Module } from '@nestjs/common';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEventRepository } from './repository/calendar-event.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CalendarEventRepository])],
    controllers: [CalendarController],
    providers: [CalendarService],
})
export class CalendarModule {}
