import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfiguration } from '../../../../environments/environment.development';
import { LOCAL_KEYS } from '../../constants/local-keys';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(page: number = 0, email: string = ''): Observable<IPage<IUser>> {
    return this.http.get<IPage<IUser>>(`${ApiConfiguration.path}/users/list`, {
      params: {
        email: email,
        page: page,
      },
    });
  }

  getProfile(): Observable<IUser> {
    return this.http.get<IUser>(`${ApiConfiguration.path}/users`);
  }

  getIsLogged(): Observable<boolean> {
    return this.http.get<boolean>(`${ApiConfiguration.path}/users/check`);
  }

  postUser(email: string, password: string, role: string): Observable<IUser> {
    return this.http.post<IUser>(`${ApiConfiguration.path}/users`, {
      email: email,
      password: password,
      role: role,
    });
  }

  editPassword(oldPassword: string, newPassword: string): Observable<IUser> {
    return this.http.patch<IUser>(`${ApiConfiguration.path}/users`, {
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  }

  editUser(
    id: number,
    email: string,
    password: string,
    role: string
  ): Observable<IUser> {
    return this.http.patch<IUser>(`${ApiConfiguration.path}/users/` + id, {
      email: email,
      password: password,
      role: role,
    });
  }

  deleteUser(id: number) {
    return this.http.delete(`${ApiConfiguration.path}/users/` + id);
  }
}
