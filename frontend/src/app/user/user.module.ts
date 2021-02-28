import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserConfigComponent } from './config/user-config.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [UserConfigComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule, FormsModule],
})
export class UserModule {}
