import { CalendarEvent } from './calendar-list/model/calendar-event.model';
import { Subject } from 'rxjs';

export class CalendarService {

    private calendarMap: Map<string, CalendarEvent[]>;
    private selectCalendarEventSub: Subject<number> = new Subject();
    private selectedCalendarEvent: CalendarEvent;
    minnum = 20;

    getCalendarValue(year: number, month: number, day: number) {
        if (!this.calendarMap) {
            // Init
            this.calendarMap = new Map();
            const calendarItem = new CalendarEvent(1, 19, 20, 'RNA Draft' );
            const calendarItem2 = new CalendarEvent(2, 19, 30, 'St' );

            const calendarItem3 = new CalendarEvent(3, 16, 30, 'Standard 2/7' );
            const calendarItem4 = new CalendarEvent(4, 15, 30, 'RNA Prerelease Very long text' );
            // const calendarItem5 = new CalendarEvent(0, 14, 30, 'RESET' );
            const calendarItem5 = new CalendarEvent(5, 14, 30, 'Event Cust' );
            const calendarItem6 = new CalendarEvent(6, 14, 30, 'Event Cust' );
            const calendarItem7 = new CalendarEvent(7, 15, 30, 'RNA Prerelease Very long text' );
            const calendarItem8 = new CalendarEvent(8, 19, 30, 'St' );

            this.addValueToCalendar(2019, 2, 20, calendarItem);
            this.addValueToCalendar(2019, 2, 20, calendarItem2);
            this.addValueToCalendar(2019, 2, 20, calendarItem4);
            this.addValueToCalendar(2019, 2, 20, calendarItem5);

            this.addValueToCalendar(2019, 8, 20, calendarItem);
            this.addValueToCalendar(2019, 8, 20, calendarItem2);
            this.addValueToCalendar(2019, 8, 20, calendarItem4);
            this.addValueToCalendar(2019, 8, 18, calendarItem5);

            this.addValueToCalendar(2019, 8, 16, calendarItem);
            this.addValueToCalendar(2019, 7, 23, calendarItem2);
            this.addValueToCalendar(2019, 8, 5, calendarItem4);
            this.addValueToCalendar(2019, 8, 5, calendarItem5);

            this.calendarMap.set('20190223', [calendarItem3]);
            this.calendarMap.set('20190226', [calendarItem8]);
            this.calendarMap.set('20190301', [calendarItem7]);
            this.calendarMap.set('20190308', [calendarItem6]);
        }

        const dateS = this.convertNumbersToDateString(year, month, day);
        return this.calendarMap.get(dateS);
    }

    addValueToCalendar(year: number, month: number, day: number, calendarEvent: CalendarEvent) {
      // Save to database
      const dateS = this.convertNumbersToDateString(year, month, day);
      const calendarEventArray = this.calendarMap.get(dateS);
      if (calendarEventArray) {
        calendarEventArray.push(calendarEvent);
        calendarEventArray.sort( (a, b) => {
          if (a.hour !== b.hour) {
            return a.hour - b.hour;
          } else {
            return a.minute - b.minute;
          }
        });

        // ID-t késöbb megváltoztatni és a default 0 legyen
      } else {
        this.calendarMap.set(dateS, [calendarEvent]);
      }
    }

    private convertNumbersToDateString(year: number, month: number, day: number): string {
        const yearS = '' + year;
        const monthS = month < 10 ? '0' + month : month;
        const dayS =  day < 10 ? '0' + day : day;
        return yearS + monthS + dayS;
    }

    getSelectedEventId() {
      if (this.selectedCalendarEvent) {
        return this.selectedCalendarEvent.id;
      }
      return 0;
    }

    getselectCalendarEventSub() {
      return this.selectCalendarEventSub.asObservable();
    }

    selectCalendarEvent( calendarEvent?: CalendarEvent) {
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
}
