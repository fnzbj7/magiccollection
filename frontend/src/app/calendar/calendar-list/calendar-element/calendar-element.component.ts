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
        this.minutePad = this.pad(this.calendarEvent.minute, 2);
        this.hourPad = this.pad(this.calendarEvent.hour, 2);
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

    private pad(text: string | number, width: number, z?: string) {
        z = z || '0';
        text = text + '';
        return text.length >= width ? text : new Array(width - text.length + 1).join(z) + text;
    }
}
