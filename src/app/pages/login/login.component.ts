import { Component, HostBinding } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  standalone: false,
})
export class LoginPageComponent {
  @HostBinding('class') className = 'tw-flex tw-justify-center tw-items-center tw-h-screen tw-bg-green-800';
  protected errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {}

  protected loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected async onSubmit() {
    if (!this.loginForm.valid) return;

    const value = this.loginForm.getRawValue();
    try {
      const user = await this.auth.login(value.username!, value.password!);

      console.log('Login successful', user);
      this.router.navigate(['/home']);
    } catch {
      console.log('Login failed');
      this.errorMessage = 'Verifique se o nome de usuário e senha estão corretos';
    }
  }
}