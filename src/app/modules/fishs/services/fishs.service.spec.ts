import { TestBed } from '@angular/core/testing';

import { FishsService } from './fishs.service';

describe('FishsService', () => {
  let service: FishsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
