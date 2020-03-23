import React from 'react';
import { useSelector } from 'react-redux';
import secondsToClock from '../utilityFunctions';
import { AppStore } from '../redux/store';
import useDidUpdateEffect from '../useDidUpdateEffect';

const TimerDisplay: React.FC = () => {
  const currentTimerType = useSelector((state: AppStore) => state.timer.currentTimerType);
  const clock = useSelector((state: AppStore) => secondsToClock(state.timer.timer));

  useDidUpdateEffect((): void => {
    // eslint-disable-next-line no-undef
    const alarm = document.getElementById('beep') as HTMLAudioElement;
    alarm.play();
  }, [currentTimerType]);


  return (
    <>
      <section id="timer-label">{currentTimerType}</section>
      <section id="time-left">{clock}</section>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio id="beep">
        <source src="./alarm.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </>
  );
};

export default TimerDisplay;
