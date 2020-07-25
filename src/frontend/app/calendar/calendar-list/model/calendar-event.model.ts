export class CalendarEvent {
    eventStart: Date;
    location: string;

    constructor(
        public id: number,
        public hour: number,
        public minute: number,
        public title: string,
    ) {}
}
