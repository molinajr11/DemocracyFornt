import { TestBed } from '@angular/core/testing';

import { VotoServiceService } from './voto-service.service';

describe('VotoServiceService', () => {
  let service: VotoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
