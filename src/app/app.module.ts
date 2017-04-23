import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SearchService } from './sharesservices/search.service';

@NgModule({
  declarations: [
    AppComponent,
    StocklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
