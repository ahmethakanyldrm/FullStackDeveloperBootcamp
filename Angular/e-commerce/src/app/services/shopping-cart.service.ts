import { Injectable } from '@angular/core';
import { ShoppingCartModel } from '../model/';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCarts: ShoppingCartModel[] = [];
  constructor() { }
}
