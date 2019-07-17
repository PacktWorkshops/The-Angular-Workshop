import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TrainMapStore, TrainMapActions } from './map.store';
import { TrainMapService } from './map.service';

@Injectable()
export class TrainMap implements OnDestroy {

    private readonly _destroy = new Subject<void>();

    constructor(public store: TrainMapStore,
                public service: TrainMapService) {}

    fetch() {
        this.service.fetchMap()
        .pipe(takeUntil(this._destroy))
        .subscribe((res) => {
            this.store.actions.emit({ type: TrainMapActions.REPLACE, payload: res });
        });
    }

    getState() {
       return this.store.state$;
    }

    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }

}