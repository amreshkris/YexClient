import { Component } from '@angular/core';
import { SearchService } from './sharesservices/search.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [SearchService]
})
export class AppComponent {
  title = 'app works!';
}
