import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  // get post put delete

  get<T>(apiUrl:string, callBack:(res: T)=> void) {
    this.http.get<T>(`${api}/${apiUrl}`).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  post<T>(apiUrl:string, body:any, callBack:(res:T)=>void) {
    this.http.post<T>(`${api}/${apiUrl}`, body).subscribe({
      next: (res) => {
          callBack(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  delete<T>(apiUrl: string, callBack: (res: T) => void) {
    this.http.delete<T>(`${api}/${apiUrl}`).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  
  
}
