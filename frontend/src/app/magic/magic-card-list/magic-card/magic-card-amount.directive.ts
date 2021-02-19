import {
    Directive,
    OnInit,
    Renderer2,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { MagicCardAmount } from './model/magic-card-amount.model';

@Directive({
    selector: '[appMagicCardAmount]',
})
export class MagicCardAmountDirective implements OnChanges {
    @Input() appMagicCardAmount: MagicCardAmount = {
        cardAmount: 0,
        cardAmountFoil: 0,
        isLoggedIn: false,
    };
    amountImg!: HTMLImageElement;

    constructor(private elRef: ElementRef<HTMLPictureElement>, private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.appMagicCardAmount.firstChange) {
            // If there is no logged in user, just show the cards, do nothing.
            if (this.appMagicCardAmount.isLoggedIn) {
                const { cardAmount, cardAmountFoil } = this.appMagicCardAmount;
                this.createAmountForImage(cardAmount, cardAmountFoil);
            }
        } else {
            this.removeLoggedInCards(
                changes.appMagicCardAmount.previousValue.cardAmount,
                changes.appMagicCardAmount.previousValue.cardAmountFoil,
            );
        }
    }

    /**
     * Give an amount it can be any not negative number, and five an card image reference.
     *
     * @param cardAmount how much card do you want to show.
     * @param cardImg nativeElement ref for the card <img> tag.
     */
    createAmountForImage(cardAmount: number, cardAmountFoil: number) {
        const cardImg: HTMLPictureElement = this.elRef.nativeElement;
        const fullAmount = cardAmount + cardAmountFoil;
        if (fullAmount > 0) {
            if (cardAmountFoil > 0) {
                this.renderer.addClass(cardImg, 'dothefoil');
            }
            this.amountImg = this.renderer.createElement('img');
            const amount = fullAmount <= 4 ? fullAmount : 4;
            this.renderer.setAttribute(
                this.amountImg,
                'src',
                'assets/img/amount/icon' + amount + '.png',
            );
            this.renderer.addClass(this.amountImg, 'amountIcon');

            const cardImgParent = cardImg.parentNode;
            this.renderer.insertBefore(cardImgParent, this.amountImg, cardImg);
        } else {
            this.renderer.addClass(cardImg, 'nothave');
        }
    }

    removeLoggedInCards(previousAmountValue: number, previousCardAmountFoil: number) {
        const fullAmount = previousAmountValue + previousCardAmountFoil;
        if (this.appMagicCardAmount.isLoggedIn) {
            this.createAmountForImage(
                this.appMagicCardAmount.cardAmount,
                this.appMagicCardAmount.cardAmountFoil,
            );
        } else {
            if (fullAmount === 0) {
                this.renderer.removeClass(this.elRef.nativeElement, 'nothave');
            } else {
                const cardImg: HTMLPictureElement = this.elRef.nativeElement;
                this.renderer.removeChild(cardImg.parentNode, this.amountImg);
            }

            if (previousCardAmountFoil > 0) {
                const cardImg: HTMLPictureElement = this.elRef.nativeElement;
                this.renderer.removeClass(cardImg, 'dothefoil');
            }
        }
    }
}
