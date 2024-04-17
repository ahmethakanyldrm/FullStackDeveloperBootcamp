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
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ShoppingCartModel } from '../../models/shopping-cart.model';

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
    private _cart: ShoppingCartService,
    public _product: ProductService,
    private _http: HttpClient
  ) {
    // setTimeout(() => {
    //   this.seedData();
    // }, 3000);

    this.getAllCategories();

  }

  // api request => Get All Categories
  getAllCategories() {
    this._http.get<CategoryModel[]>("http://localhost:3000/categories")
      .subscribe({
        next: (res) => {
          this.categories = res;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);

        }
      })
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
    const model = this._cart.shoppingCarts.find(p => p.productId === product.id);

    if (model === undefined) {
      // sepette eklemek istediğim ürün yoksa ürünü sepete ekle
      const cart: ShoppingCartModel = {
        productId: productModel.id,
        categoryId: productModel.categoryId,
        description: productModel.description,
        imageUrl: productModel.imageUrl,
        discountedPrice: productModel.discountedPrice,
        kdvRate: productModel.kdvRate,
        name: productModel.name,
        price: productModel.price,
        quantity: productModel.quantity,
        category: productModel.category,
        id: undefined
      }

      // shoppingCarts Post request
      this._http.post("http://localhost:3000/shoppingCarts/", cart)
      .subscribe({
        next: ()=> {
          this._cart.getAll();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })

    } else {
      // eğer sepette ürün varsa adetini güncelle ve api request ile kayıt bilgisini güncelle

      model.quantity += productModel.quantity;

      this._http.put("http://localhost:3000/shoppingCarts/" + model.id, model)
        .subscribe({
          next: () => {
            this._cart.getAll();
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        })


    }

    product.stock -= productModel.quantity;

    // products put request => products db update  
    this._http.put("http://localhost:3000/products/" + product.id, product)
      .subscribe({
        next: () => {
          this._product.getAll();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

}