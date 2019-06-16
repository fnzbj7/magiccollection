import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-magic-card-rarity-filter',
  templateUrl: './magic-card-rarity-filter.component.html',
  styleUrls: ['./magic-card-rarity-filter.component.css']
})
export class MagicCardRarityFilterComponent implements OnInit {

  isCommon = true;
  isUncommon = true;
  isRare = true;
  isMythic = true;

  constructor(private magicCardsListService: MagicCardsListService) { }

  ngOnInit() {
    this.magicCardsListService.getFilterChangeSub().subscribe( change => {

      switch (change.changeName) {
        case 'C':
            this.isCommon = change.changedTo;
            break;
        case 'U':
            this.isUncommon = change.changedTo;
            break;
        case 'R':
            this.isRare = change.changedTo;
            break;
        case 'M':
            this.isMythic = change.changedTo;
            break;
        default:
          break;

      }
    })
  }

  changeFilterValue(filterChangeName: string, filterChangeTo: boolean) {
    this.magicCardsListService.changeFilter(filterChangeName, filterChangeTo);
  }
}
