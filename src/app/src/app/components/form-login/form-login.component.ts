import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {

  constructor(readonly authService: AuthService, readonly router: Router) {}

  loginRequest = {
    email: '',
    password: '',
  }
  loginErrorMessage?: string;

  onSubmit() {
    this.authService.login(this.loginRequest.email, this.loginRequest.password).subscribe(
      {
        next: (response) => {

          console.log(response)
          const tokenJWT = response;
         // localStorage.setItem('token', tokenJWT);
          this.router.navigateByUrl("/dashborad")
        },

        error: (error) => {
          console.log(error)
          this.loginErrorMessage = "Email ou senha incorretos";
        }

    });
      
  }
}
