import React from 'react';
import './App.scss';
import TimerControl from './components/TimerControl';

const App: React.FC = () => (
  <div id="app">
    <TimerControl controlType="session" length={25} />
    <TimerControl controlType="break" length={5} />

    <section id="timer-label">Session</section>
    <section id="time-left">25:00</section>

    <button type="button" id="start_stop">Start/Stop</button>
    <button type="button" id="reset">Reset</button>
  </div>
);

export default App;
