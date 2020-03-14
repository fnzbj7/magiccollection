import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { LandingComponent } from './landing/landing.component';
import { ModifyCardComponent } from './magic/modify-card/modify-card.component';

const appRoute: Routes = [
    {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
    },
    { path: 'cards/:expansion', component: MagicCardListComponent },
    {
        path: 'cards',
        component: MagicCardListComponent,
    },
    {
        path: 'addcards',
        component: ModifyCardComponent,
        pathMatch: 'full',
        data: { modifyQty: 1 },
    },
    {
        path: 'removecards',
        component: ModifyCardComponent,
        pathMatch: 'full',
        data: { modifyQty: -1 },
    },
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: '**', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
