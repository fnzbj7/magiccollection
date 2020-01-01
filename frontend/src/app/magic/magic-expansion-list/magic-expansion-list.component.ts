import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';

@Component({
    selector: 'app-magic-expansion-list',
    templateUrl: './magic-expansion-list.component.html',
    styleUrls: ['./magic-expansion-list.component.css'],
})
export class MagicExpansionListComponent implements OnInit {

    cardSetsArray: string[];
    expansion: string;
    isOpenMenu = false;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
    }

    onToggleMenu() {
        this.isOpenMenu = !this.isOpenMenu;
    }
}
