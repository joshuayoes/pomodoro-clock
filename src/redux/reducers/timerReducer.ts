// eslint-disable-next-line import/no-cycle
import {
  // eslint-disable-next-line max-len
  INCREASE_BREAK_LENGTH, DECREASE_BREAK_LENGTH, INCREASE_SESSION_LENGTH, DECREASE_SESSION_LENGTH, DECREMENT_TIMER, RESET_TIMER,
} from '../actions';

export interface TimerState {
  sessionLength: number;
  breakLength: number;
  timer: number;
  currentTimerType: string;
  isPlaying: boolean;
}

export interface TimerAction {
  type: string;
}

export const intialState = {
  sessionLength: 25,
  breakLength: 5,
  timer: 1500,
  currentTimerType: 'Session',
  isPlaying: false,
};

const timerReducer = (state: TimerState = intialState, action: TimerAction): TimerState => {
  switch (action.type) {
    case INCREASE_BREAK_LENGTH:
      return {
        ...state,
        breakLength: state.breakLength + 1,
      };
    case DECREASE_BREAK_LENGTH:
      return {
        ...state,
        breakLength: state.breakLength - 1,
      };
    case INCREASE_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
      };
    case DECREASE_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength - 1,
      };
    case DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
      };
    case RESET_TIMER:
      return {
        ...intialState,
      };
    default:
      return state;
  }
};

export default timerReducer;
