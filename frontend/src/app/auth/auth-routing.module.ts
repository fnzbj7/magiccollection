import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntiAuthGuard } from './anti-auth.guard';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
