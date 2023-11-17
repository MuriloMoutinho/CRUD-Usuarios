import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './components/form-login/form-login.component';

@Component({
  standalone: true,
  imports: [CommonModule, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
