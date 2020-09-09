import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    ViewChild,
    ElementRef,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { CalendarService } from '../../calendar.service';
import { Subscription } from 'rxjs';
import { CalendarEvent } from '../model/calendar-event.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() eventPrivilege: boolean;
    @Input() isLoggedIn: boolean;
    @Output() deleteCalendarEvent: EventEmitter<CalendarEvent> = new EventEmitter<CalendarEvent>();
    selectedCalendarEvent: CalendarEvent = null;
    selectCalendarEventSub: Subscription = null;
    dummyArray: string[] = ['Nagy Csaba', 'Kis Peti', 'Lapátos Peti'];
    @ViewChild('target', { static: true }) input: ElementRef<HTMLDivElement>;
    isJoined = false;
    isLoading = false;

    // Font-Awesome
    faTimes = faTimes;

    constructor(private calendarService: CalendarService) {}

    ngOnInit() {
        this.selectedCalendarEvent = this.calendarService.getSelectedCalendarEvent();
        this.selectCalendarEventSub = this.calendarService
            .getSelectCalendarEventSub()
            .subscribe(calendarEventId => {
                if (calendarEventId === 0) {
                    this.selectedCalendarEvent = null;
                    return;
                }

                if (calendarEventId !== this.selectedCalendarEvent.id) {
                    this.selectedCalendarEvent = this.calendarService.getSelectedCalendarEvent();
                }
            });
    }

    ngAfterViewInit(): void {
        this.input.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }

    onClose() {
        this.calendarService.selectCalendarEvent();
    }

    onDelete() {
        this.calendarService.deleteCalendarEvent(this.selectedCalendarEvent).subscribe(() => {
            this.deleteCalendarEvent.next(this.selectedCalendarEvent);
        });
    }

    onJoinCalendarEvent() {
        this.isLoading = true;
        this.calendarService.joinCalendarEvent(this.selectedCalendarEvent).subscribe(x => {
            console.log('Feliratkouztál');
            this.isJoined = true;
            this.isLoading = false;
        });
    }

    onLeaveCalendarEvent() {
        this.isLoading = true;
        this.calendarService.leaveCalendarEvent(this.selectedCalendarEvent).subscribe(x => {
            console.log('Leiratkouztál');
            this.isJoined = false;
            this.isLoading = false;
        });
    }

    ngOnDestroy() {
        if (this.selectCalendarEventSub) {
            this.selectCalendarEventSub.unsubscribe();
        }
    }
}
