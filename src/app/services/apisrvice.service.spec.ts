import { TestBed } from '@angular/core/testing';

import { ApisrviceService } from './apisrvice.service';

describe('ApisrviceService', () => {
  let service: ApisrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
