import {createAction} from '@ngrx/store';

export enum ECrossCountersActions {
    increase = '[Test] Increase',
    decrease = '[Test] Decrease',
    reset = '[Test] Reset',
    start = '[Test] Start',
    change = '[Test] Change',
    stop = '[Test] Stop'
}

export const increase = createAction(ECrossCountersActions.increase);
export const decrease = createAction(ECrossCountersActions.decrease);
export const reset = createAction(ECrossCountersActions.reset);
export const start = createAction(ECrossCountersActions.start);
export const change = createAction(ECrossCountersActions.change);
export const stop = createAction(ECrossCountersActions.stop);
