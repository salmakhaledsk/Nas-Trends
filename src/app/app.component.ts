import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order/order.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent,OrderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectAngular';
}
