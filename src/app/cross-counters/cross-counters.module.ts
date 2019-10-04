import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { crossCountersFeatureKey, controlButtonsFeatureKey } from './store/state/app.state';

import { CrossCountersComponent } from './components/cross-counters/cross-counters.component';
import { CounterComponent } from './components/cross-counters/counter/counter.component';
import { ControlButtonsComponent } from './components/control-buttons/control-buttons.component';

import { crossCountersReducer } from './store/reducers/cross-counters.reducers';
import { controlButtonsReducer } from './store/reducers/control-buttons.reducers';

import { CrossCountersEffects } from './store/effects/cross-counters.effects';
import { ControlButtonsEffects } from './store/effects/control-buttons.effects';

@NgModule({
    declarations : [
        CrossCountersComponent,
        CounterComponent,
        ControlButtonsComponent
    ],
    exports      : [
        CrossCountersComponent,
        CounterComponent,
        ControlButtonsComponent
    ],
    imports      : [
        CommonModule,
        StoreModule.forFeature(crossCountersFeatureKey, crossCountersReducer),
        StoreModule.forFeature(controlButtonsFeatureKey, controlButtonsReducer),
        EffectsModule.forFeature([CrossCountersEffects, ControlButtonsEffects])
    ]
})
export class CrossCountersModule {
}
