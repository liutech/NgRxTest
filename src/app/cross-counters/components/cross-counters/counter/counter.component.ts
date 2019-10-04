import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector    : 'app-counter',
    templateUrl : './counter.component.html',
    styleUrls   : ['./counter.component.scss']
})
export class CounterComponent implements OnChanges {
    @Input() value: number;

    class: string;

    ngOnChanges(changes: SimpleChanges): void {
        this.value = changes.value.currentValue;
        this.class = this.value < 0
            ? 'red' : this.value > 0
                ? 'blue' : 'black';
    }

}
