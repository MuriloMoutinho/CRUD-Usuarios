import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,

  ],
  providers: [AuthService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login';
}
