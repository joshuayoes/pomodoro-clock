/* eslint-disable no-undef */
import {
  // eslint-disable-next-line max-len
  INCREASE_BREAK_LENGTH, DECREASE_BREAK_LENGTH, INCREASE_SESSION_LENGTH, DECREASE_SESSION_LENGTH, DECREMENT_TIMER,
} from '../../actions';
import timerReducer, { intialState } from '../timerReducer';

describe('Timer Reducer', () => {
  it('Undefined types should return default state', () => {
    const newState = timerReducer(undefined, { type: 'SOMETHING_RANDOM' });
    expect(newState).toEqual(intialState);
  });

  it('Dispatching INCREASE_BREAK_LENGTH increments default breakLength state from 5 to 6', () => {
    const newState = timerReducer(undefined, {
      type: INCREASE_BREAK_LENGTH,
    });

    expect(newState).toEqual({
      ...intialState,
      breakLength: 6,
    });
  });

  it('Dispatching DECREASE_BREAK_LENGTH decrements default breakLength state from 5 to 4', () => {
    const newState = timerReducer(undefined, {
      type: DECREASE_BREAK_LENGTH,
    });

    expect(newState).toEqual({
      ...intialState,
      breakLength: 4,
    });
  });

  it('Dispatching INCREASE_SESSION_LENGTH increments default sessionLength state from 25 to 26', () => {
    const newState = timerReducer(undefined, {
      type: INCREASE_SESSION_LENGTH,
    });

    expect(newState).toEqual({
      ...intialState,
      sessionLength: 26,
    });
  });

  it('Dispatching DECREASE_SESSION_LENGTH decrements default sessionLength state from 25 to 24', () => {
    const newState = timerReducer(undefined, {
      type: DECREASE_SESSION_LENGTH,
    });

    expect(newState).toEqual({
      ...intialState,
      sessionLength: 24,
    });
  });

  it('Dispatching DECREMENT_TIMER decrements default timer state from 1500 to 1499', () => {
    const newState = timerReducer(undefined, {
      type: DECREMENT_TIMER,
    });

    expect(newState).toEqual({
      ...intialState,
      timer: 1499,
    });
  });
});
