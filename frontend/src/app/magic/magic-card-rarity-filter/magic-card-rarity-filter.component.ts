import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';
import { FilterChange } from 'src/app/model/filter-change.model';
import { CardRarity } from 'src/app/model/card-rarity.enum';

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

  constructor(private magicCardsListService: MagicCardsListService) {}

  ngOnInit() {
    this.initFilterValues(this.magicCardsListService.getfilterArray());

    this.magicCardsListService.getFilterChangeSub().subscribe(change => {
      this.setFilter(change);
    });
  }

  changeFilterValue(filterChangeName: string, filterChangeTo: boolean) {
    this.magicCardsListService.changeFilter(filterChangeName, filterChangeTo);
  }

  initFilterValues(filterArray: string[]) {
    let differenceArray: string[] = [
      CardRarity.Common,
      CardRarity.Uncommon,
      CardRarity.Rare,
      CardRarity.Mythic
    ];

    filterArray.forEach(element => {
      this.setFilter(new FilterChange(element, true));
    });

    differenceArray = differenceArray.filter( element => filterArray.indexOf(element) < 0);
    differenceArray.forEach(element => {
      this.setFilter(new FilterChange(element, false));
    });

    // this.filter(function(i) {return a.indexOf(i) < 0;}
  }

  setFilter(filterChange: FilterChange) {
    switch (filterChange.changeName) {
      case CardRarity.Common:
        this.isCommon = filterChange.changedTo;
        break;
      case CardRarity.Uncommon:
        this.isUncommon = filterChange.changedTo;
        break;
      case CardRarity.Rare:
        this.isRare = filterChange.changedTo;
        break;
      case CardRarity.Mythic:
        this.isMythic = filterChange.changedTo;
        break;
      default:
        break;
    }
  }
}
