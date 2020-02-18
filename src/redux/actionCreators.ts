import accurateInterval, { AccurateInterval } from 'accurate-interval';
import { Dispatch } from 'redux';
import {
  INCREASE_BREAK_LENGTH,
  DECREASE_BREAK_LENGTH,
  INCREASE_SESSION_LENGTH,
  DECREASE_SESSION_LENGTH,
  DECREMENT_TIMER,
  RESET_TIMER,
  TOGGLE_TIMER,
  BEGIN_COUNTDOWN,
} from './actions';

import { TimerAction } from './reducers/timerReducer';


export const increaseBreakLength = (): TimerAction => ({ type: INCREASE_BREAK_LENGTH });
export const decreaseBreakLength = (): TimerAction => ({ type: DECREASE_BREAK_LENGTH });
export const increaseSessionLength = (): TimerAction => ({ type: INCREASE_SESSION_LENGTH });
export const decreaseSessionLength = (): TimerAction => ({ type: DECREASE_SESSION_LENGTH });
export const decrementTimer = (): TimerAction => ({ type: DECREMENT_TIMER });
export const resetTimer = (): TimerAction => ({ type: RESET_TIMER });
export const toggleTimer = (): TimerAction => ({ type: TOGGLE_TIMER });
export const beginCountdown = (dispatch: Dispatch): TimerAction => {
  const incrementTimer: AccurateInterval = accurateInterval(
    () => dispatch(decrementTimer()),
    1000,
    { aligned: true, immediate: true },
  );

  return {
    type: BEGIN_COUNTDOWN,
    timerId: incrementTimer,
  };
};
