import { TestBed } from '@angular/core/testing';

import { CustomUtilService } from './custom-util.service';

describe('CustomUtilService', () => {
  let service: CustomUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
