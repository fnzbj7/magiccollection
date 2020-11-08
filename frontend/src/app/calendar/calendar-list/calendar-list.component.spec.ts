import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { CalendarService } from '../calendar.service';
import { CalendarListComponent } from './calendar-list.component';

describe('CalendarListComponent', () => {
    let component: CalendarListComponent;
    let fixture: ComponentFixture<CalendarListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [CalendarListComponent],
            providers: [CalendarService, AuthenticationService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
