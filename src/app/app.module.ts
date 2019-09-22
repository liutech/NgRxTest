import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CrossCountersModule } from './cross-counters/cross-counters.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        CrossCountersModule
    ],
    providers    : [],
    bootstrap    : [
        AppComponent
    ]
})
export class AppModule {
}
