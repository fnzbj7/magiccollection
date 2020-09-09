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
import { AuthenticationService } from '../../../auth/authentication.service';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() eventPrivilege: boolean;
    @Output() deleteCalendarEvent: EventEmitter<CalendarEvent> = new EventEmitter<CalendarEvent>();
    selectedCalendarEvent: CalendarEvent = null;
    selectCalendarEventSub: Subscription = null;
    @ViewChild('target', { static: true }) input: ElementRef<HTMLDivElement>;
    isJoined = false;
    isLoading = false;
    isLoggedIn = false;
    currentUserSub: Subscription;
    participants: string[] = [];

    // Font-Awesome
    faTimes = faTimes;

    constructor(
        private calendarService: CalendarService,
        private authenticationService: AuthenticationService,
    ) {}

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
                    this.getParticipants();
                }
                // TODO ez egy borzadály, egyszerűsíteni kéne
            });

        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            this.isLoggedIn = user !== null;
            // TODO lekérni a versenyzőket
            this.getParticipants();
        });
    }

    ngAfterViewInit(): void {
        this.input.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }

    getParticipants() {
        if (this.isLoggedIn) {
            this.calendarService
                .getAllParticipantUser(this.selectedCalendarEvent)
                .subscribe(calendarParticipantUserDto => {
                    console.log({ calendarParticipantUserDto });
                    this.participants = calendarParticipantUserDto.participants;
                    this.isJoined = calendarParticipantUserDto.isUser;
                });
        } else {
            this.calendarService
                .getAllParticipant(this.selectedCalendarEvent)
                .subscribe(participants => {
                    this.participants = participants;
                    this.isJoined = false;
                });
        }
    }

    onClose() {
        this.calendarService.selectCalendarEvent();
    }

    onDelete() {
        this.calendarService.deleteCalendarEvent(this.selectedCalendarEvent).subscribe(() => {
            this.deleteCalendarEvent.next(this.selectedCalendarEvent);
        });
    }

    // TODO összevonni a 2 backend hívást
    onJoinCalendarEvent() {
        this.isLoading = true;
        this.calendarService.joinCalendarEvent(this.selectedCalendarEvent).subscribe(x => {
            console.log('Feliratkouztál');
            this.isJoined = true;
            this.isLoading = false;
            this.getParticipants();
        });
    }

    onLeaveCalendarEvent() {
        this.isLoading = true;
        this.calendarService.leaveCalendarEvent(this.selectedCalendarEvent).subscribe(x => {
            console.log('Leiratkouztál');
            this.isJoined = false;
            this.isLoading = false;
            this.getParticipants();
        });
    }

    ngOnDestroy() {
        if (this.selectCalendarEventSub) {
            this.selectCalendarEventSub.unsubscribe();
        }
        if (this.currentUserSub) {
            this.currentUserSub.unsubscribe();
        }
    }
}
