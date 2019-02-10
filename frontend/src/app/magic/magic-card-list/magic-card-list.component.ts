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
            this.cardsArray = cards;
            if (this.route.snapshot.queryParams['page']) {
              this.currentPage = +this.route.snapshot.queryParams['page'];
              // this.amountInputRef.pageChange.emit(1);
            } else {
              this.currentPage = 1;
              // this.amountInputRef.pageChange.emit(1);
            }

          }
        );
      }
    );

    this.route.queryParams.subscribe(data => {
      console.log(data);
      console.log(data.page);
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

}
