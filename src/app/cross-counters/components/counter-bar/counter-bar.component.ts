import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector    : 'app-counter-bar',
    templateUrl : './counter-bar.component.html',
    styleUrls   : ['./counter-bar.component.scss']
})
export class CounterBarComponent implements OnInit {
    bar: number;

    constructor() {
    }

    ngOnInit() {
    }

}
