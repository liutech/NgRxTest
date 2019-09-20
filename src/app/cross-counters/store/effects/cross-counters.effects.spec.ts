import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CrossCountersEffects } from './cross-counters.effects';

describe('CrossCountersEffects', () => {
    let actions$: Observable<any>;
    let effects: CrossCountersEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [
                CrossCountersEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get<CrossCountersEffects>(CrossCountersEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
