import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, TrCurrencyPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  constructor(public order: OrderService){}
}
