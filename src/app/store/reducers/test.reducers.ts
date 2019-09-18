import {createReducer, on} from '@ngrx/store';

import {initState} from '../state/test.state';
import {decrease, increase, reset} from '../actions/test.actions';


const reducer = createReducer(initState,
    on(increase, state => ({...state, x: state.x + 1})),
    on(decrease, state => ({...state, y: state.y - 1})),
    on(reset, () => (initState)),
);

export function testReducer(state, action) {
    return reducer(state, action);
}
