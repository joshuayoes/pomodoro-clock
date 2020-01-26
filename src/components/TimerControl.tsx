import React from 'react';
import _ from 'lodash';

interface Props {
  controlType: string;
  length: number;
}

const TimerControl: React.FC<Props> = ({ controlType, length }) => (
  <section id={`${controlType}-control`} className="timer-control">
    <div id={`${controlType}-label`}>
      {_.startCase(controlType)}
      {' '}
      Length
    </div>
    <div id={`${controlType}-length`}>{length}</div>
    <button type="button" id={`${controlType}-increment`}>+</button>
    <button type="button" id={`${controlType}-decrement`}>-</button>
  </section>
);

export default TimerControl;
