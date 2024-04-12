import { Injectable } from '@angular/core';
import { ShoppingCartModel } from '../models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCarts: ShoppingCartModel[] = [ ];
  constructor() { }
}