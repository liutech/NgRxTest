import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import * as CrossCounterReducer from './store/reducers/cross-counters.reducers';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(CrossCounterReducer.crossCountersFeatureKey, CrossCounterReducer.reducer)
    ]
})
export class CrossCountersModule {
}
