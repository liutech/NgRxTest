import { createReducer, on, Action } from '@ngrx/store';

import { ICrossCountersState, initialState } from '../state/cross-counters.state';
import { decrease, increase, reset } from '../actions/cross-counters.actions';

export const crossCountersFeatureKey = 'crossCounters';

const crossCounterReducer = createReducer(initialState,
    on(increase, state => ({ ...state, foo : state.foo + 1 })),
    on(decrease, state => ({ ...state, bar : state.bar - 1 })),
    on(reset, () => (initialState)),
);

export function reducer(state: ICrossCountersState | undefined, action: Action) {
    return crossCounterReducer(state, action);
}
