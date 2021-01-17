import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entity/card.entity';
import { User } from '../auth/entity/user.entity';
import { CardRepository } from './card.repository';
import { CardAmountDto } from './dto/card-amount.dto';
import { ModifyCardDto } from './dto/add-card.dto';

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(CardRepository)
        private cardRepository: CardRepository,
    ) {}

    async getCardSet(cardSet: string): Promise<CardAmountDto[]> {
        const cardList = await this.cardRepository.getCardSet(cardSet);
        return this.convertToCardAmountDto(cardList);
    }

    async getCardSetUser(cardSet: string, user: User): Promise<CardAmountDto[]> {
        const cardList = await this.cardRepository.getCardSetUser(cardSet, user);
        return this.convertToCardAmountDto(cardList);
    }

    async addCard(addCard: ModifyCardDto, user: User) {
        await this.cardRepository.modifySetCard(addCard, user);
    }

    async removeCard(removeCard: ModifyCardDto, user: User) {
        await this.cardRepository.modifySetCard(removeCard, user);
    }

    private convertToCardAmountDto(cardList: Card[]): CardAmountDto[] {
        const cardAmountDtoList: CardAmountDto[] = [];
        for (const card of cardList) {
            const cardAmountDto = new CardAmountDto();
            cardAmountDto.cardExpansion = card.cardSet.shortName;
            cardAmountDto.cardNumber = this.pad(card.cardNumber, 3);
            const { cardAmount, cardAmountFoil } = this.getCardAmount(card);
            cardAmountDto.cardAmount = cardAmount;
            cardAmountDto.cardAmountFoil = cardAmountFoil;
            cardAmountDto.layout = card.layout;
            cardAmountDto.rarity = card.rarity;
            cardAmountDto.name = card.name;
            cardAmountDtoList.push(cardAmountDto);
        }

        return cardAmountDtoList;
    }

    private getCardAmount(card: Card): { cardAmount: number; cardAmountFoil: number } {
        return {
            cardAmount: card.cardAmount && card.cardAmount[0] ? card.cardAmount[0].amount : 0,
            cardAmountFoil:
                card.cardAmount && card.cardAmount[0] ? card.cardAmount[0].foilAmount : 0,
        };
    }

    private pad(text: string | number, width: number, z?: string) {
        z = z || '0';
        text = text + '';
        return text.length >= width ? text : new Array(width - text.length + 1).join(z) + text;
    }
}
