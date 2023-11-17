import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user/user.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    PaginationComponent,
    UserCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pageUsers!: IPage<IUser>;

  searchTearm: string = '';
  pageNumber: number = 0;

  constructor(private userService: UserService) {
    this.userService
      .getAll()
      .subscribe((response) => (this.pageUsers = response));
  }

  fetchUsers() {
    this.userService
      .getAll(this.pageNumber, this.searchTearm)
      .subscribe((response) => (this.pageUsers = response));
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
