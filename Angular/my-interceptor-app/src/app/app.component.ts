import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Interceptors</h1>
   <button (click)="get()">Get API Request</button>
  `
})
export class AppComponent {
  
  constructor(
    private http: HttpClient
  ) {}

  get() {
    this.http.get("").subscribe((res: any)=> {
      console.log(res);
    })
  }
}
