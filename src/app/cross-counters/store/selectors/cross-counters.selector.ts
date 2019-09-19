import {createSelector, createFeatureSelector} from '@ngrx/store';

import {IAppState, ICrossCountersState} from '../state/cross-counters.state';
import {crossCountersFeatureKey} from '../reducers/cross-counters.reducers';

export const selectCrossCounters = createFeatureSelector<IAppState, ICrossCountersState>(crossCountersFeatureKey);

export const selectCrossCountersFoo = createSelector(
    selectCrossCounters,
    (state: ICrossCountersState) => state.foo
);

export const selectCrossCountersBar = createSelector(
    selectCrossCounters,
    (state: ICrossCountersState) => state.bar
);
