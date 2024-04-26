import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = []

  constructor(private http: HttpClient) {
    this.getAll();
  }

  // get all product request 
  getAll() {
    this.http.get<ProductModel[]>("http://localhost:3000/products").subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err:HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  
}