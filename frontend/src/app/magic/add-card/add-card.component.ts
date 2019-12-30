import { Component } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  cardNumbersStr: string;

  addCard() {

    const thinggy = parseInt(this.cardNumbersStr, 0);
    console.log(this.cardNumbersStr);
    console.log(thinggy);
  }

}
