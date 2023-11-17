import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOCAL_KEYS } from '../../../core/constants/local-keys';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  roleUser = "";
  isAdmin = false;

  constructor(private cookieService: CookieService, private router: Router) {
    const roleStorage = this.cookieService.get(LOCAL_KEYS.ROLE);

    if (roleStorage === "ADMIN") {
      this.roleUser = "Adiministrador";
      this.isAdmin = true;
    } else {
      this.roleUser = "Usuário";
    }
  }

  logoutSession() {
    this.cookieService.delete(LOCAL_KEYS.TOKEN);
    this.cookieService.delete(LOCAL_KEYS.ROLE);
    this.router.navigate(['/login']);
  }
}
