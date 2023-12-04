import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getRole().pipe(
    map(data => {
      const isAdmin = data.role === 'ADMIN';
      if (!isAdmin) {
        router.navigate(['/not-found']);
      }
      return isAdmin;
    })
  );
};
