import { Controller, Get, Post, Query, Param, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/entity/user.entity';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Get('/cardset/:set')
  async getCardSet(@Param('set') cardSet: string) {
    return await this.cardService.getCardSet(cardSet);
  }

  @Get('/cardsetuser/:set')
  @UseGuards(AuthGuard())
  async getCardSetUser(@Param('set') cardSet: string, @GetUser() user: User) {
    console.log(user);
    return await this.cardService.getCardSetUser(cardSet, user);
  }

  @Post('/createDummyCards')
  async createDummyCards(): Promise<string> {

    return 'done';
  }

}
