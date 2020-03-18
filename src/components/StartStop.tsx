import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { beginCountdown } from '../redux/actionCreators';

interface Props {
  name: string;
  id: string;
  dispatch: Dispatch;
}

const StartStop: React.FC<Props> = ({
  name, id, dispatch,
}) => (
  <button
    type="button"
    id={id}
    onClick={(): void => beginCountdown(dispatch)}
  >
    {name}
  </button>
);

export default connect()(StartStop);
