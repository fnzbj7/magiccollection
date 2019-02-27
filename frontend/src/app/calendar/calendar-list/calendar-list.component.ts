import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { CalendarDay } from './model/calendar-day.model';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {

  calendarDayList: CalendarDay[] = [];
  daysArray = ['Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  monthNameArray = ['Január', 'Február', 'Március', 'Április', 'Május',
                'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
  currentDate = new Date();

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    const tmpDate = new Date();
    this.currentDate = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), 15);
    this.initCalendar(this.currentDate);
  }

  initCalendar(relativeDate: Date) {
    console.log('---------------------------');
    const tmpCalendarDayList: CalendarDay[] = [];

    const copyDate = new Date(relativeDate);
    copyDate.setUTCDate(1);

    let num = copyDate.getUTCDay();
    if(num === 0) {
      num = 7;
    }
    console.log(copyDate);
    console.log('Type of day: ' + num);
    const previousMonth = new Date(copyDate.getTime());

    previousMonth.setUTCDate(0);

    // Before
    for (let i = 1; i <= (num - 1); i++) {
      const testCalendar = new CalendarDay();
      testCalendar.calendarEventList =
            this.calendarService.getCalendarValue(
              previousMonth.getFullYear(),
              previousMonth.getMonth() + 1,
              i + previousMonth.getUTCDate() - (num - 1)
            );
      testCalendar.day = i + previousMonth.getUTCDate() - (num - 1);
      testCalendar.isOffMonth = true;

      tmpCalendarDayList.push(testCalendar);
    }


    for (let i = 1; i <= new Date( copyDate.getFullYear(), copyDate.getMonth() + 1, 0).getDate(); i++)  {
      const testCalendar = new CalendarDay();
      testCalendar.calendarEventList = this.calendarService.getCalendarValue(copyDate.getFullYear(), copyDate.getMonth() + 1, i);
      testCalendar.day = i;
      testCalendar.isOffMonth = false;
      tmpCalendarDayList.push(testCalendar);
    }

    // After
    const actualMonthLastDayType = new Date( copyDate.getFullYear(), copyDate.getMonth() + 1, 0).getUTCDay();

    for (let i = 1; i <= (6 - actualMonthLastDayType); i++) {

      const testCalendar = new CalendarDay();
      testCalendar.calendarEventList = this.calendarService.getCalendarValue(2019, 2, i);
      testCalendar.day = i;
      testCalendar.isOffMonth = true;
      tmpCalendarDayList.push(testCalendar);
    }

    this.calendarDayList = tmpCalendarDayList;
  }

  testLog() {
    console.log('Test log');
  }

  onNextMonth() {
    let yearModify = 0;
    let monthNumber = this.currentDate.getMonth() + 1;
    if (monthNumber === 12) {
      yearModify = 1;
      monthNumber = 0;
    }
    this.currentDate = new Date(this.currentDate.getFullYear() + yearModify, monthNumber, 15);
    this.initCalendar(this.currentDate);
  }

  onPreviousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 15);
    this.initCalendar(this.currentDate);
  }

}
