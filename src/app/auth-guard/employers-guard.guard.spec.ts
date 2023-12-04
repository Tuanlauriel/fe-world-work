import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { employersGuardGuard } from './employers-guard.guard';

describe('employersGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => employersGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
