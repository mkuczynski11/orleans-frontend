import { TestBed } from '@angular/core/testing';

import { AuctionsApiService } from './auctions-api.service';

describe('AuctionsApiService', () => {
  let service: AuctionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
