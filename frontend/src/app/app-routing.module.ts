import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { MagicExpansionListComponent } from './magic/magic-expansion-list/magic-expansion-list.component';

const appRoute: Routes = [
    { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule'},
    { path: ':expansion', component: MagicCardListComponent},
    //{ path: '', redirectTo: '/RNA', pathMatch: 'full'}
    { path: '', component: MagicExpansionListComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
