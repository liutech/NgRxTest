import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';

import { change, decrease, increase } from '../actions/cross-counters.actions';

@Injectable()
export class CrossCountersEffects {
    crossCountersEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(change),
            mergeMap(() => [increase(), decrease(), decrease()])
        )
    );

    constructor(
        private actions$: Actions
    ) {
    }
}
