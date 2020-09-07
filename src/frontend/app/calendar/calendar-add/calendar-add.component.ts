import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../calendar-list/model/calendar-event.model';
import { CalendarService } from '../calendar.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-calendar-add',
    templateUrl: './calendar-add.component.html',
    styleUrls: ['./calendar-add.component.css'],
})
export class CalendarAddComponent implements OnInit {
    isInit = true;
    isMobile: boolean;
    calendarEvent: CalendarEvent = new CalendarEvent(null, 0, 0, null);
    time: { hour: number; minute: number };
    model: NgbDateStruct;
    isSubmitted = false;
    finished = false;

    // Fontawesome
    faCalendarAlt = faCalendarAlt;
    faTimesCircle = faTimesCircle;
    faCheckCircle = faCheckCircle;

    constructor(private calendarService: CalendarService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        /* isInit */
        let expansionId = this.route.snapshot.params['calendarId'];
        if (expansionId) {
            // Get the event from the service or from the backend or go to the add screen
            if (this.calendarService.inited) {
                this.calendarEvent = this.calendarService.getSelectedCalendarEvent();
                this.model = {
                    year: this.calendarEvent.eventStart.getFullYear(),
                    month: this.calendarEvent.eventStart.getMonth() + 1,
                    day: this.calendarEvent.eventStart.getDate(),
                };
                console.log(this.model);
                this.isInit = false;
            } else {
                expansionId = +expansionId;
                this.calendarService
                    .getAllCalendarEvent()
                    .subscribe((calendarEventArray: CalendarEvent[]) => {
                        this.calendarEvent = calendarEventArray.find(
                            calendarEvent => expansionId === calendarEvent.id,
                        );
                        this.model = {
                            year: this.calendarEvent.eventStart.getFullYear(),
                            month: this.calendarEvent.eventStart.getMonth() + 1,
                            day: this.calendarEvent.eventStart.getDate(),
                        };
                        this.time = {
                            hour: this.calendarEvent.hour,
                            minute: this.calendarEvent.minute,
                        };
                        this.isInit = false;
                    });
            }
        } else {
            this.isInit = false;
        }
        this.time = { hour: this.calendarEvent.hour, minute: this.calendarEvent.minute };

        this.isMobile = window.innerWidth < 700;
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
            if (this.calendarEvent.id) {
                this.calendarService.saveNewCalendarEvent(this.calendarEvent).subscribe(() => {
                    this.finished = true;
                });
            } else {
                this.calendarService.saveNewCalendarEvent(this.calendarEvent).subscribe(() => {
                    this.finished = true;
                });
            }
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
