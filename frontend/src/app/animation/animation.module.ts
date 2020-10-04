import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationComponent } from './animation.component';

@NgModule({
    declarations: [AnimationComponent],
    imports: [CommonModule, AnimationRoutingModule],
})
export class AnimationModule {}
