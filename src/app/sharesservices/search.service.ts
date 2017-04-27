import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SearchService {
  static ModalClicks: number = 0;
  static TotalAmountInWallet : Wallet = { amount : 10000 }; 
  public orderHistory: Array<OrderDetailObject>;
  static readonly serverBaseUrl : string = "http://localhost:22793/";

  constructor(private http: Http) { }

  getAllStock() {
    console.log('service call');
    return this.http.post(SearchService.serverBaseUrl+'api/load/10', '').map(res => {
      {
        return res.json();
      }
    }).catch(error => Observable.throw(error.json()))
  }

  newPollStockList() {
    return Observable.interval(5000).switchMap(() => this.http.get(SearchService.serverBaseUrl+'api/stock/fluctuate')).
      map(res => {
        return res.json();
      }).catch(error => Observable.throw(error.json()))
    
  }

  saveOrder(orderDetail){
      let bodyString = JSON.stringify(orderDetail);
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers });
      console.log('service call' + bodyString);
      return this.http.post(SearchService.serverBaseUrl+'api/order',bodyString,options).map(res => {
      {        
        return res.json();
      }
    }).catch(error => Observable.throw(error.json()))
  }

  loadOrder(){
     console.log('service call to fetch order history');
     return this.http.get(SearchService.serverBaseUrl+'api/order').map(res => {
      {
        // this.orderHistory = res.json();
        console.log('From Service' + JSON.stringify(res));
        return res.json();
        
      }
    }).catch(error => Observable.throw(error.json()))
  }
}

export class OrderDetailObject{
  private StockName: string;
  private StockQuantity: number;
  constructor(name:string,qty:number){
    this.StockName = name,
    this.StockQuantity = qty
  }
}

export interface Wallet {
   amount:number;
}
