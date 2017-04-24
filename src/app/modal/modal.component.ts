import { Component, OnInit , Input , ViewChild, AfterViewInit } from '@angular/core';
import { SearchService } from './../sharesservices/search.service';
import {ModalDirective} from 'ngx-bootstrap';


@Component({
  selector: 'app-modal',
  inputs: ['stock'],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  viewProviders : [SearchService]
})


export class ModalComponent implements OnInit {
  @Input() stock :any;
  @ViewChild('lgModal') public lgModal: ModalDirective;
  constructor() { }

  ngOnInit() {
    //console.log("modal1" + JSON.stringify(this.stock));
  }



  selectRow(stock){
    console.log("modal2   " + JSON.stringify(this.stock));
    this.lgModal.show();
  }

}
