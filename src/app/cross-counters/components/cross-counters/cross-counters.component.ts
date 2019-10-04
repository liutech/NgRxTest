import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { ICrossCountersState } from '../../store/state/cross-counters.state';
import { reset } from '../../store/actions/cross-counters.actions';

@Component({
    selector    : 'app-cross-counters',
    templateUrl : './cross-counters.component.html',
    styleUrls   : ['./cross-counters.component.scss']
})
export class CrossCountersComponent {
    @Input() crossCounters: ICrossCountersState;

    constructor(
        private store: Store<IAppState>
    ) {
    }

    reset(): void {
        this.store
            .dispatch(reset());
    }

}
