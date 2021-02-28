import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LoginComponent, RegComponent],
    imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule, SharedModule],
})
export class AuthModule {}
