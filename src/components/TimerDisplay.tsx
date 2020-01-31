import React from 'react';
import { connect } from 'react-redux';
import secondsToClock from '../utilityFunctions';
import { AppStore } from '../redux/store';

interface Props {
  currentTimerType?: string;
  clock?: string;
}

const TimerDisplay: React.FC<Props> = ({ clock, currentTimerType }) => (
  <>
    <section id="timer-label">{currentTimerType}</section>
    <section id="time-left">{clock}</section>
  </>
);

const mapStateToProps = (state: AppStore): object => {
  const { timer, currentTimerType } = state.timer;

  return {
    currentTimerType,
    clock: secondsToClock(timer),
  };
};

export default connect(mapStateToProps)(TimerDisplay);
