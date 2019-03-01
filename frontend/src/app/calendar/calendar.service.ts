import { CalendarEvent } from './calendar-list/model/calendar-event.model';
import { Subject } from 'rxjs';

export class CalendarService {

    private calendarMap: Map<string, CalendarEvent[]>;
    private selectCalendarEventSub: Subject<number> = new Subject();
    private selectedCalendarEvent: CalendarEvent;

    getCalendarValue(year: number, month: number, day: number) {
        if (!this.calendarMap) {
            // Init
            this.calendarMap = new Map();
            const calendarItem = new CalendarEvent(1, 18, 30, 'RNA Draft' );
            const calendarItem2 = new CalendarEvent(2, 18, 30, 'St' );
            const calendarItem3 = new CalendarEvent(3, 18, 30, 'Standard 2/7' );
            const calendarItem4 = new CalendarEvent(4, 18, 30, 'RNA Prerelease Very long text' );

            this.calendarMap.set('20190220', [calendarItem, calendarItem2]);
            this.calendarMap.set('20190223', [calendarItem3]);
            this.calendarMap.set('20190226', [calendarItem2]);
            this.calendarMap.set('20190301', [calendarItem4]);
        }

        const dateS = this.convertNumbersToDateString(year, month, day);
        return this.calendarMap.get(dateS);
    }

    private convertNumbersToDateString(year: number, month: number, day: number): string {
        const yearS = '' + year;
        const monthS = month < 10 ? '0' + month : month;
        const dayS =  day < 10 ? '0' + day : day;
        return yearS + monthS + dayS;
    }

    getSelectedEventId() {
      if(this.selectedCalendarEvent) {
        return this.selectedCalendarEvent.id;
      }
      return 0;
    }

    getselectCalendarEventSub() {
      return this.selectCalendarEventSub.asObservable();
    }

    selectCalendarEvent( calendarEvent: CalendarEvent) {
      this.selectedCalendarEvent = calendarEvent;
      this.selectCalendarEventSub.next(this.selectedCalendarEvent.id);
    }
}
