import { Injectable, Type } from '@angular/core';
import { Card } from '../model/card.model';
import { ModalService } from './modal.service';

@Injectable({ providedIn: 'root' })
export class MagicCardModalService {
    actualMagicCard?: Card;
    magicCardList?: Card[];

    constructor(private modalService: ModalService) {}

    createMagicCardModal<T>(component: Type<T>, magicCard: Card) {
        this.actualMagicCard = magicCard;

        this.modalService.init<T, { magicCard: Card }, unknown>(
            component,
            {
                magicCard,
            },
            {},
        );
    }

    destroy() {
        this.modalService.destroy();
        this.actualMagicCard = undefined;
    }

    getNextCard(): Card | null {
        let index = this.checkErrorOrGetIndex();
        if (index === null || !this.magicCardList) return null;

        if (this.magicCardList.length - 1 === index) {
            console.log('A modal elérte az utolsó kártya lapot');
            return null;
        }

        this.actualMagicCard = this.magicCardList[index + 1];

        return this.actualMagicCard;
    }

    getPreviousCard() {
        let index = this.checkErrorOrGetIndex();
        if (index === null || !this.magicCardList) return null;

        if (index === 0) {
            console.log('A modal elérte az első kártya lapot');
            return null;
        }

        this.actualMagicCard = this.magicCardList[index - 1];

        return this.actualMagicCard;
    }

    private checkErrorOrGetIndex(): number | null {
        if (!this.actualMagicCard) {
            console.warn('A modal service-ben nem volt aktuális kártya kiválasztva');
            return null;
        }

        if (!this.magicCardList) {
            console.warn('A modal service-ben nem volt kártya lista');
            return null;
        }

        let index = this.magicCardList.findIndex(
            card => card.cardNumber === this.actualMagicCard?.cardNumber,
        );

        if (index === -1) {
            console.warn(
                `nem volt megtalálható a listában a következő kártya: ${this.actualMagicCard?.cardNumber},${this.actualMagicCard?.cardExpansion}`,
            );
            return null;
        }

        return index;
    }
}
