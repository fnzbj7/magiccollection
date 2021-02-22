import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { LandingComponent } from './landing/landing.component';
import { ModifyCardComponent } from './magic/modify-card/modify-card.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';
import { AntiAuthGuard } from './auth/anti-auth.guard';

const appRoute: Routes = [
    {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        canActivate: [AntiAuthGuard],
    },
    {
        path: 'reg',
        component: RegComponent,
        pathMatch: 'full',
        canActivate: [AntiAuthGuard],
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
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    },
    { path: '**', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
