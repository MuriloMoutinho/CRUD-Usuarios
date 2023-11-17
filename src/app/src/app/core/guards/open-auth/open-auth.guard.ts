import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { LOCAL_KEYS } from '../../constants/local-keys';

export const openAuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const cookieService: CookieService = inject(CookieService);

  const tokenJwt = cookieService.get(LOCAL_KEYS.TOKEN);
  if (tokenJwt) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
