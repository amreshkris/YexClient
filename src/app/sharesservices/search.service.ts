import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  getAllStock(){
    console.log('service call');
    return this.http.post('http://localhost:22793/api/load/10','').map( res =>{
      { 
        return res.json();
      }
    }).catch(error => Observable.throw(error.json()))
  }

  fluctuateStockPrice(){
    console.log('service call');
    return Observable.interval(5000).switchMap(() => this.http.get('http://localhost:22793/api/stock/fluctuate')).
    map(res=> {
      console.log("polled result from service "+ res.json());
      return res.json();
    }).catch(error => Observable.throw(error.json()))    
  }

}
