import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { interval, Observable, empty } from 'rxjs';
import { map, mapTo, switchMap } from 'rxjs/operators';

import { change } from '../actions/cross-counters.actions';
import { start, stop } from '../actions/control-buttons.actions';

@Injectable()
export class ControlButtonsEffects {
    interval$: Observable<any> = interval(1000)
        .pipe(
            mapTo(change())
        );

    controlButtonsEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(start, stop),
            map(action => action.active),
            switchMap(active => (active ? this.interval$ : empty()))
        )
    );

    constructor(
        private actions$: Actions
    ) {
    }
}
