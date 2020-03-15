import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MagicSetIconComponent } from './magic/magic-set-list/magic-set-icon/magic-set-icon.component';
import { MagicSetListComponent } from './magic/magic-set-list/magic-set-list.component';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { MagicCardsListService } from './magic/magic-card-list/magic-cards-list.service';
import { MagicCardComponent } from './magic/magic-card-list/magic-card/magic-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MagicCardAmountDirective } from './magic/magic-card-list/magic-card/magic-card-amount.directive';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { LandingComponent } from './landing/landing.component';
import { MagicCardRarityFilterComponent } from './magic/magic-card-list/magic-card-rarity-filter/magic-card-rarity-filter.component';
import { MagicCardModalComponent } from './magic/magic-card-list/magic-card-modal/magic-card-modal.component';
import { SharedModule } from './shared/shared.module';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { ModifyPreviewComponent } from './magic/modify-card/modify-preview/modify-preview.component';
import { ModifyCardComponent } from './magic/modify-card/modify-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

const config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(environment.facebookAppId),
    },
]);

export function provideConfig() {
    return config;
}

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
        LazyLoadImageModule.forRoot({
            preset: intersectionObserverPreset, // <-- tell LazyLoadImage that you want to use IntersectionObserver
        }),
        SharedModule,
        BrowserAnimationsModule,
        MatDialogModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: AuthServiceConfig, useFactory: provideConfig },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
