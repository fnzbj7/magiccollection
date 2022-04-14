import { Directive, Renderer2, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MagicCardAmount } from './model/magic-card-amount.model';

@Directive({
    selector: '[appMagicCardAmount]',
})
export class MagicCardAmountDirective implements OnChanges {
    @Input() appMagicCardAmount: MagicCardAmount = {
        cardAmount: 0,
        cardAmountFoil: 0,
        isLoggedIn: false,
        forceShowAmount: false,
    };
    @Input() onlyShow = false;
    amountImg!: HTMLImageElement;
    amountIconVisible = false;

    constructor(private elRef: ElementRef<HTMLPictureElement>, private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges): void {
        const { cardAmount, cardAmountFoil, isLoggedIn } = this.appMagicCardAmount;
        const { previousValue, firstChange } = changes.appMagicCardAmount;
        const cardImg: HTMLPictureElement = this.elRef.nativeElement;

        this.changeIconsIfNeeded(this.appMagicCardAmount, changes);

        if (cardAmountFoil > 0) {
            this.renderer.addClass(cardImg, 'dothefoil');
        } else if (cardAmountFoil === 0) {
            this.renderer.removeClass(cardImg, 'dothefoil');
        }
    }

    changeIconsIfNeeded(magicCardAmount: MagicCardAmount, changes: SimpleChanges) {
        const { cardAmount, cardAmountFoil, isLoggedIn, forceShowAmount } = magicCardAmount;
        const { previousValue, firstChange } = changes.appMagicCardAmount;
        const needToChange =
            this.amountIconVisible !== isLoggedIn || (forceShowAmount && !this.amountIconVisible);
        const cardImg: HTMLPictureElement = this.elRef.nativeElement;

        if (!needToChange) {
            return;
        }

        if (this.amountIconVisible) {
            this.removeLoggedInCards(
                cardImg,
                previousValue.cardAmount,
                previousValue.cardAmountFoil,
            );
        } else {
            this.createAmountForImage(cardImg, cardAmount, cardAmountFoil);
        }

        this.amountIconVisible = !this.amountIconVisible;
    }

    /**
     * Give an amount it can be any not negative number, and give a card image reference.
     *
     * @param cardAmount how much card do you want to show.
     * @param cardImg nativeElement ref for the card <img> tag.
     */
    createAmountForImage(cardImg: HTMLPictureElement, cardAmount: number, cardAmountFoil: number) {
        const fullAmount = cardAmount + cardAmountFoil;
        if (fullAmount > 0) {
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

    removeLoggedInCards(
        cardImg: HTMLPictureElement,
        previousAmountValue: number,
        previousCardAmountFoil: number,
    ) {
        const fullAmount = previousAmountValue + previousCardAmountFoil;
        if (this.appMagicCardAmount.isLoggedIn) {
            if (!this.onlyShow) {
                this.createAmountForImage(
                    cardImg,
                    this.appMagicCardAmount.cardAmount,
                    this.appMagicCardAmount.cardAmountFoil,
                );
            }
        } else {
            if (fullAmount === 0) {
                this.renderer.removeClass(this.elRef.nativeElement, 'nothave');
            } else {
                this.renderer.removeChild(cardImg.parentNode, this.amountImg);
            }
        }
    }
}
