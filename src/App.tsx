import React from 'react';
import './App.scss';
import TimerControl from './components/TimerControl';
import Button from './components/Button';
import {
  increaseBreakLength,
  decreaseBreakLength,
  increaseSessionLength,
  decreaseSessionLength,
  resetTimer,
  toggleTimer,
} from './redux/actionCreators';
import TimerDisplay from './components/TimerDisplay';


const App: React.FC = () => (
  <div id="app">
    <TimerControl controlType="session" increase={increaseSessionLength()} decrease={decreaseSessionLength()} />
    <TimerControl controlType="break" increase={increaseBreakLength()} decrease={decreaseBreakLength()} />

    <TimerDisplay />

    <Button name="Start/Stop" id="start_stop" actionCreator={toggleTimer()} />
    <Button name="Reset" id="reset" actionCreator={resetTimer()} />
  </div>
);

export default App;
