import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TimerControl from './components/TimerControl';
import ResetButton from './components/ResetButton';
import {
  increaseBreakLength,
  decreaseBreakLength,
  increaseSessionLength,
  decreaseSessionLength,
} from './redux/actionCreators';
import TimerDisplay from './components/TimerDisplay';
import StartStop from './components/StartStop';
import { AppStore } from './redux/store';
import { baseTheme, sessionTheme, breakTheme } from './theme';

interface BackgroundProps {
  backgroundColor: string;
}

const Background = styled.main<BackgroundProps>`
  display: flex;  
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props: BackgroundProps): string => props.backgroundColor};
`;

const TimerContainer = styled.section`
  display: flex;
  flex-direction: column;
`;


const App: React.FC = () => {
  const isPlaying = useSelector((state: AppStore) => state.timer.isPlaying);
  const currentTimerType = useSelector((state: AppStore) => state.timer.currentTimerType);

  const currentTimerTypeBackground = currentTimerType === 'Session' ? sessionTheme.backgroundColor : breakTheme.backgroundColor;
  const backgroundColor = isPlaying ? currentTimerTypeBackground : baseTheme.backgroundColor;

  return (
    <Background id="app" backgroundColor={backgroundColor}>
      <TimerContainer>
        <TimerDisplay />
        <TimerControl controlType="session" increase={increaseSessionLength()} decrease={decreaseSessionLength()} />
        <TimerControl controlType="break" increase={increaseBreakLength()} decrease={decreaseBreakLength()} />
        <StartStop />
        <ResetButton />
      </TimerContainer>
    </Background>
  );
};

export default App;
