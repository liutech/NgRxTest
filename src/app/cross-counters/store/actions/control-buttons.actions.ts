import { createAction, props } from '@ngrx/store';

export enum EControlButtonsActions {
    start = '[Control Buttons] Start',
    stop  = '[Control Buttons] Stop'
}

export const start = createAction(EControlButtonsActions.start, props<{ active: boolean }>());
export const stop  = createAction(EControlButtonsActions.stop, props<{ active: boolean }>());
