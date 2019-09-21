import { Component } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';

@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : ['./app.component.scss']
})
export class AppComponent {
    title = 'NgRxTest';

    private intervalSubscription: Subscription;

    interval$: Observable<any> = interval(1000);

    start(): void {
        this.intervalSubscription = this.interval$
            .subscribe(() => console.log('pip'));
    }

    stop(): void {
        this.intervalSubscription
            .unsubscribe();
    }

}
