import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-magic-expansion',
  templateUrl: './magic-expansion.component.html',
  styleUrls: ['./magic-expansion.component.css']
})
export class MagicExpansionComponent implements OnInit {

  @Input() expansionName: string;

  constructor() { }

  ngOnInit() {
  }

}
