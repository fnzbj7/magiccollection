import {
    Directive,
    OnInit,
    Renderer2,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { AuthenticationService } from '../../../auth/authentication.service';
import { User } from '../../../model/user.model';
import { MagicCardAmount } from './model/magic-card-amount.model';

@Directive({
    selector: '[appMagicCardAmount]',
})
export class MagicCardAmountDirective implements OnChanges {
    @Input() appMagicCardAmount: MagicCardAmount = { cardAmount: 0, isLoggedIn: false };
    amountImg: HTMLImageElement;

    constructor(private elRef: ElementRef<HTMLPictureElement>, private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.appMagicCardAmount.firstChange) {
            // If there is no logged in user, just show the cards, do nothing.
            if (this.appMagicCardAmount.isLoggedIn) {
                this.createAmountForImage(this.appMagicCardAmount.cardAmount);
            }
        } else {
            this.removeLoggedInCards(changes.appMagicCardAmount.previousValue.cardAmount);
        }
    }

    /**
     * Give an amount it can be any not negative number, and five an card image reference.
     * @param magicCardAmount how much card do you want to show.
     * @param cardImg nativeElement ref for the card <img> tag.
     */
    createAmountForImage(magicCardAmount: number) {
        const cardImg: HTMLPictureElement = this.elRef.nativeElement;
        if (magicCardAmount > 0) {
            this.amountImg = this.renderer.createElement('img');
            const amount = magicCardAmount <= 4 ? magicCardAmount : 4;
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

    removeLoggedInCards(previousAmountValue: number) {
        if (this.appMagicCardAmount.isLoggedIn) {
            this.createAmountForImage(this.appMagicCardAmount.cardAmount);
        } else {
            if (previousAmountValue === 0) {
                this.renderer.removeClass(this.elRef.nativeElement, 'nothave');
            } else {
                const cardImg: HTMLPictureElement = this.elRef.nativeElement;
                this.renderer.removeChild(cardImg.parentNode, this.amountImg);
            }
        }
    }
}
