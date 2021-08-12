import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MagicCardListComponent } from './magic-card-list/magic-card-list.component';
import { ModifyCardComponent } from './modify-card/modify-card.component';

const routes: Routes = [
    {
        path: 'list',
        redirectTo: 'list/',
        pathMatch: 'full',
    },
    { path: 'list/user/:userId/:expansion', component: MagicCardListComponent },
    { path: 'list/:expansion', component: MagicCardListComponent },
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MagicRoutingModule {}
