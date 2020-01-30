import React from 'react';
import './App.scss';
import TimerControl from './components/TimerControl';
import {
  increaseBreakLength, decreaseBreakLength, increaseSessionLength, decreaseSessionLength,
} from './redux/actionCreators';


const App: React.FC = () => (
  <div id="app">
    <TimerControl controlType="session" increase={increaseSessionLength()} decrease={decreaseSessionLength()} />
    <TimerControl controlType="break" increase={increaseBreakLength()} decrease={decreaseBreakLength()} />

    <section id="timer-label">Session</section>
    <section id="time-left">25:00</section>

    <button type="button" id="start_stop">Start/Stop</button>
    <button type="button" id="reset">Reset</button>
  </div>
);

export default App;
