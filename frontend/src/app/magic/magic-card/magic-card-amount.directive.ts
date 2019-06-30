import { Directive, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Directive({
    selector: '[appMagicCardAmount]'
})
export class MagicCardAmountDirective implements OnInit {

    @Input() appMagicCardAmount = 0;

    constructor(private elRef: ElementRef, private renderer: Renderer2, private authenticationService: AuthenticationService) {}

    ngOnInit() {
      const cardImg = this.elRef.nativeElement;
      this.createAmountForImage( this.appMagicCardAmount, cardImg);
    }

    /**
     * Give an amount it can be any not negative number, and five an card image reference.
     * @param magicCardAmount how much card do you want to show.
     * @param cardImg nativeElement ref for the card <img> tag.
     */
    createAmountForImage( magicCardAmount, cardImg) {
      // If there is no logged in user, just show the cards.
      if ( !this.authenticationService.isLoggedIn() ) {
        return;
      }

      if (magicCardAmount > 0) {
        const amountImg = this.renderer.createElement('img');
        const amount = magicCardAmount <= 4 ? magicCardAmount : 4;
        this.renderer.setAttribute(amountImg, 'src', 'assets/img/amount/icon' + amount + '.png');
        this.renderer.addClass(amountImg, 'amountIcon');

        const cardImgParent = cardImg.parentNode;
        this.renderer.insertBefore(cardImgParent, amountImg, cardImg);
      } else {
          this.renderer.addClass(this.elRef.nativeElement, 'nothave');
      }

    }

}
