import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { canDeActivateGuard } from './canDeActivate.guard';
import { inject } from '@angular/core';
import { canactivateGuard } from './canactivate.guard';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { canactivatechildGuard } from './canactivatechild.guard';
import { AuthService } from './auth.service';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "",
    component: LayoutsComponent,
   // canActivateChild: [canactivatechildGuard],
   canActivateChild: [()=> inject(AuthService).isAuthenticated()], // functional guard
    children: [
      {
        path: "home",
        component: HomeComponent,
        canDeactivate: [canDeActivateGuard]
      },
      {
        path: "about",
        component: AboutComponent,
        // canActivate: [canactivateGuard]
      },

      {
        path: "contact",
        component: ContactComponent
      }
    ]
  }
];
