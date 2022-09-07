import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entity/card.entity';
import { User } from '../auth/entity/user.entity';
import { CardRepository } from './card.repository';
import { CardAmountDto } from './dto/card-amount.dto';
import { ModifyCardDto } from './dto/add-card.dto';
import { AllVersionCardDto } from './dto/all-version-card.dto';
import { AddPosibleCardVariationDto } from './card.controller';
import { PossibleCardVariation } from './entity/possible-card-variation.entity';

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

    async addPosibleCardVariation(
        addPosibleCardVariationDto: AddPosibleCardVariationDto,
    ): Promise<void> {
        const foundCard = await this.cardRepository.findOne(addPosibleCardVariationDto.cardId, {
            relations: ['possibleCardVariation'],
        });
        if (!foundCard) {
            this.logger.error(
                `We coud not found card with id [${addPosibleCardVariationDto.cardId}]`,
            );
            throw new InternalServerErrorException();
        }

        const foundType = foundCard.possibleCardVariation.find(
            p => p.cardVariantType === addPosibleCardVariationDto.cardVariantType,
        );
        if (foundType) {
            this.logger.error(
                `Card with id [${addPosibleCardVariationDto.cardId}] already has possible card variation [id: ${foundType.id}, cardVariantType: ${foundType.cardVariantType}]`,
            );
            throw new InternalServerErrorException();
        }

        const possCardVar = this.cardRepository.manager
            .getRepository<PossibleCardVariation>(PossibleCardVariation)
            .create();
        possCardVar.card = foundCard;
        possCardVar.cardVariantType = addPosibleCardVariationDto.cardVariantType;
        possCardVar.hasNormal = addPosibleCardVariationDto.hasNormal;
        possCardVar.hasFoil = addPosibleCardVariationDto.hasFoil;

        await possCardVar.save();
        this.logger.log(
            `Created new possible card [id: ${possCardVar.id}, possibleType: ${possCardVar.cardVariantType}, ` +
                `hasNormal: ${possCardVar.hasNormal}, hasFoil: ${possCardVar.hasFoil}, ` +
                `card:[id: ${possCardVar.card.id}, cardName: ${possCardVar.card.name}, cardNum: ${possCardVar.card.cardNumber}] cardId: ${possCardVar.card.id}]`,
        );
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
}
