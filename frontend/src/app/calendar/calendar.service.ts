import { CalendarEvent } from './calendar-list/model/calendar-event.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarParticipantUserDto } from './calendar-list/model/calendar-participant-user.dto';

@Injectable({ providedIn: 'root' })
export class CalendarService {
    inited = false;
    private calendarMap: Map<string, CalendarEvent[]>;
    private selectCalendarEventSub: BehaviorSubject<number> = new BehaviorSubject(0);
    private selectedCalendarEvent: CalendarEvent | null = null;

    constructor(private http: HttpClient) {
        this.calendarMap = new Map();
    }

    getAllCalendarEvent(): Observable<CalendarEvent[]> {
        return this.http.get<CalendarEvent[]>(`/api/calendar/all`).pipe(
            map(calendarEventArray => {
                this.inited = true;
                this.calendarMap.clear();
                calendarEventArray.map(
                    calendarEvent =>
                        (calendarEvent.eventStart = new Date(calendarEvent.eventStart)),
                );
                calendarEventArray.forEach(calendarEvent => {
                    this.addValueToCalendar(calendarEvent);
                });
                return calendarEventArray;
            }),
        );
    }

    getCalendarValue(year: number, month: number, day: number): CalendarEvent[] {
        if (!this.calendarMap) {
            this.calendarMap = new Map();
        }

        const dateS = this.convertNumbersToDateString(year, month, day);
        const calendarEventArr = this.calendarMap.get(dateS);

        return calendarEventArr !== undefined ? calendarEventArr : [];
    }

    addValueToCalendar(calendarEvent: CalendarEvent) {
        if (!calendarEvent.eventStart) {
            throw new Error('eventStart nem volt megadva');
        }

        // Save to database
        const dateS = this.convertNumbersToDateString(
            calendarEvent.eventStart.getFullYear(),
            calendarEvent.eventStart.getMonth() + 1,
            calendarEvent.eventStart.getDate(),
        );
        const calendarEventArray = this.calendarMap.get(dateS);
        if (calendarEventArray) {
            calendarEventArray.push(calendarEvent);
            calendarEventArray.sort((a, b) => {
                if (a.hour !== b.hour) {
                    return a.hour - b.hour;
                } else {
                    return a.minute - b.minute;
                }
            });
        } else {
            this.calendarMap.set(dateS, [calendarEvent]);
        }
    }

    updateCalendarValue(originalCalendarEvent: CalendarEvent, calendarEvent: CalendarEvent) {
        this.removeCalendarValue(originalCalendarEvent);
        this.addValueToCalendar(calendarEvent);
    }

    removeCalendarValue(calendarEvent: CalendarEvent) {
        if (!calendarEvent.eventStart) {
            throw new Error('eventStart nem volt kitöltve');
        }
        const dateS = this.convertNumbersToDateString(
            calendarEvent.eventStart.getFullYear(),
            calendarEvent.eventStart.getMonth() + 1,
            calendarEvent.eventStart.getDate(),
        );
        let calendarEventArray = this.calendarMap.get(dateS);
        if (calendarEventArray) {
            calendarEventArray = calendarEventArray.filter(event => event.id !== calendarEvent.id);
            this.calendarMap.set(dateS, calendarEventArray);
        }
    }

    getSelectedEventId() {
        if (this.selectedCalendarEvent) {
            return this.selectedCalendarEvent.id;
        }
        return 0;
    }

    getSelectCalendarEventSub() {
        return this.selectCalendarEventSub.asObservable();
    }

    selectCalendarEvent(calendarEvent?: CalendarEvent) {
        if (calendarEvent) {
            this.selectedCalendarEvent = calendarEvent;
            this.selectCalendarEventSub.next(this.selectedCalendarEvent.id);
        } else {
            this.selectedCalendarEvent = null;
            this.selectCalendarEventSub.next(0);
        }
    }

    getSelectedCalendarEvent() {
        return this.selectedCalendarEvent;
    }

    saveNewCalendarEvent(calendarEvent: CalendarEvent): Observable<CalendarEvent> {
        return this.http.post<CalendarEvent>('/api/calendar/add', calendarEvent);
    }

    updateCalendarEvent(calendarEvent: CalendarEvent): Observable<CalendarEvent> {
        return this.http.patch<CalendarEvent>('/api/calendar/modify', calendarEvent);
    }

    deleteCalendarEvent(calendarEvent: CalendarEvent): Observable<void> {
        return this.http.delete<void>(`/api/calendar/delete/${calendarEvent.id}`);
    }

    joinCalendarEvent(calendarEvent: CalendarEvent): Observable<string[]> {
        return this.http.post<string[]>('/api/calendar/join', calendarEvent);
    }

    leaveCalendarEvent(calendarEvent: CalendarEvent): Observable<string[]> {
        return this.http.delete<string[]>(`/api/calendar/leave/${calendarEvent.id}`);
    }

    getAllParticipant(calendarEvent: CalendarEvent): Observable<string[]> {
        return this.http.get<string[]>(`/api/calendar/allparticipant/${calendarEvent.id}`);
    }

    getAllParticipantUser(calendarEvent: CalendarEvent): Observable<CalendarParticipantUserDto> {
        return this.http.get<CalendarParticipantUserDto>(
            `/api/calendar/allparticipantuser/${calendarEvent.id}`,
        );
    }

    private convertNumbersToDateString(year: number, month: number, day: number): string {
        const yearS = '' + year;
        const monthS = month < 10 ? '0' + month : month;
        const dayS = day < 10 ? '0' + day : day;
        return yearS + monthS + dayS;
    }
}
