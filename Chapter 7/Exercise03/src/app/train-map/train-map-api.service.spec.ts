import { TestBed } from '@angular/core/testing';

import { TrainMapApiService } from './train-map-api.service';

describe('TrainMapApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainMapApiService = TestBed.get(TrainMapApiService);
    expect(service).toBeTruthy();
  });
});
