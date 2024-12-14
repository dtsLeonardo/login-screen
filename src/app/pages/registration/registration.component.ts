import { Component, HostBinding } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.component.html',
  standalone: false
})
export class RegistrationPageComponent {
  @HostBinding('class') className = 'tw-flex tw-justify-center tw-items-center tw-h-screen tw-bg-orange-800';

  protected errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {}

  protected registrationForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    password: ['', Validators.required],
  });

  protected async onSubmit() {
    if (!this.registrationForm.valid) return;
    const value = this.registrationForm.getRawValue();

    try {
      const user = await this.auth.signup({
        fullname: value.fullname!,
        email: value.email!,
        username: value.username!,
        dateOfBirth: value.dateOfBirth!,
        createdAt: new Date().toISOString(),
        password: value.password!,
      });

      console.log('Registration successful', user);
      this.router.navigate(['/login']);
    } catch {
      console.log('Registration failed');
      this.errorMessage = 'Erro ao registrar. Tente novamente.';
    }
  }
}