import { TestBed } from '@angular/core/testing';

import { TrainMapService } from './map.service';

describe('MapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainMapService = TestBed.get(TrainMapService);
    expect(service).toBeTruthy();
  });
});
