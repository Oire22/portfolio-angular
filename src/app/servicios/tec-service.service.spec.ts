import { TestBed } from '@angular/core/testing';

import { TecServiceService } from './tec-service.service';

describe('TecServiceService', () => {
  let service: TecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
