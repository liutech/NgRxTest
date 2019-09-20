import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as CrossCountersActions from '../actions/cross-counters.actions';

@Injectable()
export class CrossCountersEffects {
    loadMovies$ = createEffect(() => this.actions$
        .pipe(
            ofType(CrossCountersActions.change)
        )
    );

    constructor(
        private actions$: Actions
    ) {
    }
}
