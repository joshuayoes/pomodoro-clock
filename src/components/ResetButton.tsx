import React from 'react';
import { useDispatch } from 'react-redux';
import { TimerAction } from '../redux/reducers/timerReducer';

interface Props {
  name: string;
  id: string;
  actionCreator: TimerAction;
}

const Button: React.FC<Props> = ({
  name, id, actionCreator,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      id={id}
      onClick={(): void => {
        // eslint-disable-next-line no-undef
        const alarm = document.getElementById('beep') as HTMLAudioElement;
        alarm.pause();

        dispatch(actionCreator);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
