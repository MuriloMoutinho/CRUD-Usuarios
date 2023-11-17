import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../../core/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-change-password.component.html',
  styleUrl: './form-change-password.component.scss',
})
export class FormChangePasswordComponent {
  changePasswordForm!: FormGroup;
  changePasswordErrorMessage?: string;
  showFormChangePassword: boolean = false;

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
    });
  }
  get oldPassword() {
    return this.changePasswordForm.get('oldPassword')!;
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword')!;
  }

  toggleFormChangePassword() {
    this.showFormChangePassword = !this.showFormChangePassword;
  }

  onSubmitChangePassword() {
    this.changePasswordErrorMessage = '';
    if (this.changePasswordForm.invalid) return;

    this.userService
      .editPassword(
        this.changePasswordForm.value.oldPassword,
        this.changePasswordForm.value.newPassword
      )
      .subscribe({
        next: () => {
          this.toastr.success('Senha alterada com sucesso!');
          this.toggleFormChangePassword();
        },
        error: (error) => {
          this.changePasswordErrorMessage = error.error.message;
        },
      });
  }
}
