import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrainMap } from './train-map';

describe('TrainMap', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: TrainMap = TestBed.get(TrainMap);
    expect(service).toBeTruthy();
  });
});
