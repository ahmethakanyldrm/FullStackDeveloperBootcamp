import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../common/components/search/search.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { TrCurrencyPipe } from 'tr-currency';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { ShoppingCartModel } from '../../models/shopping-cart.model';

@Component({
  selector: 'app-shopping-carts',
  standalone: true,
  imports: [SearchComponent, TrCurrencyPipe, FormsModule],
  templateUrl: './shopping-carts.component.html',
  styleUrl: './shopping-carts.component.css'
})
export class ShoppingCartsComponent implements OnInit {
  totalAmount: number = 0;
  totalKDV1: number = 0;
  totalKDV10: number = 0;
  totalKDV20: number = 0;
  total: number = 0;

  constructor(
    public cart: ShoppingCartService,
    private _product: ProductService
  ) { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.totalAmount = 0;
    this.totalKDV1 = 0;
    this.totalKDV10 = 0;
    this.totalKDV20 = 0;

    for (const data of this.cart.shoppingCarts) {
      const amount = data.quantity * data.discountedPrice;
      const kdv = amount - (amount / ((data.kdvRate / 100) + 1))

      this.totalAmount += amount - kdv;
      if (data.kdvRate === 1) {
        this.totalKDV1 += kdv;
      } else if (data.kdvRate === 10) {
        this.totalKDV10 += kdv;
      } else if (data.kdvRate === 20) {
        this.totalKDV20 += kdv;
      }

      this.total += amount;
    }
  }

  removeByIndex(index: number) {
    const cart = this.cart.shoppingCarts[index];

    const data = this._product.products.find(p => p.id == cart.id);
    if (data !== undefined) {
      data.stock += cart.quantity;
    }

    this.cart.shoppingCarts.splice(index, 1);
    this.calculateTotal();
  }

  increment(cart: ShoppingCartModel) {
    const product = this._product.products.find(p => p.id == cart.id);
    if (product !== undefined) {
      if (product.stock > 0) {
        cart.quantity++;
        product.stock--;
        this.calculateTotal();
      }
    }
  }

  decrement(cart: ShoppingCartModel, index: number) {
    if (cart.quantity === 1) {
      this.removeByIndex(index);
    } else {
      const product = this._product.products.find(p => p.id == cart.id);
      if (product !== undefined) {
        cart.quantity--;
        product.stock++;
        this.calculateTotal();
      }
    }

  }
}