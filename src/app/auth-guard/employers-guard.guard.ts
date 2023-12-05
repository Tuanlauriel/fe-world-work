import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { JwtService } from '../services/jwt.service';

export const employersGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const jwtService = inject(JwtService);
  const router = inject(Router);

  if (!jwtService.isLogged()) {
    return router.navigate(['/employer-signup']);
  }

  return authService.getRole().pipe(
    map(data => {
      const isEmployer = data.role === 'EMPLOYERS';
      if (!isEmployer) {
        router.navigate(['/not-found']);
      }
      return isEmployer;
    })
  );
};
