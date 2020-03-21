/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { TimerState } from './reducers/timerReducer';

// Make app store typesafe for connected components
export interface AppStore {
  timer: TimerState;
}

const preloadedState = {};

const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
