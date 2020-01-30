import React from 'react';
import { connect } from 'react-redux';

interface Props {
  controlType: string;
  increase: any;
  decrease: any;
  dispatch: any;
}

const TimerDisplay: React.FC = () => (
  <div />
);

export default connect()(TimerDisplay);
