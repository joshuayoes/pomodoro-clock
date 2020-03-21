import React from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import { beginCountdown, pauseCountdown } from '../redux/actionCreators';
import { AppStore } from '../redux/store';

interface Props {
  name: string;
  id: string;
}


const StartStop: React.FC<Props> = ({
  name, id,
}) => {
  const isPlaying = useSelector((state: AppStore) => state.timer.isPlaying);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      id={id}
      onClick={() => (isPlaying ? dispatch(pauseCountdown()) : dispatch(beginCountdown()))}
    >
      {name}
    </button>
  );
};

export default StartStop;
