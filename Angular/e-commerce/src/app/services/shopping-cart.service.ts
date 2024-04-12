import { Injectable } from '@angular/core';
import { ShoppingCartModel } from '../models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCarts: ShoppingCartModel[] = [
    {
      id: "1",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFFXV4zCJybOFvocqAKKkko37SsPbl9F66Q&usqp=CA",
      name: "Grundig Pc 2560 B1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 12650,
      discountedPrice: 11999,
      stock: 10,
      kdvRate: 10,
      categoryId: "1",
      category: {
        id: "1",
        name: "Elektronik"
      },
      quantity: 1
    }
  ];
  constructor() { }
}