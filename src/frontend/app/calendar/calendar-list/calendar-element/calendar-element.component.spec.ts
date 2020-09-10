import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalendarElementComponent } from './calendar-element.component';

describe('CalendarElementComponent', () => {
    let component: CalendarElementComponent;
    let fixture: ComponentFixture<CalendarElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CalendarElementComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
