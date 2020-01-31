import {
  // eslint-disable-next-line max-len
  INCREASE_BREAK_LENGTH, DECREASE_BREAK_LENGTH, INCREASE_SESSION_LENGTH, DECREASE_SESSION_LENGTH, DECREMENT_TIMER, RESET_TIMER,
} from './actions';

import { TimerAction } from './reducers/timerReducer';

export const increaseBreakLength = (): TimerAction => ({ type: INCREASE_BREAK_LENGTH });
export const decreaseBreakLength = (): TimerAction => ({ type: DECREASE_BREAK_LENGTH });
export const increaseSessionLength = (): TimerAction => ({ type: INCREASE_SESSION_LENGTH });
export const decreaseSessionLength = (): TimerAction => ({ type: DECREASE_SESSION_LENGTH });
export const decrementTimer = (): TimerAction => ({ type: DECREMENT_TIMER });
export const resetTimer = (): TimerAction => ({ type: RESET_TIMER });
