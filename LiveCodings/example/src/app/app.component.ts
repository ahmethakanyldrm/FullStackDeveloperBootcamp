import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, SearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // props
  work: string = "";
  todos: string[] = [];

  updateIndex = 0;
  updateWork = "";

  search: string = "";



  add() {
    this.todos.push(this.work);
    this.work = "";
  }

  get(index:number) {
    this.updateWork = this.todos[index];
  }

  update() {
    this.todos[this.updateIndex] = this.updateWork;
    this.updateWork = "";
  }

  deleteByIndex(index:number) {
   const result = confirm("Do you want to delete this element?")
    if(result) {
      this.todos.splice(index,1);
    }
  }
}
