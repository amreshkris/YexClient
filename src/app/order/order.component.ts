import { Component, OnInit } from '@angular/core';
import { SearchService , OrderDetailObject} from './../sharesservices/search.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Array<any> = [];
  constructor(private searchService : SearchService) { }

  ngOnInit() {
    this.getOrderHistory();
  }

  //get latest order history on component load
  getOrderHistory(){    
    this.searchService.loadOrder().subscribe(data =>{
        this.order = data;         
    });    
  }
}
