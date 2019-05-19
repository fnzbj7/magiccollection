import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MagicExpansionComponent } from './magic/magic-expansion/magic-expansion.component';
import { MagicExpansionListComponent } from './magic/magic-expansion-list/magic-expansion-list.component';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { MagicCardsListService } from './magic/magic-cards-list.service';
import { MagicCardComponent } from './magic/magic-card/magic-card.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { MagicCardAmountDirective } from './magic/magic-card/magic-card-amount.directive';
import { MainUrlService } from './shared/main-url.services';
import { ModalModule } from 'ngx-bootstrap/modal';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule} from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    MagicExpansionComponent,
    MagicCardListComponent,
    MagicExpansionListComponent,
    MagicCardComponent,
    HeaderComponent,
    MagicCardAmountDirective,
    AuthComponent,
    LandingComponent
  ],
  entryComponents: [
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    MagicCardsListService,
    MainUrlService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
