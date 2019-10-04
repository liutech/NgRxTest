import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IAppState, controlButtonsFeatureKey } from '../state/app.state';
import { IControlButtonsState } from '../state/control-buttons.state';

export const selectControlButtonsFeature = createFeatureSelector<IAppState, IControlButtonsState>(controlButtonsFeatureKey);

export const selectControlButtonsState = createSelector(
    selectControlButtonsFeature,
    (state: IControlButtonsState) => state.active
);
