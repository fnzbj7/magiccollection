import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardService } from './card.service';
import { CardRepository } from './card.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CardRepository]),
    AuthModule,
  ],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
