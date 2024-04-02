import Swal from 'sweetalert2';
import { TodoModel } from './models/todo.model';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root', // spesifik element oluşturmak için kullanılır
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], //
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // work: string = '';
  // updateWork: string = '';
  addModel: TodoModel = new TodoModel();
  updateModel: TodoModel = new TodoModel();

  updateIndex: number = 0;
  todos: TodoModel[] = [

  ];

  isUpdateFormActive: boolean = false;

  constructor (
    private http: HttpClient
  ) {
    this.getAll();
  }

  getAll() {
    this.http.get<TodoModel[]>("http://localhost:5001/todos")
    .subscribe( res => {
      this.todos = res;
    })
  }


  save() {
    // console.log(this.addModel);
    this.http.post("http://localhost:5001/todos", this.addModel)
    .subscribe(res=> {
      this.getAll();
      this.addModel = new TodoModel();
      Swal.fire({
        icon: 'success',
        title: 'Create is successful',
        showConfirmButton: false,
        showCloseButton: false,
        timer: 3000,
        position: 'bottom-right',
        toast: true,
      });
    });
    // this.todos.push(this.addModel);
    // this.addModel = new TodoModel();
  }

  changeCompleted(data: TodoModel){
    this.http.put(`http://localhost:5001/todos/${data.id}`,data)
    .subscribe(res=> {
      this.getAll();
    });
  }

  remove(index: number) {
    Swal.fire({
      icon: 'question',
      title: 'You want to delete this item?',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      showConfirmButton: true,
      confirmButtonText: 'Delete',
    }).then((res: any) => {
      if (res.isConfirmed) {
        this.todos.splice(index, 1);
      }
    });
  }

  get(index: number) {
    // this.updateWork = this.todos[index];
    // this.updateIndex = index;
    // this.isUpdateFormActive = true;

    this.updateModel = this.todos[index];
    this.updateIndex = index;
    this.isUpdateFormActive = true;
  }

  update() {
    this.todos[this.updateIndex] = this.updateModel;
    // this.updateWork = '';
    this.isUpdateFormActive = false;

    Swal.fire({
      icon: 'info',
      title: 'Update is successful',
      showConfirmButton: false,
      showCloseButton: false,
      timer: 3000,
      position: 'bottom-right',
      toast: true,
    });
  }
}
