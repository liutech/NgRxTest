import { createReducer, on, Action } from '@ngrx/store';

import { ICrossCountersState, initialCrossCountersState } from '../state/cross-counters.state';
import { decrease, increase, reset } from '../actions/cross-counters.actions';



const CrossCountersReducer = createReducer(initialCrossCountersState,
    on(increase, state => ({ ...state, foo : state.foo + 1 })),
    on(decrease, state => ({ ...state, bar : state.bar - 1 })),
    on(reset, () => (initialCrossCountersState))
);

export function crossCountersReducer(state: ICrossCountersState | undefined, action: Action) {
    return CrossCountersReducer(state, action);
}
