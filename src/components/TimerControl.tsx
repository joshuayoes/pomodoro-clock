import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../redux/store';
import { TimerAction } from '../redux/reducers/timerReducer';

interface Props {
  controlType: string;
  increase: TimerAction;
  decrease: TimerAction;
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
        onClick={(): TimerAction => dispatch(increase)}
      >
      +
      </button>
      <button
        type="button"
        id={`${controlType}-decrement`}
        onClick={(): TimerAction => dispatch(decrease)}
      >
      -
      </button>
    </section>
  );
};

export default TimerControl;
