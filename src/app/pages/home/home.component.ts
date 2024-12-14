import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  standalone: false
})
export class HomePageComponent {
  @HostBinding('class') className = 'tw-bg-blue-400 tw-flex tw-justify-center tw-items-center tw-h-screen';

  protected username: string;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    const user = this.auth.getLoggedUser();
    this.username = user ? user.fullname : 'Visitante';
  }

  protected async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  }
}