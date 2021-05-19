import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { CalendarDay } from './model/calendar-day.model';
import { Subscription } from 'rxjs';
import { faAngleLeft, faAngleRight, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../auth/authentication.service';
import { Privilege } from '../../auth/model/privilege.enum';
import { CalendarEvent } from './model/calendar-event.model';
import { SwipeModel } from 'src/app/shared/swipe.model';

@Component({
    selector: 'app-calendar-list',
    templateUrl: './calendar-list.component.html',
    styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit, AfterViewInit, OnDestroy {
    eventPrivilege = false;

    // Font-Awesome
    faAngleLeft = faAngleLeft;
    faAngleRight = faAngleRight;
    faCalendarPlus = faCalendarPlus;

    // CalendarView
    daysArray = this.calendarService.daysArray;
    monthNameArray = this.calendarService.monthNameArray;

    dummyDays: number[] = Array(28);
    currentDate!: Date;
    calendarDayList!: CalendarDay[];

    isDetailsOpen = false;

    private selectCalendarEventSub!: Subscription;
    private currentUserSub!: Subscription;

    constructor(
        private calendarService: CalendarService,
        private authenticationService: AuthenticationService,
    ) {}
    ngAfterViewInit(): void {
        const c: HTMLDivElement | null = document.querySelector('.calendar-container');
        if (c) {
            new SwipeModel(c, this.onSwipeRight.bind(this), this.onSwipeLeft.bind(this));
        } else {
            console.warn('nem volt található a .calendar-container');
        }
    }

    ngOnInit() {
        this.userCalendarPrivilegeSub();

        this.initCalendar();

        this.getSelectCalendarEventSub();
    }

    onNextMonth() {
        let yearModify = 0;
        let monthNumber = this.currentDate.getMonth() + 1;
        if (monthNumber === 12) {
            yearModify = 1;
            monthNumber = 0;
        }
        this.currentDate = new Date(this.currentDate.getFullYear() + yearModify, monthNumber, 15);
        this.createCalendar(this.currentDate);
    }

    onPreviousMonth() {
        this.currentDate = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() - 1,
            15,
        );
        this.createCalendar(this.currentDate);
    }

    onSwipeRight() {
        this.onPreviousMonth();
    }

    onSwipeLeft() {
        this.onNextMonth();
    }

    onDelete(calendarEvent: CalendarEvent) {
        this.calendarService.removeCalendarValue(calendarEvent);
        this.calendarService.selectCalendarEvent();
        this.createCalendar(this.currentDate);
    }

    ngOnDestroy() {
        if (this.selectCalendarEventSub) {
            this.selectCalendarEventSub.unsubscribe();
        }
        if (this.currentUserSub) {
            this.currentUserSub.unsubscribe();
        }
    }

    private createCalendar(relativeDate: Date) {
        this.calendarDayList = [];

        const copyDate = this.copyCurrentDate(relativeDate);

        this.addPreviousMonthDays(copyDate, this.calendarDayList);

        this.addActualMonthDays(copyDate, this.calendarDayList);

        this.addNextMonthDays(copyDate, this.calendarDayList);
    }

    private getLastDateDayFromDate(date: Date): number {
        const lastDayDate = this.getLastDayDate(date);
        return lastDayDate.getDate();
    }

    private getLastDayDate(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    private copyCurrentDate(relativeDate: Date): Date {
        const copyDate = new Date(relativeDate);
        copyDate.setUTCDate(1);
        return copyDate;
    }

    private userCalendarPrivilegeSub() {
        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            if (!user) {
                this.eventPrivilege = false;
            } else {
                this.eventPrivilege = user.privileges.includes(Privilege.EVENT_MODIFY);
            }
        });
    }

    private initCalendar() {
        const tmpDate = new Date();
        this.currentDate = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), 15);

        if (this.calendarService.inited) {
            this.createCalendar(this.currentDate);
        } else {
            console.log('Get All');
            this.calendarService.getAllCalendarEvent().subscribe(a => {
                this.createCalendar(this.currentDate);
            });
        }
    }

    private getSelectCalendarEventSub() {
        this.selectCalendarEventSub = this.calendarService
            .getSelectCalendarEventSub()
            .subscribe(selectedEventId => {
                this.isDetailsOpen = selectedEventId !== 0;
            });
    }

    private addPreviousMonthDays(copyDate: Date, calendarDayList: CalendarDay[]) {
        const weekDay = this.convertDateToDay(copyDate);

        const previousMonth = this.getPrevousMonthFromDate(copyDate);

        // Before
        for (let i = 1; i <= weekDay - 1; i++) {
            const dateDay = this.convertWeekDayToDateDay(i, previousMonth, weekDay);

            const calendarEvents: CalendarEvent[] = this.calendarService.getCalendarValue(
                previousMonth.getFullYear(),
                previousMonth.getMonth(),
                dateDay,
            );

            const tmpCalendar: CalendarDay = new CalendarDay(calendarEvents, dateDay, true);

            calendarDayList.push(tmpCalendar);
        }
    }

    private convertWeekDayToDateDay(i: number, previousMonth: Date, weekDay: number) {
        return i + previousMonth.getUTCDate() - (weekDay - 1);
    }

    private getPrevousMonthFromDate(date: Date) {
        const previousMonth = new Date(date.getTime());
        previousMonth.setUTCDate(0);
        return previousMonth;
    }

    private convertDateToDay(copyDate: Date): number {
        return copyDate.getUTCDay() === 0 ? 7 : copyDate.getUTCDay();
    }

    private addActualMonthDays(copyDate: Date, calendarDayList: CalendarDay[]) {
        const lastDateDay = this.getLastDateDayFromDate(copyDate);
        for (let i = 1; i <= lastDateDay; i++) {
            const tmpCalendar: CalendarDay = new CalendarDay(
                this.calendarService.getCalendarValue(
                    copyDate.getFullYear(),
                    copyDate.getMonth() + 1,
                    i,
                ),
                i,
                false,
            );

            calendarDayList.push(tmpCalendar);
        }
    }

    private addNextMonthDays(copyDate: Date, calendarDayList: CalendarDay[]) {
        const { actualMonthLastDayType, year, month } = this.getDateParts(copyDate);

        for (let i = 1; i <= 6 - actualMonthLastDayType; i++) {
            const calendarEventList = this.calendarService.getCalendarValue(year, month, i);
            const tmpCalendar: CalendarDay = {
                calendarEventList,
                day: i,
                isOffMonth: true,
            };
            calendarDayList.push(tmpCalendar);
        }
    }

    private getDateParts(copyDate: Date) {
        const lastDayDate = this.getLastDayDate(copyDate);
        const actualMonthLastDayType = lastDayDate.getUTCDay();
        let year = lastDayDate.getFullYear();
        let month = lastDayDate.getMonth();
        if (month === 11) {
            month = 1;
            year++;
        } else {
            month += 2;
        }
        return { actualMonthLastDayType, year, month };
    }
}
