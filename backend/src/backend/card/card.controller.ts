import { Controller, Get, Post, Param, UseGuards, Body } from '@nestjs/common';
import { CardService } from './card.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/entity/user.entity';
import { ModifyCardDto } from './dto/add-card.dto';

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
        return await this.cardService.getCardSetUser(cardSet, user);
    }

    @Post('/addcard')
    @UseGuards(AuthGuard())
    async addCard(
        @Body() addCard: ModifyCardDto,
        @GetUser() user: User,
    ): Promise<void> {
        await this.cardService.addCard(addCard, user);
    }

    @Post('/removecard')
    @UseGuards(AuthGuard())
    async removeCard(
        @Body() removeCard: ModifyCardDto,
        @GetUser() user: User,
    ): Promise<void> {
        await this.cardService.removeCard(removeCard, user);
    }
}
