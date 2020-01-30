/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

interface Props {
  controlType: string;
  increase: any;
  decrease: any;
  dispatch: any;
  sessionLength?: number;
  breakLength?: number;
}

const TimerControl: React.FC<Props> = ({
  controlType, increase, decrease, dispatch, sessionLength, breakLength,
}) => (
  <section id={`${controlType}-control`} className="timer-control">
    <div id={`${controlType}-label`}>
      {_.startCase(controlType)}
      {' '}
      Length
    </div>
    <div id={`${controlType}-length`}>
      {controlType === 'session' ? sessionLength : breakLength }
    </div>
    <button
      type="button"
      id={`${controlType}-increment`}
      onClick={(): void => dispatch(increase)}
    >
      +
    </button>
    <button
      type="button"
      id={`${controlType}-decrement`}
      onClick={(): void => dispatch(decrease)}
    >
      -
    </button>
  </section>
);

const mapStateToProps = (state: any): object => {
  const { sessionLength, breakLength } = state.timer;
  return {
    sessionLength,
    breakLength,
  };
};

export default connect(mapStateToProps)(TimerControl);
