import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';

@Component({
    selector: 'app-magic-set-list',
    templateUrl: './magic-set-list.component.html',
    styleUrls: ['./magic-set-list.component.css'],
})
export class MagicSetListComponent implements OnInit {
    cardSetsArray: string[];

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
    }
}
