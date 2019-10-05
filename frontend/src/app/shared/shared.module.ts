import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faCalendarPlus,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor() {
    library.add(faCoffee);
    library.add(faAngleLeft);
    library.add(faAngleRight);
    library.add(faTimes);
    library.add(faCalendarPlus);
    library.add(faInfoCircle);
  }
}
