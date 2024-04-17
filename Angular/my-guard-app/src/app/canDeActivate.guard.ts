import { CanDeactivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const canDeActivateGuard: CanDeactivateFn<HomeComponent> = (component, currentRoute, currentState, nextState) => {
  
  return confirm("Home Component'ten çıkmak üzeresin. Devam Edilsin mi? ");
};
