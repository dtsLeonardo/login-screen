import { Component, HostBinding } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  template: `
    <mat-card class="tw-min-w-80 tw-rounded tw-p-6">
      <form class="tw-flex tw-flex-col tw-gap-1" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <mat-form-field>
          <mat-label>Usuario</mat-label>
          <input matInput placeholder="Usuario" formControlName="username" />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Senha</mat-label>
          <input matInput placeholder="Senha" type="password" formControlName="password" />
        </mat-form-field>

        <div class="tw-flex tw-flex-row tw-justify-between tw-gap-1">
          <button mat-flat-button color="primary" type="submit">Login</button>
          <button mat-stroked-button color="accent" type="button" [routerLink]="['/register']">Registrar</button>
        </div>

        <div *ngIf="errorMessage" class="tw-mt-2 tw-text-red-500">{{ errorMessage }}</div>
      </form>
    </mat-card>
  `,
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