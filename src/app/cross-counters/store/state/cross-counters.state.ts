export interface IAppState {
    crossCounters: ICrossCountersState;
}

export interface ICrossCountersState {
    foo: number;
    bar: number;
}

export const initialState: ICrossCountersState = {
    foo : -5,
    bar : 10
};
