import { Component } from '@angular/core';
import { SearchService, Wallet } from './sharesservices/search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [SearchService]
})
export class AppComponent {
  title = '';
  walletAmount: Wallet;
  constructor(private searchService : SearchService){
    this.walletAmount = SearchService.TotalAmountInWallet;
  }
}
