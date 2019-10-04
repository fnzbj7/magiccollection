import { CalendarEvent } from './calendar-event.model';

export class CalendarDay {
  day: number;
  calendarEventList: CalendarEvent[];
  isOffMonth: boolean;
}
