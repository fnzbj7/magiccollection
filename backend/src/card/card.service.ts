import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entity/card.entity';
import { User } from '../auth/entity/user.entity';
import { CardRepository } from './card.repository';
import { CardAmountDto } from './dto/card-amount.dto';
import { ModifyCardDto } from './dto/add-card.dto';
import { AllVersionCardDto } from './dto/all-version-card.dto';

@Injectable()
export class CardService {
    private logger: Logger = new Logger(CardService.name);

    constructor(
        @InjectRepository(CardRepository)
        private cardRepository: CardRepository,
    ) {}

    async getCardSet(cardSet: string): Promise<CardAmountDto[]> {
        const cardList = await this.cardRepository.getCardSet(cardSet);
        return this.convertToCardAmountDto(cardList);
    }

    async getCardSetUser(cardSet: string, user: User): Promise<CardAmountDto[]> {
        const cardList = await this.cardRepository.getCardSetUser(cardSet, user.id);
        return this.convertToCardAmountDto(cardList);
    }

    async getCardsForUser(userId: number, cardSet: string): Promise<CardAmountDto[]> {
        const cardList = await this.cardRepository.getCardSetUser(cardSet, userId);
        return this.convertToCardAmountDto(cardList);
    }

    async addCard(addCard: ModifyCardDto, user: User) {
        await this.cardRepository.modifySetCard(addCard, user);
    }

    async removeCard(removeCard: ModifyCardDto, user: User) {
        await this.cardRepository.modifySetCard(removeCard, user);
    }

    async getAllVersionForCard(allVersionCardDto: AllVersionCardDto): Promise<CardAmountDto[]> {
        const { uniqueCardId, userId } = allVersionCardDto;
        let cardList: Card[];
        if (userId) {
            cardList = await this.cardRepository.getAllVersionForCardWithUser(uniqueCardId, userId);
        } else {
            cardList = await this.cardRepository.getAllVersionForCard(uniqueCardId);
        }

        return this.convertToCardAmountDto(cardList);
    }

    async getAllVersionForCardWithUser(uniqueCardId: number): Promise<CardAmountDto[]> {
        const cardList = await this.cardRepository.getAllVersionForCard(uniqueCardId);
        return this.convertToCardAmountDto(cardList);
    }

    private convertToCardAmountDto(cardList: Card[]): CardAmountDto[] {
        this.logger.debug({ cardList });
        const cardAmountDtoList: CardAmountDto[] = [];
        for (const card of cardList) {
            const {
                layout,
                rarity,
                name,
                cardNumber,
                uniqueCardId,
                cardSet: { shortName: cardExpansion },
            } = card;
            const { cardAmount, cardAmountFoil } = this.getCardAmount(card);

            cardAmountDtoList.push({
                cardExpansion,
                cardAmount,
                cardAmountFoil,
                layout,
                rarity,
                name,
                uniqueCardId,
                cardNumber: ('' + cardNumber).padStart(3, '0'),
            });
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
