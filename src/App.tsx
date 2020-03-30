import React from 'react';
import './App.scss';
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


const App: React.FC = () => (
  <div id="app">
    <TimerControl controlType="session" increase={increaseSessionLength()} decrease={decreaseSessionLength()} />
    <TimerControl controlType="break" increase={increaseBreakLength()} decrease={decreaseBreakLength()} />
    <TimerDisplay />
    <StartStop />
    <ResetButton />
  </div>
);

export default App;
