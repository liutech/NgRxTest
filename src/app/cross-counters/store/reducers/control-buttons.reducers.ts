import { createReducer, on, Action } from '@ngrx/store';

import { IControlButtonsState, initialControlButtonsState } from '../state/control-buttons.state';
import { start, stop } from '../actions/control-buttons.actions';

const ControlButtonsReducer = createReducer(initialControlButtonsState,
    on(start, state => ({ ...state, active : state.active = true })),
    on(stop, state => ({ ...state, active : state.active = false })),
);

export function controlButtonsReducer(state: IControlButtonsState | undefined, action: Action) {
    return ControlButtonsReducer(state, action);
}
