import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfiguration } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${ApiConfiguration.path}/auth/login`, {
      "email": email,
      "password": password,
    });
  }
}
