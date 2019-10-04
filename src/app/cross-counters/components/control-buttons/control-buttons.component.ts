import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { start, stop } from '../../store/actions/control-buttons.actions';

@Component({
    selector    : 'app-control-buttons',
    templateUrl : './control-buttons.component.html',
    styleUrls   : ['./control-buttons.component.scss']
})
export class ControlButtonsComponent {
    @Input() active: boolean;

    constructor(
        private store: Store<IAppState>
    ) {
    }

    start(): void {
        this.store
            .dispatch(start({ active : true }));
    }

    stop(): void {
        this.store
            .dispatch(stop({ active : false }));
    }

}
