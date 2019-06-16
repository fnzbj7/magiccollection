import { Component, OnInit, ViewChild } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';
import { Card } from '../../model/card.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaginationControlsComponent } from 'ngx-pagination';

@Component({
  selector: 'app-magic-card-list',
  templateUrl: './magic-card-list.component.html',
  styleUrls: ['./magic-card-list.component.css']
})
export class MagicCardListComponent implements OnInit {

  p = 1;
  cardsArray: Card[];
  filteredCardsArray: Card[];
  expansion: string;
  currentPage = 1;
  itemsPerPage = 35;
  @ViewChild('page') amountInputRef: PaginationControlsComponent;

  constructor(private magicCardsListService: MagicCardsListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.expansion = params['expansion'];
        this.magicCardsListService.getCardsForExpansion(this.expansion).subscribe(
          (cards: Card[]) => {
            console.log(cards);
            this.cardsArray = cards;
            this.filterCards();
            if (this.route.snapshot.queryParams['page']) {
              this.currentPage = +this.route.snapshot.queryParams['page'];
            } else {
              this.currentPage = 1;
            }

          }
        );
      }
    );

    this.magicCardsListService.getFilterChangeSub().subscribe( rarityFilter => {
      this.filterCards();
    });

    this.route.queryParams.subscribe(data => {
      if (data.page === undefined) {
        // this.currentPage = 1;
      } else if (this.currentPage !== +data.page) {
        this.amountInputRef.pageChange.emit(data.page);
      }
    });
  }

  onPageChange( event: number) {
    this.currentPage = event;
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { page: this.currentPage },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  private filterCards() {
    this.filteredCardsArray = this.cardsArray.filter(card => {
      return this.magicCardsListService.getfilterArray().includes(card.rarity);
    });
  }

}
