import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../calendar-list/model/calendar-event.model';
import { CalendarService } from '../calendar.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-calendar-add',
    templateUrl: './calendar-add.component.html',
    styleUrls: ['./calendar-add.component.css'],
})
export class CalendarAddComponent implements OnInit {
    calendarEvent: CalendarEvent = new CalendarEvent(null, 0, 0, null);
    time: { hour: number; minute: number };
    model: NgbDateStruct;
    faCalendarAlt = faCalendarAlt;

    constructor(private calendarService: CalendarService) {}

    ngOnInit(): void {
        this.time = { hour: this.calendarEvent.hour, minute: this.calendarEvent.minute };
    }

    // Egy form amit ellehet menteni és feltudjuk küldeni a backendnek
    submitCalendar() {
        // TODO do something
        this.calendarEvent = {
            ...this.calendarEvent,
            ...this.time,
            eventStart: new Date(`${this.model.year}-${this.model.month}-${this.model.day}`),
        };
        console.log(this.calendarEvent);
        if (this.isCalendarEventValid(this.calendarEvent)) {
            this.calendarService.saveNewCalendarEvent(this.calendarEvent);
        } else {
            console.log('nem volt valid');
        }
    }

    isCalendarEventValid(calendarEvent: CalendarEvent) {
        return (
            calendarEvent.eventStart != null &&
            calendarEvent.hour != null &&
            calendarEvent.minute != null &&
            calendarEvent.location != null &&
            calendarEvent.title != null
        );
    }
}
