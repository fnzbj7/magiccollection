import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarElementComponent } from './calendar-list/calendar-element/calendar-element.component';
import { EventDetailsComponent } from './calendar-list/event-details/event-details.component';
import { SharedModule } from '../shared/shared.module';
import { CalendarAddComponent } from './calendar-add/calendar-add.component';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimepickerComponent } from '../shared/timepicker/timepicker.component';

@NgModule({
    declarations: [
        CalendarListComponent,
        CalendarElementComponent,
        EventDetailsComponent,
        CalendarAddComponent,
        TimepickerComponent,
    ],
    imports: [CommonModule, CalendarRoutingModule, SharedModule, FormsModule /*, NgbModule*/],
})
export class CalendarModule {}
