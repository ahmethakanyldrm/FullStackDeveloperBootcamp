import { Injectable } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: OrderModel[] = [];

  constructor(private _http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this._http.get<OrderModel[]>("http://localhost:3000/orders")
      .subscribe({
        next: (res) => {
          this.orders = res;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      })
  }

}

/*
 const data = await fetch("http://localhost:3000/orders")
   .then(res=> res.json());
   this.orders = data;
  }
*/
/*
this._http.get<OrderModel[]>("http://localhost:3000/orders")
    .subscribe({
      next: (res)=> {
        this.orders = res;
        if(callBack != undefined){
          callBack();
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }
*/