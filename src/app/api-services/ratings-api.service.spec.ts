import { TestBed } from '@angular/core/testing';

import { RatingsApiService } from './ratings-api.service';

describe('RatingsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatingsApiService = TestBed.get(RatingsApiService);
    expect(service).toBeTruthy();
  });
});
