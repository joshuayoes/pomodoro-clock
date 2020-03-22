import React from 'react';
import { useSelector } from 'react-redux';
import secondsToClock from '../utilityFunctions';
import { AppStore } from '../redux/store';

const TimerDisplay: React.FC = () => {
  const currentTimerType = useSelector((state: AppStore) => state.timer.currentTimerType);
  const clock = useSelector((state: AppStore) => secondsToClock(state.timer.timer));

  return (
    <>
      <section id="timer-label">{currentTimerType}</section>
      <section id="time-left">{clock}</section>
    </>
  );
};

export default TimerDisplay;
