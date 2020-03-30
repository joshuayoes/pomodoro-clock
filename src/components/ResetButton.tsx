import React from 'react';
import { useDispatch } from 'react-redux';
import { resetTimer } from '../redux/actionCreators';

const ResetButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      id="reset"
      onClick={(): void => {
        // eslint-disable-next-line no-undef
        const alarm = document.getElementById('beep') as HTMLAudioElement;
        alarm.pause();

        dispatch(resetTimer());
      }}
    >
      Reset
    </button>
  );
};

export default ResetButton;
