import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarElementComponent } from './calendar-list/calendar-element/calendar-element.component';
import { CalendarService } from './calendar.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
        faCoffee,
        faAngleLeft,
        faAngleRight,
        faTimes,
        faCalendarPlus
      } from '@fortawesome/free-solid-svg-icons';
import { EventDetailsComponent } from './calendar-list/event-details/event-details.component';

@NgModule({
  declarations: [CalendarListComponent, CalendarElementComponent, EventDetailsComponent],
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
    library.add(faTimes);
    library.add(faCalendarPlus);
  }
 }
