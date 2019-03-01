import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarElementComponent } from './calendar-list/calendar-element/calendar-element.component';
import { CalendarService } from './calendar.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [CalendarListComponent, CalendarElementComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FontAwesomeModule
  ],
  providers: [CalendarService]
})
export class CalendarModule {
  constructor() {
    library.add(faCoffee);
    library.add(faAngleLeft);
    library.add(faAngleRight);
  }
 }