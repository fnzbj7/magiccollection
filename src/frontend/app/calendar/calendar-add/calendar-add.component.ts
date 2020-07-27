import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../calendar-list/model/calendar-event.model';
import { CalendarService } from '../calendar.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-calendar-add',
    templateUrl: './calendar-add.component.html',
    styleUrls: ['./calendar-add.component.css'],
})
export class CalendarAddComponent implements OnInit {
    calendarEvent: CalendarEvent = new CalendarEvent(null, 0, 0, null);
    time: { hour: number; minute: number };
    model: NgbDateStruct;
    isSubmitted = false;
    finished = false;

    // Fontawesome
    faCalendarAlt = faCalendarAlt;
    faTimesCircle = faTimesCircle;
    faCheckCircle = faCheckCircle;

    constructor(private calendarService: CalendarService) {}

    ngOnInit(): void {
        this.time = { hour: this.calendarEvent.hour, minute: this.calendarEvent.minute };
    }

    // Egy form amit ellehet menteni és feltudjuk küldeni a backendnek
    submitCalendar() {
        this.isSubmitted = true;
        // TODO do something
        this.calendarEvent = {
            ...this.calendarEvent,
            ...this.time,
        };
        if (this.model != null) {
            this.calendarEvent.eventStart = new Date(
                `${this.model.year}-${this.model.month}-${this.model.day}`,
            );
        }
        console.log(this.calendarEvent);
        if (this.isCalendarEventValid(this.calendarEvent)) {
            this.calendarService.saveNewCalendarEvent(this.calendarEvent).subscribe(() => {
                this.finished = true;
            });
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
