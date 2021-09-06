import { TestBed } from '@angular/core/testing';

import { SocialBarService } from './social-bar.service';

describe('SocialBarService', () => {
  let service: SocialBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
