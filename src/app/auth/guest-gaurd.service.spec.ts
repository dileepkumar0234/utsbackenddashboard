import { TestBed } from '@angular/core/testing';

import { GuestGaurdService } from './guest-gaurd.service';

describe('GuestGaurdService', () => {
  let service: GuestGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
