/* eslint-disable max-len */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { SocialLoginModule, FacebookLoginProvider } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideMenuComponent } from './header/side-menu/side-menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';

@NgModule({
    declarations: [
        AppComponent,
        // MagicSetIconComponent,
        // MagicCardListComponent,
        // MagicSetListComponent,
        // MagicCardComponent,
        HeaderComponent,
        // MagicCardAmountDirective,
        LandingComponent,
        // MagicCardRarityFilterComponent,
        // MagicCardModalComponent,
        // ModifyCardComponent,
        // ModifyPreviewComponent,
        SideMenuComponent,
        LoginComponent,
        RegComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {
            enabled: environment.production,
        }),
        SocialLoginModule,
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
