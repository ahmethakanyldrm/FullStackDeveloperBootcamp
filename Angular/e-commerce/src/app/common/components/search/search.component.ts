import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() changeSearch = new EventEmitter<string>();
  search: string = '';

  keyUp() {
    this.changeSearch.emit(this.search);
  }
}
