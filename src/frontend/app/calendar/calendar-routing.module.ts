import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarAddComponent } from './calendar-add/calendar-add.component';

const routes: Routes = [
    {
        path: '',
        component: CalendarListComponent,
    },
    {
        path: 'add',
        component: CalendarAddComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CalendarRoutingModule {}
