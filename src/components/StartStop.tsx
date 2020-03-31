import React from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import styled from 'styled-components';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import { beginCountdown, pauseCountdown } from '../redux/actionCreators';
import { AppStore } from '../redux/store';
import { baseTheme } from '../theme';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${baseTheme.buttonBackground};
  border-radius: 100%;
  box-shadow: ${baseTheme.buttonShadow} 5px 5px 8px;
  height: 90px;
  width: 90px;
  border: none;
  margin: 10px 20px;
`;

const StartStop: React.FC = () => {
  const isPlaying = useSelector((state: AppStore) => state.timer.isPlaying);
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      id="start_stop"
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      onClick={() => (isPlaying ? dispatch(pauseCountdown()) : dispatch(beginCountdown()))}
    >
      {isPlaying ? <MdPause size={60} /> : <MdPlayArrow size={60} />}
    </Button>
  );
};

export default StartStop;
