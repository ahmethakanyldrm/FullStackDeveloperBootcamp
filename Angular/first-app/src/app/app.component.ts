import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  work: string = "";
  todos:string[] = [];
  save() {
    console.log(this.work);
    this.todos.push(this.work);
    this.work = "";
  }

  

}
