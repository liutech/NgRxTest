import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IAppState, crossCountersFeatureKey } from '../state/app.state';
import { ICrossCountersState } from '../state/cross-counters.state';

export const selectCrossCountersFeature = createFeatureSelector<IAppState, ICrossCountersState>(crossCountersFeatureKey);

export const selectCrossCountersState = createSelector(
    selectCrossCountersFeature,
    (state: ICrossCountersState) => state
);
