import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MagicSetIconComponent } from './magic/magic-set-list/magic-set-icon/magic-set-icon.component';
import { MagicSetListComponent } from './magic/magic-set-list/magic-set-list.component';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { MagicCardComponent } from './magic/magic-card-list/magic-card/magic-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MagicCardAmountDirective } from './magic/magic-card-list/magic-card/magic-card-amount.directive';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingComponent } from './landing/landing.component';
import { MagicCardRarityFilterComponent } from './magic/magic-card-list/magic-card-rarity-filter/magic-card-rarity-filter.component';
import { MagicCardModalComponent } from './magic/magic-card-list/magic-card-modal/magic-card-modal.component';
import { SharedModule } from './shared/shared.module';
import {
    SocialLoginModule,
    FacebookLoginProvider,
    SocialAuthServiceConfig,
} from 'angularx-social-login';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ModifyPreviewComponent } from './magic/modify-card/modify-preview/modify-preview.component';
import { ModifyCardComponent } from './magic/modify-card/modify-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideMenuComponent } from './header/side-menu/side-menu.component';
import { MagicCardMeldComponent } from './magic/magic-card-list/magic-card-modal/card-layouts/meld/magic-card-meld.component';
// tslint:disable-next-line: max-line-length
import { MagicCardTransformComponent } from './magic/magic-card-list/magic-card-modal/card-layouts/transform/magic-card-transform.component';
import { MagicCardSplitComponent } from './magic/magic-card-list/magic-card-modal/card-layouts/split/magic-card-split.component';
// tslint:disable-next-line: max-line-length
import { MagicCardAftermathComponent } from './magic/magic-card-list/magic-card-modal/card-layouts/aftermath/magic-card-aftermath.component';
import { MagicCardNormalComponent } from './magic/magic-card-list/magic-card-modal/card-layouts/normal/magic-card-normal.component';

@NgModule({
    declarations: [
        AppComponent,
        MagicSetIconComponent,
        MagicCardListComponent,
        MagicSetListComponent,
        MagicCardComponent,
        HeaderComponent,
        MagicCardAmountDirective,
        AuthComponent,
        LandingComponent,
        MagicCardRarityFilterComponent,
        MagicCardModalComponent,
        ModifyCardComponent,
        ModifyPreviewComponent,
        SideMenuComponent,
        MagicCardMeldComponent,
        MagicCardTransformComponent,
        MagicCardSplitComponent,
        MagicCardAftermathComponent,
        MagicCardNormalComponent,
    ],
    entryComponents: [AuthComponent, MagicCardModalComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        SocialLoginModule,
        LazyLoadImageModule,
        SharedModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSidenavModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider(environment.facebookAppId),
                    },
                ],
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
