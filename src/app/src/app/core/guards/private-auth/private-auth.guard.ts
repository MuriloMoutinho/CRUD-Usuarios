import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LOCAL_KEYS } from '../../constants/local-keys';
import { CookieService } from 'ngx-cookie-service';

export const privateAuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const cookieService: CookieService = inject(CookieService);

  const tokenJwt = cookieService.get(LOCAL_KEYS.TOKEN);
  if (!tokenJwt) {
    return false;
    router.navigate(['/login']);
  }
  return true;
};
