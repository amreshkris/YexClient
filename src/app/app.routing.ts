import { Routes, RouterModule } from '@angular/router';
import { StocklistComponent } from './stocklist/stocklist.component';
import { OrderComponent } from './order/order.component'
const appRoutes: Routes = [
  { path: 'stocklist', component: StocklistComponent },
  { path: '', redirectTo: '/stocklist', pathMatch: 'full' },
  { path: 'order', component: OrderComponent }
  //{ path: '', redirectTo: '', pathMatch: 'full' }
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);