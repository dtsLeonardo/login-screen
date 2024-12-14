import { Routes } from '@angular/router';
import { BasePageComponent } from './pages/base/base.component';
import { HomePageComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login/login.component';
import { RegistrationPageComponent } from './pages/registration/registration.component';
import { isLoggedGuard } from './services/auth.service';

export const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegistrationPageComponent },
      { path: 'home', component: HomePageComponent, canActivate: [isLoggedGuard] },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export default routes;
