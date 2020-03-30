import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdAdd, MdRemove } from 'react-icons/md';
import { AppStore } from '../redux/store';
import { TimerAction } from '../redux/reducers/timerReducer';
import { baseTheme } from '../theme';

interface Props {
  controlType: string;
  increase: TimerAction;
  decrease: TimerAction;
}

const TimerControlWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const LabelWrapper = styled.div`
  color: ${baseTheme.labelColor};
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const ControlTypeLength = styled.div`
  ::after {
    content: ':00'
  }
  font-size: ${baseTheme.labelFontSize}
`;

const ControlTypeLabel = styled.div`
  font-size: ${baseTheme.timerControlLabelFontSize}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${baseTheme.buttonBackground};
  border-radius: 100%;
  box-shadow: ${baseTheme.buttonShadow} 5px 5px 8px;
  height: 40px;
  width: 40px;
  border: none;
  margin: 10px 20px;
`;

const TimerControl: React.FC<Props> = ({
  controlType, increase, decrease,
}) => {
  const sessionLength = useSelector((state: AppStore) => state.timer.sessionLength);
  const breakLength = useSelector((state: AppStore) => state.timer.breakLength);

  const dispatch = useDispatch();

  return (
    <TimerControlWrapper id={`${controlType}-control`}>
      <Button
        type="button"
        id={`${controlType}-increment`}
        onClick={(): TimerAction => dispatch(increase)}
      >
        <MdAdd size={35} />
      </Button>
      <LabelWrapper>
        <ControlTypeLength id={`${controlType}-length`}>
          {controlType === 'session' ? sessionLength : breakLength }
        </ControlTypeLength>
        <ControlTypeLabel id={`${controlType}-label`}>
          {_.startCase(controlType)}
          {' '}
          Length
        </ControlTypeLabel>
      </LabelWrapper>
      <Button
        type="button"
        id={`${controlType}-decrement`}
        onClick={(): TimerAction => dispatch(decrease)}
      >
        <MdRemove size={35} />
      </Button>
    </TimerControlWrapper>
  );
};

export default TimerControl;
