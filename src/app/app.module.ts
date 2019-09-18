import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {testReducer} from './store/reducers/test.reducers';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({test: testReducer})
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
