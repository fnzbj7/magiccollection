import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalendarService } from '../../calendar.service';
import { Subscription } from 'rxjs';
import { CalendarEvent } from '../model/calendar-event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  selectedCalendarEvent: CalendarEvent = null;
  selectCalendarEventSub: Subscription = null;
  dummyArray: string[] = ['Nagy Csaba', 'Kis Peti', 'Lapátos Peti'];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {

    this.selectedCalendarEvent = this.calendarService.getSelectedCalendarEvent();
    this.selectCalendarEventSub = this.calendarService.getselectCalendarEventSub().subscribe(calendarEventId => {
      if (calendarEventId === 0 ) {
        this.selectedCalendarEvent = null;
        return;
      }

      if (calendarEventId !== this.selectedCalendarEvent.id) {
        this.selectedCalendarEvent = this.calendarService.getSelectedCalendarEvent();
      }
    });

  }

  onClose() {
    this.calendarService.selectCalendarEvent();
  }

  ngOnDestroy() {
    if (this.selectCalendarEventSub) {
      this.selectCalendarEventSub.unsubscribe();
    }
  }
}
