import { Module } from '@nestjs/common';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEventRepository } from './repository/calendar-event.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([CalendarEventRepository]), AuthModule],
    controllers: [CalendarController],
    providers: [CalendarService],
})
export class CalendarModule {}
