import { Component } from '@angular/core';
import { CategoryModel } from '../../models/category.model';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from '../../pipes/category.pipe';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model';
import { ProductPipe } from '../../pipes/product.pipe';
import { SearchComponent } from '../../common/components/search/search.component';
import { TrCurrencyPipe } from 'tr-currency';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home', //npm install tr-currency
  standalone: true,
  imports: [FormsModule, CategoryPipe, CommonModule, ProductPipe, SearchComponent, TrCurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: CategoryModel[] = [];
  numbers: number[] = [1, 2, 3, 4]
  categorySearch: string = "";
  productSearch: string = "";
  selectedCategoryId: string = "";

  constructor(
    private cart: ShoppingCartService,
    public _product: ProductService
  ) {
    setTimeout(() => {
      this.seedData();
    }, 3000);
  }

  selectCategory(id: string = "") {
    this.selectedCategoryId = id;
  }

  decrementProductQuantity(product: ProductModel) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  incrementProductQuantity(product: ProductModel) {
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }

  addShoppingCart(product: ProductModel) {
    // ...product => referansı koparmak için kullanılıyor c# ta params operatörü 
    const productModel = { ...product };

    const model = this.cart.shoppingCarts.find(p => p.id === product.id);
    if (model === undefined) {
      this.cart.shoppingCarts.push(productModel);
    } else {
      model.quantity += productModel.quantity;
    }

    product.stock -= productModel.quantity;
  }

  seedData() {
    this.categories = [
      {
        id: "1",
        name: "Elektronik"
      },
      {
        id: "2",
        name: "Meyve & Sebze"
      },
      {
        id: "3",
        name: "Kıyafet"
      }
    ]
  }
}