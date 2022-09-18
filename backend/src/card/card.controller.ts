import {
    Controller,
    Get,
    Post,
    Param,
    UseGuards,
    Body,
    Logger,
    Query,
    ValidationPipe,
} from '@nestjs/common';
import { CardService } from './card.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/entity/user.entity';
import { ModifyCardDto } from './dto/add-card.dto';
import { CardAmountDto } from './dto/card-amount.dto';
import { AllVersionCardDto } from './dto/all-version-card.dto';
import { CardVariantType } from './entity/card-variant-type.enum';
import { AllVersionCardForUserDto } from './dto/all-version-card-for-user.dto';
import { Card } from './entity/card.entity';

@Controller('card')
export class CardController {
    private logger = new Logger('CardController');

    constructor(private cardService: CardService) {}

    @Get('/cardset/:set')
    async getCardSet(@Param('set') cardSet: string): Promise<CardAmountDto[]> {
        return this.cardService.getCardSet(cardSet);
    }

    /**
     * @deprecated We will use the one with the users
     */
    @Get('/cardsetuser/:set')
    @UseGuards(AuthGuard())
    async getCardSetUser(
        @Param('set') cardSet: string,
        @GetUser() user: User,
    ): Promise<CardAmountDto[]> {
        return this.cardService.getCardSetUser(cardSet, user);
    }

    @Get('/user/:userId/:set')
    getCardsForUser(
        @Param('userId') userId: string,
        @Param('set') cardSet: string,
    ): Promise<CardAmountDto[]> {
        return this.cardService.getCardsForUser(+userId, cardSet);
    }

    @Post('/addcard')
    @UseGuards(AuthGuard())
    async addCard(@Body() addCard: ModifyCardDto, @GetUser() user: User): Promise<void> {
        await this.cardService.addCard(addCard, user);
    }

    @Post('/removecard')
    @UseGuards(AuthGuard())
    async removeCard(@Body() removeCard: ModifyCardDto, @GetUser() user: User): Promise<void> {
        await this.cardService.removeCard(removeCard, user);
    }

    @Get('/all-version-for-user')
    async getAllVersionForCard(
        @Query(new ValidationPipe()) allVersionCardDto: AllVersionCardForUserDto,
    ): Promise<CardAmountDto[]> {
        this.logger.log({ allVersionCardDto, a: '' + allVersionCardDto.uniqueCardId == '' });
        return await this.cardService.getAllVersionForUser(allVersionCardDto);
    }

    @Get('/all-version')
    async getAllVersionForCard2(@Query() allVersionCardDto: AllVersionCardDto): Promise<Card> {
        return await this.cardService.getAllVersion(allVersionCardDto);
    }

    @Post('/add-posible-card-variation')
    @UseGuards(AuthGuard())
    async addPosibleCardVariation(
        @Body() addPosibleCardVariationDto: AddPosibleCardVariationDto,
    ): Promise<void> {
        await this.cardService.addPosibleCardVariation(addPosibleCardVariationDto);
    }
}

export interface AddPosibleCardVariationDto {
    cardVariantType: CardVariantType;
    cardId: number;
    hasNormal: boolean;
    hasFoil: boolean;
}
