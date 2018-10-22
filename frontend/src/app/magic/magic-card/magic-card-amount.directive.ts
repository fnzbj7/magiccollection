import { Directive, OnInit, Renderer2, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[appMagicCardAmount]'
})
export class MagicCardAmountDirective implements OnInit{

    @Input() appMagicCardAmount: number = 0;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {

        if (this.appMagicCardAmount > 0){
            const img = this.renderer.createElement('img');
            const amount = this.appMagicCardAmount <= 4 ? this.appMagicCardAmount : 4;
            this.renderer.setAttribute(img,'src','assets/img/amount/icon' + amount + '.png');
            this.renderer.addClass(img, 'amountIcon');
            
            const parent = this.elRef.nativeElement.parentNode;
            const refChild = this.elRef.nativeElement;
            this.renderer.insertBefore(parent, img, refChild);
        } else {
            this.renderer.addClass(this.elRef.nativeElement, 'nothave');
        }
        
    }

}