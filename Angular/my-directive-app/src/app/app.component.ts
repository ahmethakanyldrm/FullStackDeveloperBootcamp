import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyColorDirective } from './my-color.directive';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyColorDirective,ValidateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
