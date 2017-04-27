import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { ButtonsModule  } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SearchService } from './sharesservices/search.service';
import { ModalComponent } from './modal/modal.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    StocklistComponent,
    ModalComponent,    
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ButtonsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule    
  ],
  providers: [appRoutingProviders,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
