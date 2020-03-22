/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dispatch,
} from 'redux';
import { AppStore } from '../redux/store';

interface Props {
  controlType: string;
  increase: any;
  decrease: any;
}

const TimerControl: React.FC<Props> = ({
  controlType, increase, decrease,
}) => {
  const sessionLength = useSelector((state: AppStore) => state.timer.sessionLength);
  const breakLength = useSelector((state: AppStore) => state.timer.breakLength);

  const dispatch = useDispatch();

  return (
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
        onClick={(): Dispatch => dispatch(increase)}
      >
      +
      </button>
      <button
        type="button"
        id={`${controlType}-decrement`}
        onClick={(): Dispatch => dispatch(decrease)}
      >
      -
      </button>
    </section>
  );
};

export default TimerControl;
