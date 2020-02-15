import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarElementComponent } from './calendar-list/calendar-element/calendar-element.component';
import { EventDetailsComponent } from './calendar-list/event-details/event-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CalendarListComponent,
        CalendarElementComponent,
        EventDetailsComponent,
    ],
    imports: [CommonModule, CalendarRoutingModule, SharedModule],
})
export class CalendarModule {}
