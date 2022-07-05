import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTimepickerComponent } from './timepicker';

export { NgbTimepickerComponent as NgbTimepicker } from './timepicker';
export { NgbTimepickerConfig } from './timepicker-config';
export { NgbTimeStruct } from './ngb-time-struct';
export { NgbTimeAdapter } from './ngb-time-adapter';
export { NgbTimepickerI18n } from './timepicker-i18n';

@NgModule({
    declarations: [NgbTimepickerComponent],
    exports: [NgbTimepickerComponent],
    imports: [CommonModule],
})
export class NgbTimepickerModule {}
