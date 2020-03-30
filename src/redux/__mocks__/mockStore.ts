import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

// internal dependencies
import { AppStore } from '../store';
import { TimerAction } from '../reducers/timerReducer';

const extraThunkArgument = { foo: 'bar' };
const middlewares = [thunk.withExtraArgument(extraThunkArgument)];

export default configureMockStore<
AppStore,
TimerAction,
ThunkDispatch<AppStore, typeof extraThunkArgument, TimerAction>
>(middlewares);
