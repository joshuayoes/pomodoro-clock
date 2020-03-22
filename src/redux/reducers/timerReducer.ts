import {
  INCREASE_BREAK_LENGTH,
  DECREASE_BREAK_LENGTH,
  INCREASE_SESSION_LENGTH,
  DECREASE_SESSION_LENGTH,
  RESET_TIMER,
  BEGIN_COUNTDOWN,
  TICK,
  PAUSE_COUNTDOWN,
} from '../actions';

export interface TimerState {
  sessionLength: number;
  breakLength: number;
  timer: number;
  currentTimerType: string;
  isPlaying: boolean;
  timerId?: ReturnType<typeof setInterval>;
}

export interface TimerAction {
  type: string;
  isPlaying?: boolean;
  timerId?: ReturnType<typeof setInterval>;
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
    case BEGIN_COUNTDOWN:
      return {
        ...state,
        timerId: action.timerId,
        isPlaying: true,
      };
    case PAUSE_COUNTDOWN:
      if (state.timerId !== undefined) {
        clearInterval(state.timerId);
      }

      return {
        ...state,
        isPlaying: false,
      };
    case INCREASE_BREAK_LENGTH:
      if (state.breakLength === 60) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        breakLength: state.breakLength + 1,
      };
    case DECREASE_BREAK_LENGTH:
      if (state.breakLength === 1) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        breakLength: state.breakLength - 1,
      };
    case INCREASE_SESSION_LENGTH:
      if (state.sessionLength === 60) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
        timer: (state.sessionLength + 1) * 60,
      };
    case DECREASE_SESSION_LENGTH:
      if (state.sessionLength === 1) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        sessionLength: state.sessionLength - 1,
        timer: (state.sessionLength - 1) * 60,
      };
    case TICK:
      // Check if the current timer is finished
      if (state.timer === 0) {
        // If the current timer is a break, switch to session
        if (state.currentTimerType === 'Break') {
          return {
            ...state,
            timer: (state.sessionLength) * 60,
            currentTimerType: 'Session',
          };
        }

        // If the current timer is a session, switch to break
        return {
          ...state,
          timer: (state.breakLength) * 60,
          currentTimerType: 'Break',
        };
      }

      // Most common case: decrement timer
      return {
        ...state,
        timer: state.timer - 1,
      };
    case RESET_TIMER: {
      if (state.timerId !== undefined) {
        clearInterval(state.timerId);
      }

      return {
        ...intialState,
      };
    }
    default:
      return state;
  }
};

export default timerReducer;
