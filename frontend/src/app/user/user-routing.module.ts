import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserConfigComponent } from './config/user-config.component';

const routes: Routes = [
    {
        path: 'config',
        component: UserConfigComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
