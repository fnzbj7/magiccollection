import {
    Component,
    OnInit,
    HostListener,
    ViewChild,
    ElementRef,
    AfterViewInit,
    HostBinding,
} from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';

@Component({
    selector: 'app-magic-expansion-list',
    templateUrl: './magic-expansion-list.component.html',
    styleUrls: ['./magic-expansion-list.component.css'],
})
export class MagicExpansionListComponent implements OnInit, AfterViewInit {
    cardSetsArray: string[];
    sticky = false;
    menuPosition: number;

    @ViewChild('stickyMenu', { static: true }) menuElement: ElementRef;
    @HostBinding('class.card-set-mobil-landscape') mobilLandscape = false;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
    }

    ngAfterViewInit() {
        this.menuPosition = this.menuElement.nativeElement.offsetTop;
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.menuPosition) {
            this.sticky = true;
            this.mobilLandscape = true;
        } else {
            this.sticky = false;
            this.mobilLandscape = false;
        }
    }
}
