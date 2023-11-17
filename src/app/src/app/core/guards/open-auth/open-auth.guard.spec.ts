import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { openAuthGuard } from './open-auth.guard';

describe('openAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => openAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
