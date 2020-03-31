import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdReplay } from 'react-icons/md';
import { resetTimer } from '../redux/actionCreators';
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

const ResetButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      id="reset"
      onClick={(): void => {
        // eslint-disable-next-line no-undef
        const alarm = document.getElementById('beep') as HTMLAudioElement;
        alarm.pause();

        dispatch(resetTimer());
      }}
    >
      <MdReplay size={45} />
    </Button>
  );
};

export default ResetButton;
