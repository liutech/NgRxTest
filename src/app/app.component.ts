import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './cross-counters/store/state/app.state';
import { selectCrossCountersState } from './cross-counters/store/selectors/cross-counters.selector';
import { selectControlButtonsState } from './cross-counters/store/selectors/control-buttons.selector';

@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : ['./app.component.scss']
})
export class AppComponent {
    title = 'NgRxTest';

    crossCounters$ = this.store
        .select(selectCrossCountersState);

    controlButtons$ = this.store
        .select(selectControlButtonsState);

    constructor(
        private store: Store<IAppState>
    ) {
    }

}
