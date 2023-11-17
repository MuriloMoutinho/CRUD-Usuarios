import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user/user.service';
import { FormChangePasswordComponent } from './components/form-change-password/form-change-password.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormChangePasswordComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user!: IUser;

  constructor(private userService: UserService) {
    this.userService
      .getProfile()
      .subscribe((response) => (this.user = response));
  }


}
