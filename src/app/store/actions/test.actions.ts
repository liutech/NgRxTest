import {createAction} from '@ngrx/store';

export enum ETestActions {
  change = '[Test] Change',
  increase = '[Test] Increase',
  decrease = '[Test] Decrease',
  stop = '[Test] Stop',
  reset = '[Test] Reset'
}

export const change = createAction(ETestActions.change);
export const increase = createAction(ETestActions.increase);
export const decrease = createAction(ETestActions.decrease);
export const stop = createAction(ETestActions.stop);
export const reset = createAction(ETestActions.reset);
