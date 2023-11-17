import { Component, EventEmitter, Output } from '@angular/core';
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
  selector: 'app-modal-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal-add-user.component.html',
})
export class ModalAddUserComponent {
  showModalAddUser = false;
  userRoles = userRoles;

  formCreateUser!: FormGroup;
  createUserErrorMessage?: string;

  @Output()
  closeModal = new EventEmitter();

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.formCreateUser = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }
  get email() {
    return this.formCreateUser.get('email')!;
  }
  get password() {
    return this.formCreateUser.get('password')!;
  }
  get role() {
    return this.formCreateUser.get('role')!;
  }

  closeModalAddUser() {
    this.closeModal.emit();
  }

  onSubmitCreateUser() {
    if (this.formCreateUser.invalid) return;

    this.userService
      .postUser(
        this.formCreateUser.value.email,
        this.formCreateUser.value.password,
        this.formCreateUser.value.role
      )
      .subscribe({
        next: () => {
          this.toastr.success('Usuário criado com sucesso!');
          this.closeModalAddUser();
        },
        error: (error) => {
          this.createUserErrorMessage = error.error.message;
        },
      });
  }
}
