import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    ViewChild,
    ViewContainerRef,
    TemplateRef,
    ElementRef,
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
    selectedCalendarEvent: CalendarEvent = null;
    selectCalendarEventSub: Subscription = null;
    dummyArray: string[] = ['Nagy Csaba', 'Kis Peti', 'Lapátos Peti'];
    @ViewChild('target', { static: true }) input: ElementRef<HTMLDivElement>;

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

    ngOnDestroy() {
        if (this.selectCalendarEventSub) {
            this.selectCalendarEventSub.unsubscribe();
        }
    }
}
