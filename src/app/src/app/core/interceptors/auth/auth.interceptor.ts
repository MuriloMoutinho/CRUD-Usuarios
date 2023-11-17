import { HttpInterceptorFn } from '@angular/common/http';
import { LOCAL_KEYS } from '../../constants/local-keys';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router: Router = inject(Router);
  const cookieService: CookieService = inject(CookieService);

  const tokenJwt = cookieService.get(LOCAL_KEYS.TOKEN);

  if (!tokenJwt) {
    router.navigate(['/login']);
  }

  const newCloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${tokenJwt}`,
    },
  });

  return next(newCloneReq);
};
