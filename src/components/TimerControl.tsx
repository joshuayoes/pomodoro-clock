/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Dispatch, Action,
} from 'redux';
import { AppStore } from '../redux/store';

interface Props {
  controlType: string;
  increase: any;
  decrease: any;
  sessionLength?: number;
  breakLength?: number;
}

const TimerControl: React.FC<Props> = ({
  controlType, increase, decrease, sessionLength, breakLength,
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
      onClick={increase}
    >
      +
    </button>
    <button
      type="button"
      id={`${controlType}-decrement`}
      onClick={decrease}
    >
      -
    </button>
  </section>
);

const mapStateToProps = (state: AppStore): object => {
  const { sessionLength, breakLength } = state.timer;
  return {
    sessionLength,
    breakLength,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props): object => ({
  increase: (): Action => dispatch(ownProps.increase),
  decrease: (): Action => dispatch(ownProps.decrease),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerControl);
