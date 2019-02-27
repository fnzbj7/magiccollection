import { CalendarEvent } from './calendar-list/model/calendar-event.model';

export class CalendarService {

    calendarMap: Map<string, CalendarEvent[]>;


    getCalendarValue(year: number, month: number, day: number) {
        if (!this.calendarMap) {
            // Init
            this.calendarMap = new Map();
            const calendarItem = new CalendarEvent(month, day);

            this.calendarMap.set('20190220', [calendarItem, calendarItem]);
            this.calendarMap.set('20190223', [calendarItem]);
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
}
