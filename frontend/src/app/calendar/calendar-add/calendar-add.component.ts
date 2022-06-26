import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CalendarEvent } from '../calendar-list/model/calendar-event.model';
import { CalendarService } from '../calendar.service';
// import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-calendar-add',
    templateUrl: './calendar-add.component.html',
    styleUrls: ['./calendar-add.component.css'],
})
export class CalendarAddComponent implements OnInit, OnDestroy {
    isInit = true;
    isMobile = false;
    calendarEvent: CalendarEvent = new CalendarEvent(); // TODO kell ide ez az init?
    originalCalendarEvent!: CalendarEvent | null;
    time!: { hour: number; minute: number };
    // model?: NgbDateStruct;
    isSubmitted = false;
    finished = false;

    mediaQuery!: MediaQueryList;

    // Fontawesome
    faCalendarAlt = faCalendarAlt;
    faTimesCircle = faTimesCircle;
    faCheckCircle = faCheckCircle;

    constructor(private calendarService: CalendarService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        /* isInit */
        let expansionId = this.route.snapshot.params.calendarId;
        if (expansionId) {
            // Get the event from the service or from the backend or go to the add screen
            if (this.calendarService.inited) {
                this.originalCalendarEvent = this.calendarService.getSelectedCalendarEvent();
                if (this.originalCalendarEvent !== null) {
                    this.calendarEvent = { ...this.originalCalendarEvent };
                }
                // this.model = {
                //     year: this.calendarEvent.eventStart.getFullYear(),
                //     month: this.calendarEvent.eventStart.getMonth() + 1,
                //     day: this.calendarEvent.eventStart.getDate(),
                // };
                // console.log(this.model);
                this.isInit = false;
            } else {
                expansionId = +expansionId;
                this.calendarService
                    .getAllCalendarEvent()
                    .subscribe((calendarEventArray: CalendarEvent[]) => {
                        const foundedCalendarEvent = calendarEventArray.find(
                            calendarEvent => expansionId === calendarEvent.id,
                        );
                        if (foundedCalendarEvent === undefined) {
                            throw new Error(`Nem található ${expansionId}`);
                        }
                        this.originalCalendarEvent = foundedCalendarEvent;
                        this.calendarEvent = { ...this.originalCalendarEvent };
                        // this.model = {
                        //     year: this.calendarEvent.eventStart.getFullYear(),
                        //     month: this.calendarEvent.eventStart.getMonth() + 1,
                        //     day: this.calendarEvent.eventStart.getDate(),
                        // };
                        this.isInit = false;
                    });
            }
        } else {
            this.isInit = false;
        }
        if (this.calendarEvent.hour && this.calendarEvent.minute) {
            this.time = { hour: this.calendarEvent.hour, minute: this.calendarEvent.minute };
        } else {
            this.time = { hour: 0, minute: 0 };
        }

        this.mediaQuery = window.matchMedia('(max-width: 768px)');
        this.isMobile = this.mediaQuery.matches;
        this.mediaQuery.addEventListener('change', this.onChange.bind(this));
    }

    onChange(mediaQueryListEvent: MediaQueryListEvent) {
        this.isMobile = mediaQueryListEvent.matches;
    }

    // Egy form amit ellehet menteni és feltudjuk küldeni a backendnek
    submitCalendar() {
        this.isSubmitted = true;
        this.calendarEvent = {
            ...this.calendarEvent,
            ...this.time,
        };
        // if (this.model != null) {
        //     this.calendarEvent.eventStart = new Date(
        //         `${this.model.year}-${this.model.month}-${this.model.day}`,
        //     );
        // }
        console.log(this.calendarEvent);
        if (this.isCalendarEventValid(this.calendarEvent)) {
            if (this.calendarEvent.id) {
                this.calendarService.updateCalendarEvent(this.calendarEvent).subscribe(() => {
                    if (this.originalCalendarEvent) {
                        this.calendarService.updateCalendarValue(
                            this.originalCalendarEvent,
                            this.calendarEvent,
                        );
                    }
                    this.finished = true;
                });
            } else {
                this.calendarService
                    .saveNewCalendarEvent(this.calendarEvent)
                    .subscribe(savedCalendarEvent => {
                        this.calendarEvent.id = savedCalendarEvent.id;
                        this.calendarService.addValueToCalendar(this.calendarEvent);
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

    ngOnDestroy(): void {
        this.mediaQuery.removeEventListener('change', this.onChange);
    }
}
