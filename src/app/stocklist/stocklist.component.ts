import { Component, OnInit } from '@angular/core';
import { SearchService } from './../sharesservices/search.service'

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css'],
  viewProviders : [SearchService]
})
export class StocklistComponent implements OnInit {
  stocklist : Array<StockDetail> = [];
  constructor(private searchService : SearchService) {

  }
  ngOnInit() {
    this.getStockList();
    this.pollStockList();
  } 
  getStockList(){
    console.log("calling in component");
    this.searchService.getAllStock().subscribe(results =>{
      this.stocklist = results;
      console.log(JSON.stringify(results));

    },error=> {
      console.log("error in reading stocklist" + error);
    });
  }

  pollStockList(){
      console.log("Polling result");
      this.searchService.fluctuateStockPrice().subscribe(data => {
      this.stocklist = data;
      console.log("Polled result " + JSON.stringify(data));
    })
  }
}

export class StockDetail{
  symbol: string
  lastprice : number
  change : number
  changepercentage: number
  constructor(symbol,lastprice,change,changepercentage){
    this.symbol = symbol,
    this.lastprice = lastprice,
    this.change = change,
    this.changepercentage = changepercentage
  }
}
