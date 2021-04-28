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
import { SharedService } from 'src/app/shared/shared.service';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('target', { static: true }) input!: ElementRef<HTMLDivElement>;
    @Input() eventPrivilege!: boolean;
    @Output() deleteCalendarEvent: EventEmitter<CalendarEvent> = new EventEmitter<CalendarEvent>();
    isJoined = false;
    selectedCalendarEvent: CalendarEvent | null = null;
    selectCalendarEventSub!: Subscription;
    isLoading = false;
    isLoggedIn = false;
    currentUserSub!: Subscription;
    participants: string[] = [];
    hourPad = '00';
    minutePad = '00';

    // Font-Awesome
    faTimes = faTimes;

    constructor(
        private calendarService: CalendarService,
        private authenticationService: AuthenticationService,
        private sharedService: SharedService,
    ) {}

    ngOnInit() {
        this.getSelectedCalendarEvent();
        this.selectCalendarEventSub = this.calendarService
            .getSelectCalendarEventSub()
            .subscribe(calendarEventId => {
                if (calendarEventId === 0) {
                    this.selectedCalendarEvent = null;
                    return;
                }

                if (
                    this.selectedCalendarEvent &&
                    calendarEventId !== this.selectedCalendarEvent.id
                ) {
                    this.getSelectedCalendarEvent();
                    this.getParticipants();
                }
            });

        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            this.isLoggedIn = user !== null;
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
        if (this.selectedCalendarEvent == null) {
            return;
        }
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
        const tmpSelAlEvent = this.selectedCalendarEvent;
        if (tmpSelAlEvent == null) {
            return null;
        }
        this.calendarService.deleteCalendarEvent(tmpSelAlEvent).subscribe(() => {
            this.deleteCalendarEvent.next(tmpSelAlEvent);
        });
    }

    onJoinCalendarEvent() {
        if (this.selectedCalendarEvent == null) {
            return;
        }
        this.isLoading = true;
        this.calendarService
            .joinCalendarEvent(this.selectedCalendarEvent)
            .subscribe(participants => {
                console.log('Feliratkouztál');
                this.isJoined = true;
                this.isLoading = false;
                this.participants = participants;
            });
    }

    onLeaveCalendarEvent() {
        if (this.selectedCalendarEvent == null) {
            return;
        }
        this.isLoading = true;
        this.calendarService
            .leaveCalendarEvent(this.selectedCalendarEvent)
            .subscribe(participants => {
                console.log('Leiratkouztál');
                this.isJoined = false;
                this.isLoading = false;
                this.participants = participants;
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

    private getSelectedCalendarEvent() {
        this.selectedCalendarEvent = this.calendarService.getSelectedCalendarEvent();
        if (this.selectedCalendarEvent) {
            this.minutePad = this.sharedService.pad(this.selectedCalendarEvent.minute, 2);
            this.hourPad = this.sharedService.pad(this.selectedCalendarEvent.hour, 2);
        }
    }
}
