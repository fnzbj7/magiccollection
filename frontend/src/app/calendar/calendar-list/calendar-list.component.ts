import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { CalendarDay } from './model/calendar-day.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit, OnDestroy {

  calendarDayList: CalendarDay[] = [];
  daysArray = [{long: 'Hétfő', short: 'H'},
              {long: 'Kedd', short: 'K'},
              {long: 'Szerda', short: 'SZ'},
              {long: 'Csütörtök', short: 'CS'},
              {long: 'Péntek', short: 'P'},
              {long: 'Szombat', short: 'SZ'},
              {long: 'Vasárnap', short: 'V'}];
  // daysArray = ['Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  monthNameArray = ['Január', 'Február', 'Március', 'Április', 'Május',
                'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
  currentDate = new Date();
  isDetailsOpen = false;
  selectCalendarEventSub: Subscription;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    const tmpDate = new Date();
    this.currentDate = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), 15);
    this.initCalendar(this.currentDate);
    this.selectCalendarEventSub = this.calendarService.getselectCalendarEventSub().subscribe( selectedEventId => {
      this.isDetailsOpen = selectedEventId !== 0;
    });
  }

  initCalendar(relativeDate: Date) {
    const tmpCalendarDayList: CalendarDay[] = [];

    const copyDate = new Date(relativeDate);
    copyDate.setUTCDate(1);

    let num = copyDate.getUTCDay();
    if (num === 0) {
      num = 7;
    }

    const previousMonth = new Date(copyDate.getTime());

    previousMonth.setUTCDate(0);

    // Before
    for (let i = 1; i <= (num - 1); i++) {
      const testCalendar = new CalendarDay();
      testCalendar.calendarEventList =
            this.calendarService.getCalendarValue(
              previousMonth.getFullYear(),
              previousMonth.getMonth(),
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
    const actualMonth = new Date( copyDate.getFullYear(), copyDate.getMonth() + 1, 0);
    const actualMonthLastDayType = actualMonth.getUTCDay();
    let year = actualMonth.getFullYear();
    let month = actualMonth.getMonth();
    if (month  === 11) {
      month = 1;
      year++;
    } else {
      month += 2;
    }
    for (let i = 1; i <= (6 - actualMonthLastDayType); i++) {

      const testCalendar = new CalendarDay();

      testCalendar.calendarEventList = this.calendarService.getCalendarValue(year, month, i);
      testCalendar.day = i;
      testCalendar.isOffMonth = true;
      tmpCalendarDayList.push(testCalendar);
    }

    this.calendarDayList = tmpCalendarDayList;
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

  ngOnDestroy() {
    if (this.selectCalendarEventSub) {
      this.selectCalendarEventSub.unsubscribe();
    }
  }

}
