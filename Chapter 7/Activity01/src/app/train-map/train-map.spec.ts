import { TestBed, tick, fakeAsync, getTestBed, flushMicrotasks, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TrainMap } from './train-map';
import { TrainMapApiService } from './train-map-api.service';
import { TrainMapStore } from './train-map.store';


describe('TrainMap', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: TrainMapApiService;
  let store: TrainMapStore;
  let facade: TrainMap;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [TrainMapApiService,
                TrainMapStore]
  }));

  beforeEach(() => {
    store = TestBed.get(TrainMapStore);
    service = TestBed.get(TrainMapApiService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    facade = new TrainMap(service);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });


});
