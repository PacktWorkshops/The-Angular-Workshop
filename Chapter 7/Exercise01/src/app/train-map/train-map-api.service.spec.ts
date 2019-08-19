import { TestBed, getTestBed, async } from '@angular/core/testing';

import { TrainMapApiService } from './train-map-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TrainMapApiService', () => {
  let service: TrainMapApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  })));
  beforeEach(() => {
    service = TestBed.get(TrainMapApiService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
