import { TestBed } from '@angular/core/testing';

import { VerlagserviceService } from './verlagservice.service';

describe('VerlagserviceService', () => {
  let service: VerlagserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerlagserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
