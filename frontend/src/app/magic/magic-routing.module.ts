import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MagicCardListContainerComponent } from './magic-card-list/magic-card-list-container/magic-card-list-container.component';
import { ModifyCardComponent } from './modify-card/modify-card.component';

const routes: Routes = [
    {
        path: 'list',
        redirectTo: 'list/',
        pathMatch: 'full',
    },
    { path: 'list/user/:userId/:expansion', component: MagicCardListContainerComponent },
    { path: 'list/:expansion', component: MagicCardListContainerComponent },
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
