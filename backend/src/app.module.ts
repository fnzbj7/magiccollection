import { Module, Global } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { MailService } from './shared/mail.service';
import { CalendarModule } from './calendar/calendar.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Global()
@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig), CardModule, AuthModule, CalendarModule],
    exports: [MailService],
    controllers: [AppController],
    providers: [MailService, AppService],
})
export class AppModule {}
