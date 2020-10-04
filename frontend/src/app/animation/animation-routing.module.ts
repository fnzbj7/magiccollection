import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationComponent } from './animation.component';

const routes: Routes = [{ path: '', component: AnimationComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnimationRoutingModule {}
