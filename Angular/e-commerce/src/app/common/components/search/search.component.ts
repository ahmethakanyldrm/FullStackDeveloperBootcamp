import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() changeSearch = new EventEmitter<string>();
  search: string = "";

  keyup() {
    this.changeSearch.emit(this.search);
  }
}