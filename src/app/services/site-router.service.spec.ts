import { TestBed } from '@angular/core/testing';

import { SiteRouterService } from './site-router.service';

describe('SiteRouterService', () => {
  let service: SiteRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
