import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';
import { Card } from '../../model/card.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaginationControlsComponent } from 'ngx-pagination';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-magic-card-list',
  templateUrl: './magic-card-list.component.html',
  styleUrls: ['./magic-card-list.component.css']
})
export class MagicCardListComponent implements OnInit, OnDestroy {
  p = 1;
  cardsArray: Card[];
  filteredCardsArray: Card[];
  expansion: string;
  currentPage = 1;
  itemsPerPage = 35;
  @ViewChild('page') amountInputRef: PaginationControlsComponent;
  currentUserSub: Subscription;
  routerChangeSub: Subscription;

  constructor(
    private magicCardsListService: MagicCardsListService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {

    this.currentUserSub = this.authenticationService.currentUser.subscribe(user => {
      this.getCardsFromExpansion(this.expansion);
    });

    this.routerChangeSub = this.route.params.subscribe((params: Params) => {
      this.expansion = params['expansion'];
      this.getCardsFromExpansion(this.expansion);
    });

    this.magicCardsListService.getFilterChangeSub().subscribe(rarityFilter => {
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

  getCardsFromExpansion(expansionArg: string) {
    this.magicCardsListService
    .getCardsForExpansion(expansionArg)
    .subscribe((cards: Card[]) => {
      this.cardsArray = cards;
      this.filterCards();
      if (this.route.snapshot.queryParams['page']) {
        this.currentPage = + this.route.snapshot.queryParams['page'];
      } else {
        this.currentPage = 1;
      }
    });
  }

  onPageChange(event: number) {
    this.currentPage = event;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge' // remove to replace all query params by provided
    });
  }

  private filterCards() {
    this.filteredCardsArray = this.cardsArray.filter(card => {
      return this.magicCardsListService.getfilterArray().includes(card.rarity);
    });
  }

  ngOnDestroy() {
    if (this.currentUserSub) {this.currentUserSub.unsubscribe(); }
    if (this.routerChangeSub) { this.routerChangeSub.unsubscribe(); }
  }
}
