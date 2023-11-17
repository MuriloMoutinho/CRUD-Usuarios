import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { LOCAL_KEYS } from '../../../../../core/constants/local-keys';
import { CookieService } from 'ngx-cookie-service';
import { getTokenExpiredDate } from '../../../../../core/utils/getTokenExpiration';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  loginForm!: FormGroup;
  loginErrorMessage?: string;

  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmitLogin() {
    if (this.loginForm.invalid) return;

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          const loginResponse: ILoginResponse = response;
          const dateExpiration = getTokenExpiredDate(loginResponse.token);

          this.cookieService.set(
            LOCAL_KEYS.TOKEN,
            loginResponse.token,
            dateExpiration
          );
          this.cookieService.set(
            LOCAL_KEYS.ROLE,
            loginResponse.role,
            dateExpiration
          );

          this.router.navigate(['/']);
        },
        error: () => {
          this.loginErrorMessage = 'Email ou senha incorretos';
        },
      });
  }
}
