import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';

const appRoute: Routes = [
    { path: ':expansion', component: MagicCardListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
