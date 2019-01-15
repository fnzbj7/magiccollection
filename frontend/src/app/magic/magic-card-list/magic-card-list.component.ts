import { Component, OnInit, ViewChild } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';
import { Card } from '../../model/card.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PaginationControlsComponent } from 'ngx-pagination';

@Component({
  selector: 'app-magic-card-list',
  templateUrl: './magic-card-list.component.html',
  styleUrls: ['./magic-card-list.component.css']
})
export class MagicCardListComponent implements OnInit {

  p = 1;
  cardsArray: Card[];
  expansion: string;
  @ViewChild('page') amountInputRef: PaginationControlsComponent;

  constructor(private magicCardsListService: MagicCardsListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.expansion = params['expansion'];
        this.magicCardsListService.getCardsForExpansion(this.expansion).subscribe(
          (cards: Card[]) => {
            this.cardsArray = cards;
            this.amountInputRef.pageChange.emit(1);
          }
        );
      }
    );
  }

}
