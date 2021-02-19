export class CalendarEvent {
    eventStart: Date = new Date();
    location = '';

    constructor(
        public id: number,
        public hour: number,
        public minute: number,
        public title: string = '',
    ) {}
}
