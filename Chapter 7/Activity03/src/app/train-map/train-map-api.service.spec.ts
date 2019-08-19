import { TestBed, getTestBed, async } from '@angular/core/testing';

import { TrainMapApiService, BASE_API_PATH } from './train-map-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ITrainMap } from './train-map.interface';

export const MAPS: ITrainMap[] = [
  {
    name: 'Blue',
    id: '0',
    length: 20,
    capacity: 1200,
    direction: 'East/West',
    items: [
      {
        location: 'Apollo Ave',
        distance: 0,
        id: 'cjz3q51eq0000mfvl288j83kh',
        tripCompletion: 0
      },
      {
        location: 'Oaks Bottom',
        distance: 3,
        id: 'cjz3q51eq0001mfvl6g6qdzxs',
        tripCompletion: 15
      },
      {
        location: 'Developer Dr.',
        distance: 5,
        id: 'cjz3q51eq0002mfvle4ih0i16',
        tripCompletion: 25
      },
      {
        location: 'Art Center',
        distance: 6,
        id: 'cjz3q51eq0003mfvl8ddm3iyf',
        tripCompletion: 30
      },
      {
        location: 'Main St.',
        distance: 6.5,
        id: 'cjz3q51eq0004mfvl9tf72uo3',
        tripCompletion: 32.5
      },
      {
        location: 'Pioneer Square',
        distance: 10,
        id: 'cjz3q51eq0005mfvl15n94pi7',
        tripCompletion: 50
      },
      {
        location: 'Hamilton Way',
        distance: 12,
        id: 'cjz3q51eq0006mfvlfdqc32xz',
        tripCompletion: 60
      },
      {
        location: 'Science Center',
        distance: 13,
        id: 'cjz3q51eq0007mfvl4vd818f4',
        tripCompletion: 65
      },
      {
        location: 'Osage Ave.',
        distance: 14,
        id: 'cjz3q51eq0008mfvlhoji707g',
        tripCompletion: 70
      },
      {
        location: 'Fiji Way',
        distance: 14.5,
        id: 'cjz3q51eq0009mfvlh602gprc',
        tripCompletion: 72.5
      },
      {
        location: 'Columbia Cirle',
        distance: 15,
        id: 'cjz3q51eq000amfvlglrkg2l9',
        tripCompletion: 75
      },
      {
        location: 'Division St.',
        distance: 16,
        id: 'cjz3q51eq000bmfvl84jmf7er',
        tripCompletion: 80
      },
      {
        location: 'College St.',
        distance: 18,
        id: 'cjz3q51eq000cmfvlcadrfujd',
        tripCompletion: 90
      },
      {
        location: 'Epic Ave.',
        distance: 20,
        id: 'cjz3q51eq000dmfvlb6jrgjhf',
        tripCompletion: 100
      }
    ]
  },
  {
    name: 'Red',
    id: '1',
    length: 32,
    capacity: 1600,
    direction: 'North/South',
    items: [
      {
        location: 'Tibbets Ave.',
        distance: 0,
        id: 'cjz3q51eq000emfvlhnncck7a',
        tripCompletion: 0
      },
      {
        location: 'Wolf Rd.',
        distance: 1,
        id: 'cjz3q51eq000fmfvlfvj1as0j',
        tripCompletion: 3.125
      },
      {
        location: 'La Cienaga Blvd.',
        distance: 2.5,
        id: 'cjz3q51er000gmfvlhqiyb6n0',
        tripCompletion: 7.8125
      },
      {
        location: 'Orbital Ave.',
        distance: 4,
        id: 'cjz3q51er000hmfvl5p6719sd',
        tripCompletion: 12.5
      },
      {
        location: 'Main St.',
        distance: 7.5,
        id: 'cjz3q51er000imfvlhr7s0eh4',
        tripCompletion: 23.4375
      },
      {
        location: 'Pioneer Square',
        distance: 10,
        id: 'cjz3q51er000jmfvlcfst3he8',
        tripCompletion: 31.25
      },
      {
        location: 'Charles Pl.',
        distance: 11,
        id: 'cjz3q51er000kmfvl1nrp56nl',
        tripCompletion: 34.375
      },
      {
        location: 'River Rd.',
        distance: 12.5,
        id: 'cjz3q51er000lmfvl3wks84m7',
        tripCompletion: 39.0625
      },
      {
        location: 'Timonium Ave.',
        distance: 13.25,
        id: 'cjz3q51er000mmfvl2ep81s65',
        tripCompletion: 41.40625
      },
      {
        location: 'Martin Luther King Blvd.',
        distance: 14.5,
        id: 'cjz3q51er000nmfvl1o50fxax',
        tripCompletion: 45.3125
      },
      {
        location: 'Tacoma Pl.',
        distance: 17,
        id: 'cjz3q51er000omfvlgfdm7f6y',
        tripCompletion: 53.125
      },
      {
        location: 'Hamilton Way',
        distance: 18.5,
        id: 'cjz3q51er000pmfvlht4w21bj',
        tripCompletion: 57.8125
      },
      {
        location: 'Hawking Blvd.',
        distance: 20,
        id: 'cjz3q51er000qmfvl339ec8az',
        tripCompletion: 62.5
      },
      {
        location: 'Stadium Way',
        distance: 22.5,
        id: 'cjz3q51er000rmfvl2gb7adgk',
        tripCompletion: 70.3125
      },
      {
        location: 'Forest Park',
        distance: 25.5,
        id: 'cjz3q51er000smfvl6e4ef84a',
        tripCompletion: 79.6875
      },
      {
        location: 'Dewey St.',
        distance: 32,
        id: 'cjz3q51er000tmfvl4eamcl33',
        tripCompletion: 100
      }
    ]
  }
];

describe('TrainMapApiService', () => {
  let req;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: TrainMapApiService;
  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  })));

  beforeEach(() => {
    service = TestBed.get(TrainMapApiService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<ITrainMap[]>', () => {
    const maps: ITrainMap[] = MAPS;

    service.fetchMaps().subscribe((trains: ITrainMap[]) => {
      expect(trains.length).toBe(2);
      expect(trains).toEqual(maps);
    });

    req = httpMock.expectOne(`${BASE_API_PATH}/map`);
    expect(req.request.method).toBe('GET');
    req.flush(maps);
  });

});
