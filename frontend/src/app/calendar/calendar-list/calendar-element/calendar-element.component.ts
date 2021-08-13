import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CalendarEvent } from '../model/calendar-event.model';
import { CalendarService } from '../../calendar.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-calendar-element',
    templateUrl: './calendar-element.component.html',
    styleUrls: ['./calendar-element.component.css'],
})
export class CalendarElementComponent implements OnInit, OnDestroy {
    @Input() calendarEvent!: CalendarEvent;
    selectCalendarEventSub!: Subscription;
    isSelected = false;
    minutePad!: string;
    hourPad!: string;

    constructor(private calendarService: CalendarService) {}

    ngOnInit() {
        this.minutePad = ('' + this.calendarEvent.minute).padStart(2, '0');
        this.hourPad = ('' + this.calendarEvent.hour).padStart(2, '0');
        this.isSelected = this.calendarEvent.id === this.calendarService.getSelectedEventId();
        this.selectCalendarEventSub = this.calendarService
            .getSelectCalendarEventSub()
            .subscribe(selectedId => {
                this.isSelected = selectedId === this.calendarEvent.id;
            });
    }

    onSelectCalendarEvent() {
        this.calendarService.selectCalendarEvent(this.calendarEvent);
    }

    ngOnDestroy() {
        if (this.selectCalendarEventSub) {
            this.selectCalendarEventSub.unsubscribe();
        }
    }
}
