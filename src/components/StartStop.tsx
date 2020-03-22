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
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      onClick={() => (isPlaying ? dispatch(pauseCountdown()) : dispatch(beginCountdown()))}
    >
      {name}
    </button>
  );
};

export default StartStop;
