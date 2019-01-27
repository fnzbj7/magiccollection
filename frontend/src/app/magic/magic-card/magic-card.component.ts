import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card.model';

@Component({
  selector: 'app-magic-card',
  templateUrl: './magic-card.component.html',
  styleUrls: ['./magic-card.component.css']
})
export class MagicCardComponent implements OnInit {

  @Input() magicCard: Card;
  flipClass = false;

  constructor() { }

  ngOnInit() {

  }

}
