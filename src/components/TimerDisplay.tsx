import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state: any): object => {
  const secondsToClock = (_seconds: number): string => {
    const pureSeconds: number = _seconds % 60;
    const pureMinutes: number = (_seconds - pureSeconds) / 60;

    const prependSingleDigit = (number: number): string => {
      const time: string = number.toString();
      return time.length === 1 ? '0'.concat(time) : time;
    };

    const minutes = prependSingleDigit(pureMinutes);
    const seconds = prependSingleDigit(pureSeconds);

    return `${minutes}:${seconds}`;
  };

  const { timer, currentTimerType } = state.timer;
  return {
    currentTimerType,
    clock: secondsToClock(timer),
  };
};

export default connect(mapStateToProps)(TimerDisplay);
