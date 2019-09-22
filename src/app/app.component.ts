import { Component } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { IAppState } from './cross-counters/store/state/cross-counters.state';
import { change, reset } from './cross-counters/store/actions/cross-counters.actions';
import { selectCrossCountersFooBar } from './cross-counters/store/selectors/cross-counters.selector';

@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : ['./app.component.scss']
})
export class AppComponent {
    title = 'NgRxTest';

    private intervalSubscription: Subscription;
    private active: boolean;

    interval$: Observable<any> = interval(1000);

    fooBar$ = this.store
        .pipe(
            select(selectCrossCountersFooBar)
        );

    constructor(
        private store: Store<IAppState>
    ) {
    }

    start(): void {
        this.active               = true;
        this.intervalSubscription = this.interval$
            .subscribe(() => this.store.dispatch(change()));
    }

    stop(): void {
        console.log(this.intervalSubscription);
        this.intervalSubscription
            .unsubscribe();
        this.active = false;
    }

    reset(): void {
        this.store.dispatch(reset());
    }

}
