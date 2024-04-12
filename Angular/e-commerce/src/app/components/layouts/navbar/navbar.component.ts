import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public cart: ShoppingCartService){}
}