import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../../core/services/user/user.service';
import { userRoles } from '../../../../core/constants/user-role-key';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal-edit-user.component.html'
})
export class ModalEditUserComponent {
  @Input()
  user?: IUser;

  @Output()
  closeModal = new EventEmitter();

  userRoles = userRoles;
  editUserErrorMessage?: string;

  formEditUser!: FormGroup;

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.formEditUser = new FormGroup({
      email: new FormControl(this.user?.email, [Validators.required]),
      password: new FormControl(''),
      role: new FormControl(this.user?.role, [Validators.required]),
    });
  }
  get email() {
    return this.formEditUser.get('email')!;
  }
  get password() {
    return this.formEditUser.get('password')!;
  }
  get role() {
    return this.formEditUser.get('role')!;
  }

  handleCloseModal() {
    this.closeModal.emit();
  }

  onSubmitEditUser() {
    if (this.formEditUser.invalid) return;

    if (this.user) {
      this.userService
        .editUser(
          this.user.id,
          this.formEditUser.value.email,
          this.formEditUser.value.password,
          this.formEditUser.value.role
        )
        .subscribe({
          next: () => {
            this.toastr.success('Usuário editado com sucesso!');
            this.closeModal.emit();
          },
          error: (error) => {
            this.editUserErrorMessage = error.error.message;
          },
        });
    }
  }
}
