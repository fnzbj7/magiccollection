import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MagicExpansionComponent } from './magic/magic-expansion/magic-expansion.component';
import { MagicCardListComponent } from './magic/magic-card-list/magic-card-list.component';
import { MagicExpansionListComponent } from './magic/magic-expansion-list/magic-expansion-list.component';
import { MagicCardsListService } from './magic/magic-cards-list.service';
import { MagicCardComponent } from './magic/magic-card/magic-card.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { MagicCardAmountDirective } from './magic/magic-card/magic-card-amount.directive';
import { MainUrlService } from './shared/main-url.services';


@NgModule({
  declarations: [
    AppComponent,
    MagicExpansionComponent,
    MagicCardListComponent,
    MagicExpansionListComponent,
    MagicCardComponent,
    HeaderComponent,
    MagicCardAmountDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [MagicCardsListService, MainUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
