import { Component, OnInit, Input, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService, OrderDetailObject } from './../sharesservices/search.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  inputs: ['stock'],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() stock: any;
  @ViewChild('lgModal') public lgModal: ModalDirective;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  orders: OrderDetailObject;
  orderHistory: Array<OrderDetailObject>;
  stockForm: FormGroup;
  insufficientFunds: boolean;

  constructor(private searchService: SearchService, private router: Router, fb: FormBuilder) {
    this.stockForm = fb.group({
      'qty': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  //hide modal and emit event to poll again
  closeModal() {
    this.lgModal.hide();
    var localClick = SearchService.ModalClicks + 1;
    SearchService.ModalClicks = localClick;
    this.onClose.emit(localClick);
  }

  //show modal and emit event to stop poll 
  showModal(stock) {
    this.lgModal.show();
    this.onShow.emit(SearchService.ModalClicks);
  }

  // buy respective stock and navigate
  buyStock(stock, numberOfQuantity) {
    this.orders = new OrderDetailObject(stock.StockName, numberOfQuantity);
    if ((stock.StockPrice * numberOfQuantity) < SearchService.TotalAmountInWallet.amount) {
      this.insufficientFunds = false;
      this.searchService.saveOrder(new OrderDetailObject(stock.StockName, numberOfQuantity)).subscribe(data => {
          SearchService.TotalAmountInWallet.amount -= stock.StockPrice * numberOfQuantity;
          this.lgModal.hide();
          this.router.navigateByUrl('/order');
      },error => {console.log("Error in save order" + error)});
      
    }
    else {
      this.insufficientFunds = true;
    }

  }
}

