import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { LandingComponent } from './landing/landing.component';
import { ModifyCardComponent } from './magic/modify-card/modify-card.component';
import { AuthGuard } from './auth/auth.guard';

const appRoute: Routes = [
    {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
    },
    {
        path: 'cards',
        redirectTo: 'cards/',
        pathMatch: 'full',
    },
    { path: 'cards/:expansion', component: MagicCardListComponent },
    {
        path: 'addcards',
        component: ModifyCardComponent,
        pathMatch: 'full',
        data: { modifyQty: 1 },
        canActivate: [AuthGuard],
    },
    {
        path: 'removecards',
        component: ModifyCardComponent,
        pathMatch: 'full',
        data: { modifyQty: -1 },
        canActivate: [AuthGuard],
    },
    { path: '', component: LandingComponent, pathMatch: 'full' },
    {
        path: 'animation',
        loadChildren: () => import('./animation/animation.module').then(m => m.AnimationModule),
    },
    { path: '**', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
