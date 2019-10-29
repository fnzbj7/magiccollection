import { Module, Global } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { MailService } from './shared/mail.service';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CardModule, AuthModule],
  exports: [MailService],
  controllers: [],
  providers: [MailService],
})
export class AppModule {}
