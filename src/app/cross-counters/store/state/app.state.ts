import { ICrossCountersState } from './cross-counters.state';
import { IControlButtonsState } from './control-buttons.state';

export const crossCountersFeatureKey  = 'crossCounters';
export const controlButtonsFeatureKey = 'controlButtons';

export interface IAppState {
    crossCounters: ICrossCountersState;
    controlButtons: IControlButtonsState;
}
