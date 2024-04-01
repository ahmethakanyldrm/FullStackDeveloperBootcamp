import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartsComponent } from './components/shopping-carts/shopping-carts.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: "",
      component: HomeComponent
      },
       {
        path: "shopping-carts",
        component: ShoppingCartsComponent
       }
    ]
  },

  {
    path: "**",
    component: NotFoundComponent
  }
];
