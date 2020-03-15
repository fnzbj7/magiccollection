import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-magic-set-list',
    templateUrl: './magic-set-list.component.html',
    styleUrls: ['./magic-set-list.component.css'],
})
export class MagicSetListComponent implements OnInit {
    cardSetsArray: string[];

    // FontAwesome
    faAngleRight = faAngleRight;

    isScrollVisible = true;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
    }

    onScroll(event) {
        if (this.isScrollVisible) {
            this.isScrollVisible = false;
        }
    }
}
