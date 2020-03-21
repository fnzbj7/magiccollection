import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-magic-set-list',
    templateUrl: './magic-set-list.component.html',
    styleUrls: ['./magic-set-list.component.css'],
})
export class MagicSetListComponent implements OnInit {
    cardSetsArray: string[];

    // FontAwesome
    faAngleRight = faAngleRight;
    faAngleDown = faAngleDown;

    isScrollRightHide = false;
    isScrollDownHide = false;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
    }

    onScroll(event) {
        if (event.srcElement.scrollLeft > 200) {
            this.isScrollRightHide = true;
        }
        if (this.isScrollRightHide && event.srcElement.scrollLeft < 200) {
            this.isScrollRightHide = false;
        }

        if (event.srcElement.scrollTop > 200) {
            this.isScrollDownHide = true;
        }
        if (this.isScrollDownHide && event.srcElement.scrollTop < 200) {
            this.isScrollDownHide = false;
        }

        // console.log(event.srcElement.scrollLeft)
        // if (this.isScrollVisible) {
        //     this.isScrollVisible = false;
        // }
    }
}
