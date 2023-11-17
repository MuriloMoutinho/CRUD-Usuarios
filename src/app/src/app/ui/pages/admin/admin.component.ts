import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { UserService } from '../../../core/services/user/user.service';
import { FormsModule } from '@angular/forms';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { ModalEditUserComponent } from './modal-edit-user/modal-edit-user.component';
import { UserCardAdminComponent } from '../../components/user-card-admin/user-card-admin.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    PaginationComponent,
    ModalAddUserComponent,
    ModalEditUserComponent,
    UserCardAdminComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  pageUsers!: IPage<IUser>;
  searchTearm: string = '';
  pageNumber: number = 0;

  userChoseEdit?: IUser;

  showModalAddUser = false;

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.userService
      .getAll()
      .subscribe((response) => (this.pageUsers = response));
  }

  fetchUsers() {
    this.userService
      .getAll(this.pageNumber, this.searchTearm)
      .subscribe((response) => (this.pageUsers = response));
  }

  choseUserEdit(user: IUser) {
    this.userChoseEdit = user;
  }

  onDeleteUser(idUser: number) {
    console.log(idUser);
    this.userService.deleteUser(idUser).subscribe({
      next: () => {
        this.toastr.success('Usuário deletado com sucesso! ');
        this.fetchUsers();
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }

  removeChoseUserEdit() {
    this.userChoseEdit = undefined;
    this.fetchUsers();
  }

  togleModalAddUser() {
    this.showModalAddUser = !this.showModalAddUser;
    this.fetchUsers();
  }
  onNextPage() {
    this.pageNumber++;
    this.fetchUsers();
  }
  onPrevPage() {
    this.pageNumber--;
    this.fetchUsers();
  }
}
