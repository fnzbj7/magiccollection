import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarElementComponent } from './calendar-list/calendar-element/calendar-element.component';

@NgModule({
  declarations: [CalendarListComponent, CalendarElementComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
