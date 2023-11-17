import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  providers: [AuthService, UserService, CookieService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login';
}
