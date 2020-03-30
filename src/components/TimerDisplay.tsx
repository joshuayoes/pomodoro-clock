import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import secondsToClock from '../utilityFunctions';
import { AppStore } from '../redux/store';
import useDidUpdateEffect from '../useDidUpdateEffect';
import { baseTheme, sessionTheme, breakTheme } from '../theme';

interface StyleProps {
  labelColor: string;
}

const TimerWrapper = styled.section`
  margin-bottom: 100px;
`;

const TimeLeft = styled.section<StyleProps>`
  font-size: ${baseTheme.timerFontSize};
  text-align: center;
  color: ${(props): string => props.labelColor};
`;

const TimerLabel = styled.section<StyleProps>`
  font-size: ${baseTheme.labelFontSize};
  text-align: center;
  color: ${(props): string => props.labelColor};
  margin-top: -30px;
`;


const TimerDisplay: React.FC = () => {
  const isPlaying = useSelector((state: AppStore) => state.timer.isPlaying);
  const currentTimerType = useSelector((state: AppStore) => state.timer.currentTimerType);
  const clock = useSelector((state: AppStore) => secondsToClock(state.timer.timer));

  const currentTimerTypeColor = currentTimerType === 'Session' ? sessionTheme.timerTypeLabelColor : breakTheme.timerTypeLabelColor;
  const labelColor = isPlaying ? currentTimerTypeColor : baseTheme.timerTypeLabelColor;

  // Play sound when timer switches between session and break state
  useDidUpdateEffect((): void => {
    // eslint-disable-next-line no-undef
    const alarm = document.getElementById('beep') as HTMLAudioElement;
    alarm.currentTime = 0;
    alarm.play();
  }, [currentTimerType]);


  return (
    <TimerWrapper>
      <TimeLeft labelColor={labelColor} id="time-left">{clock}</TimeLeft>
      <TimerLabel id="timer-label" labelColor={labelColor}>{currentTimerType}</TimerLabel>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio id="beep">
        <source src="./alarm.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </TimerWrapper>
  );
};

export default TimerDisplay;
