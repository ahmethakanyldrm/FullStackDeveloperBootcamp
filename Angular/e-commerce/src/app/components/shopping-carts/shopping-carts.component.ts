import { Component } from '@angular/core';
import { SearchComponent } from '../../common/components/search/search.component';
@Component({
  selector: 'app-shopping-carts',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './shopping-carts.component.html',
  styleUrl: './shopping-carts.component.css'
})
export class ShoppingCartsComponent {

}
