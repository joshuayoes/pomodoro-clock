import React from 'react';
import { connect } from 'react-redux';
import { TimerAction } from '../redux/reducers/timerReducer';

interface Props {
  name: string;
  id: string;
  actionCreator: any;
  dispatch: any;
}

const Button: React.FC<Props> = ({
  name, id, actionCreator, dispatch,
}) => (
  <button
    type="button"
    id={id}
    onClick={(): TimerAction => dispatch(actionCreator)}
  >
    {name}
  </button>
);

export default connect()(Button);
