import {createReducer, on, Action} from '@ngrx/store';

import {ICrossCountersState, initialState} from '../state/cross-counters.state';
import * as CrossCountersActions from '../actions/cross-counters.actions';

export const crossCountersFeatureKey = 'crossCounters';

const crossCounterReducer = createReducer(initialState,
    on(CrossCountersActions.increase, state => ({...state, foo: state.foo + 1})),
    on(CrossCountersActions.decrease, state => ({...state, bar: state.bar - 1})),
    on(CrossCountersActions.reset, () => (initialState)),
);

export function reducer(state: ICrossCountersState | undefined, action: Action) {
    return crossCounterReducer(state, action);
}
