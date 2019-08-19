import { TestBed, fakeAsync, getTestBed, flushMicrotasks } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TrainMap } from './train-map';
import { TrainMapApiService } from './train-map-api.service';
import { MAPS } from './train-map-api.service.spec';
import { TrainMapStore, TrainMapState, TrainMapActions } from './train-map.store';


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
    facade = new TrainMap(service, store);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should return ITrainMap[] from state', fakeAsync(() => {

    store.setState({
      maps: MAPS,
      selected: MAPS[1]
    });

    flushMicrotasks();

    facade.state().subscribe((state: TrainMapState) => {
      expect(state.maps.length).toBe(2);
    });

  }));

  it('should select ITrainMap from state', fakeAsync(() => {

    store.setState({
      maps: MAPS,
      selected: MAPS[1]
    });

    flushMicrotasks();

    facade.select({
      id: '1'
    });

    facade.state().subscribe((state: TrainMapState) => {
      expect(state.selected).toEqual(MAPS[1]);
    });

  }));

});
