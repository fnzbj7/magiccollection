import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { MagicExpansionListComponent } from './magic/magic-expansion-list/magic-expansion-list.component';
import { LandingComponent } from './landing/landing.component';
import { AddCardComponent } from './magic/modify-card/add-card/add-card.component';
import { RemoveCardComponent } from './magic/modify-card/remove-card/remove-card.component';

const appRoute: Routes = [
    {
        path: 'calendar',
        loadChildren: () =>
            import('./calendar/calendar.module').then(m => m.CalendarModule),
    },
    { path: 'cards/:expansion', component: MagicCardListComponent },
    // { path: '', redirectTo: '/RNA', pathMatch: 'full'}
    {
        path: 'cards',
        component: MagicExpansionListComponent,
        pathMatch: 'full',
    },
    { path: 'addcards', component: AddCardComponent, pathMatch: 'full' },
    { path: 'removecards', component: RemoveCardComponent, pathMatch: 'full' },
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: '**', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
