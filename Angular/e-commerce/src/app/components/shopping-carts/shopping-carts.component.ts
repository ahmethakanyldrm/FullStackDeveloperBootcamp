import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../common/components/search/search.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { TrCurrencyPipe } from 'tr-currency';
import { ProductService } from '../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingCartModel } from '../../models/shopping-cart.model';
import { OrderModel } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-shopping-carts',
  standalone: true,
  imports: [SearchComponent, TrCurrencyPipe, FormsModule],
  templateUrl: './shopping-carts.component.html',
  styleUrl: './shopping-carts.component.css'
})
export class ShoppingCartsComponent implements OnInit {


  constructor(
    public _cart: ShoppingCartService,
    private _product: ProductService,
    private _order: OrderService,
    private _http: HttpService
  ) { }

  ngOnInit(): void {

  }



  removeByIndex(index: number) {
    const cart = this._cart.shoppingCarts[index];
    const product = this._product.products.find(p => p.id == cart.productId);

    if (product !== undefined) {
      product.stock += cart.quantity;

      this._http.put("http://localhost:3000/products/" + product.id, product)
        .subscribe({
          next: () => {
            this._product.getAll();
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
          }
        })
    }

    this._http.delete("http://localhost:3000/shoppingCarts/" + cart.id)
      .subscribe({
        next: () => {
          this._cart.getAll();

        }
      })
    // this._cart.shoppingCarts.splice(index, 1);
    // this.calculateTotal();
  }

  increment(cart: ShoppingCartModel) {
    const product = this._product.products.find(p => p.id == cart.productId);
    if (product !== undefined) {
      if (product.stock > 0) {
        cart.quantity++;
        this._http.put("http://localhost:3000/shoppingCarts/" + cart.id, cart)
          .subscribe(() => this._cart.getAll());
        product.stock--;
        this._http.put("http://localhost:3000/products/" + product.id, product)
          .subscribe(() => this._product.getAll());
      }
    }
  }

  decrement(cart: ShoppingCartModel, index: number) {
    if (cart.quantity === 1) {
      this.removeByIndex(index);
    } else {
      const product = this._product.products.find(p => p.id == cart.productId);
      if (product !== undefined) {
        cart.quantity--;
        this._http.put("http://localhost:3000/shoppingCarts/" + cart.id, cart)
          .subscribe(() => this._cart.getAll());
        product.stock++;
        this._http.put("http://localhost:3000/products/" + product.id, product)
          .subscribe(() => this._product.getAll());

      }
    }

  }

 async pay(form: NgForm) {
    if (form.valid) {
      for (const data of this._cart.shoppingCarts) {
        const amount = data.quantity * data.discountedPrice;
        const kdv = amount - (amount / ((data.kdvRate / 100) + 1));


        let lastOrderSuffix: number = 0;
        const orders = await fetch("http://localhost:3000/orders")
          .then(res => res.json());
        if (orders.length > 0) {
          lastOrderSuffix = this._order.orders[this._order.orders.length - 1].orderNumberSuffix;
        }

        const order: OrderModel = {
          id: "123",
          date: new Date().toString(),
          kdvRate: data.kdvRate,
          price: data.price,
          productName: data.name,
          productDescription: data.description,
          quantity: data.quantity,
          imageUrl: data.imageUrl,
          total: amount,
          totalAmount: amount - kdv,
          totalKdv: kdv,
          orderNumberPrefix: "TS" + new Date().getFullYear(),
          orderNumberSuffix: lastOrderSuffix + 1,
          orderNumber: "",
        };


        order.orderNumber = order.orderNumberPrefix + order.orderNumberSuffix.toString().padStart(10, "0");
        await fetch("http://localhost:3000/orders", {
          method: "POST",
          body: JSON.stringify(order)
      }); 
      
        await fetch("http://localhost:3000/shoppingCarts/" + data.id, {
          method: "DELETE"
        });

        // this._http.delete("http://localhost:3000/shoppingCarts/" + data.id).subscribe();
        //  this._order.orders.push(order);
      }

      this._cart.shoppingCarts = await fetch("http://localhost:3000/shoppingCarts")
      .then(res=> res.json());
      // setTimeout(() => {
      //   this._cart.getAll();
      // }, 300);
    }
  }
}


// let orderNumberSuffixString = order.orderNumberSuffix.toString();
// let i = order.orderNumberSuffix.toString().length;

// for(i; i< 10; i++) {
//   orderNumberSuffixString = "0" + orderNumberSuffixString;
// }