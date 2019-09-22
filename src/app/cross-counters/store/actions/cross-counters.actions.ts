import { createAction } from '@ngrx/store';

export enum ECrossCountersActions {
    change   = '[Cross Counters] Change',
    increase = '[Cross Counters] Increase foo',
    decrease = '[Cross Counters] Decrease bar',
    reset    = '[Cross Counters] Reset'
}

export const change   = createAction(ECrossCountersActions.change);
export const increase = createAction(ECrossCountersActions.increase);
export const decrease = createAction(ECrossCountersActions.decrease);
export const reset    = createAction(ECrossCountersActions.reset);

