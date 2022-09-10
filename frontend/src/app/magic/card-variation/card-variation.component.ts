import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { MagicSet } from '../magic-card-list/model/magic-set.model';

@Component({
    selector: 'app-card-variation',
    templateUrl: './card-variation.component.html',
    styleUrls: ['./card-variation.component.scss'],
})
export class CardCariationComponent implements OnInit {
    magicSets!: MagicSet[];

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit(): void {
        this.magicSets = this.magicCardsListService.magicSetArray;
    }
}
