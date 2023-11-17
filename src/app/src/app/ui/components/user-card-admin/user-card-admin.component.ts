import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card-admin.component.html',
  styleUrl: './user-card-admin.component.scss',
})
export class UserCardAdminComponent {
  @Output()
  editUser = new EventEmitter<IUser>();

  @Output()
  deleteUser = new EventEmitter<number>();

  @Input()
  user!: IUser;

  getUserRole() {
    if(this.user.role === "ADMIN") return "Administrador";
    return "Usuário";
  }

  handleEdit(user: IUser) {
    this.editUser.emit(user);
  }

  handleDelete(id: number) {
    this.deleteUser.emit(id);
  }
}
