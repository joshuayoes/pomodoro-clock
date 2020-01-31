import React from 'react';
import './App.scss';
import TimerControl from './components/TimerControl';
import Button from './components/Button';
import {
  increaseBreakLength, decreaseBreakLength, increaseSessionLength, decreaseSessionLength, resetTimer,
} from './redux/actionCreators';
import TimerDisplay from './components/TimerDisplay';


const App: React.FC = () => (
  <div id="app">
    <TimerControl controlType="session" increase={increaseSessionLength()} decrease={decreaseSessionLength()} />
    <TimerControl controlType="break" increase={increaseBreakLength()} decrease={decreaseBreakLength()} />

    <TimerDisplay />

    <button type="button" id="start_stop">Start/Stop</button>
    <Button name="Reset" id="reset" actionCreator={resetTimer()} />
  </div>
);

export default App;
