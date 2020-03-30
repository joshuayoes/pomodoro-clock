import React from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import { beginCountdown, pauseCountdown } from '../redux/actionCreators';
import { AppStore } from '../redux/store';

const StartStop: React.FC = () => {
  const isPlaying = useSelector((state: AppStore) => state.timer.isPlaying);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      id="start_stop"
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      onClick={() => (isPlaying ? dispatch(pauseCountdown()) : dispatch(beginCountdown()))}
    >
      {isPlaying ? 'Stop' : 'Start'}
    </button>
  );
};

export default StartStop;
