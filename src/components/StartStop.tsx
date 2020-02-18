import React from 'react';
import { connect } from 'react-redux';
import { TimerAction } from '../redux/reducers/timerReducer';
import { beginCountdown } from '../redux/actionCreators';

interface Props {
  name: string;
  id: string;
  dispatch: any;
}

const StartStop: React.FC<Props> = ({
  name, id, dispatch,
}) => (
  <button
    type="button"
    id={id}
    onClick={(): TimerAction => beginCountdown(dispatch)}
  >
    {name}
  </button>
);

export default connect()(StartStop);
