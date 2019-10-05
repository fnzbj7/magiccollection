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
import { ModalModule } from 'ngx-bootstrap/modal';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule} from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { LandingComponent } from './landing/landing.component';
import { MagicCardRarityFilterComponent } from './magic/magic-card-rarity-filter/magic-card-rarity-filter.component';
import { MagicCardModalComponent } from './magic/magic-card-modal/magic-card-modal.component';
import { SharedModule } from './shared/shared.module';


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
    LandingComponent,
    MagicCardRarityFilterComponent,
    MagicCardModalComponent
  ],
  entryComponents: [
    AuthComponent,
    MagicCardModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    SharedModule
  ],
  providers: [
    MagicCardsListService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
