import { CalendarEvent } from './calendar-event.model';

export class CalendarDay {
    constructor(
        public calendarEventList: CalendarEvent[],
        public day: number,
        public isOffMonth: boolean,
    ) {}
}
