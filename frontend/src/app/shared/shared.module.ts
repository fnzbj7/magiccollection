import { Injectable, NgModule } from '@angular/core';
import {
    HammerGestureConfig,
    HammerModule,
    HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
    overrides = {
        swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
        pinch: { enable: true },
        rotate: { enable: false },
    };
}
@NgModule({
    imports: [FontAwesomeModule, HammerModule],
    exports: [FontAwesomeModule],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig,
        },
    ],
})
export class SharedModule {}
