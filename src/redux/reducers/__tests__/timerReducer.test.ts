/* eslint-disable no-undef */
import {
  INCREASE_BREAK_LENGTH,
  DECREASE_BREAK_LENGTH,
  INCREASE_SESSION_LENGTH,
  DECREASE_SESSION_LENGTH,
  BEGIN_COUNTDOWN,
} from '../../actions';
import {
  pauseCountdown, tick, resetTimer,
} from '../../actionCreators';
import timerReducer, { intialState } from '../timerReducer';

describe('Timer Reducer', () => {
  it('Undefined types should return default state', () => {
    const newState = timerReducer(undefined, { type: 'SOMETHING_RANDOM' });
    expect(newState).toEqual(intialState);
  });

  it('Dispatching BEGIN_COUNTDOWN should change isPlaying to true', () => {
    const newState = timerReducer(undefined, { type: BEGIN_COUNTDOWN });
    expect(newState).toEqual({
      ...intialState,
      isPlaying: true,
    });
  });

  it('Dispatching PAUSE_COUNTDOWN should return isPlaying is false', () => {
    const newState = timerReducer(undefined, pauseCountdown());

    expect(newState).toEqual({
      ...intialState,
      isPlaying: false,
    });
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
      timer: 1560,
    });
  });

  it('Dispatching DECREASE_SESSION_LENGTH decrements default sessionLength state from 25 to 24', () => {
    const newState = timerReducer(undefined, {
      type: DECREASE_SESSION_LENGTH,
    });

    expect(newState).toEqual({
      ...intialState,
      sessionLength: 24,
      timer: 1440,
    });
  });

  it('Dispatching TICK with default state should decrement timer by 1', () => {
    const newState = timerReducer(undefined, tick());

    expect(newState).toEqual({
      ...intialState,
      timer: intialState.timer - 1,
    });
  });

  it('Dispatching TICK where timer = 0 and currentTimerType = "Break" should switch to new session timer', () => {
    const testingState = {
      ...intialState,
      timer: 0,
      currentTimerType: 'Break',
    };

    const newState = timerReducer(testingState, tick());

    expect(newState).toEqual({
      ...intialState,
      timer: (intialState.sessionLength) * 60,
      currentTimerType: 'Session',
    });
  });

  it('Dispatching TICK where timer = 0 and currentTimerType = "Session" should switch to new break timer', () => {
    const testingState = {
      ...intialState,
      timer: 0,
      currentTimerType: 'Session',
    };

    const newState = timerReducer(testingState, tick());

    expect(newState).toEqual({
      ...intialState,
      timer: (intialState.breakLength) * 60,
      currentTimerType: 'Break',
    });
  });

  it('Dispatching RESET_TIMER should reset to intial state', () => {
    const testingState = {
      ...intialState,
      breakLength: 2,
      timer: 531,
      isPlaying: false,
    };

    const newState = timerReducer(testingState, resetTimer());

    expect(newState).toEqual(intialState);
  });
});
