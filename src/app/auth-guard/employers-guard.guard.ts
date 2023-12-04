import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const employersGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

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
