import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {

  exampleNumber: number[] = [];
  daysArray = ['Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i <= 27; i++)  {
      this.exampleNumber.push(i);
    }
  }

}
