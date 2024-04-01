import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
