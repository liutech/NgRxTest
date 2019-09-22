import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import { CounterBarComponent } from '../counter-bar/counter-bar.component';
import { ICrossCountersState } from '../../store/state/cross-counters.state';

@Component({
    selector    : 'app-counter-foo',
    templateUrl : './counter-foo.component.html',
    styleUrls   : ['./counter-foo.component.scss']
})
export class CounterFooComponent implements AfterViewInit, OnChanges {
    @Input() fooBar: ICrossCountersState;

    @ViewChild(CounterBarComponent, { static : false }) counterBarComponent: CounterBarComponent;

    ngAfterViewInit() {
        setTimeout(() => this.counterBarComponent.bar = this.fooBar.bar, 0);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.fooBar.currentValue && this.counterBarComponent) {
            this.counterBarComponent.bar = changes.fooBar.currentValue.bar;
        }
    }

}
