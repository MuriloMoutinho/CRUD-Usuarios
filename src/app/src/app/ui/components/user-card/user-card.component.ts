import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input()
  user!: IUser;

  getUserRole() {
    if(this.user.role === "ADMIN") return "Administrador";
    return "Usuário";
  }

}
