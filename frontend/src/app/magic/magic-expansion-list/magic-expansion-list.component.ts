import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-expansion-list',
  templateUrl: './magic-expansion-list.component.html',
  styleUrls: ['./magic-expansion-list.component.css']
})
export class MagicExpansionListComponent implements OnInit {

  cardSetsArray: string[] = ['M20', 'WAR', 'RNA', 'GRN', 'M19', 'DOM', 'RIX', 'XLN', 'HOU', 'AKH', 'AER', 'KLD', 'EMN', 'SOI', 'OGW', 'BFZ'];
  expansion: string;
  isOpenMenu = false;

  constructor() { }

  ngOnInit() {  }

  onToggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

}
