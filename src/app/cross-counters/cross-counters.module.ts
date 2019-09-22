import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { crossCountersFeatureKey, reducer } from './store/reducers/cross-counters.reducers';
import { CrossCountersEffects } from './store/effects/cross-counters.effects';
import { CounterFooComponent } from './components/counter-foo/counter-foo.component';
import { CounterBarComponent } from './components/counter-bar/counter-bar.component';

@NgModule({
    declarations : [
        CounterFooComponent,
        CounterBarComponent
    ],
    exports      : [
        CounterFooComponent,
        CounterBarComponent
    ],
    imports      : [
        CommonModule,
        StoreModule.forFeature(crossCountersFeatureKey, reducer),
        EffectsModule.forFeature([CrossCountersEffects])
    ]
})
export class CrossCountersModule {
}
