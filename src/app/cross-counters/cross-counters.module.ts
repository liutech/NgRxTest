import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as CrossCounterReducer from './store/reducers/cross-counters.reducers';
import { CrossCountersEffects } from './store/effects/cross-counters.effects';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(CrossCounterReducer.crossCountersFeatureKey, CrossCounterReducer.reducer),
        EffectsModule.forFeature([CrossCountersEffects])
    ]
})
export class CrossCountersModule {
}
