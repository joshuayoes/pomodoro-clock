/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import findById from '../../../testUtility';
import { intialState } from '../../redux/reducers/timerReducer';
import TimerDisplay from '../TimerDisplay';

const mockStore = configureMockStore([thunk]);

describe('<TimerDisplay />', () => {
  const store = mockStore({
    timer: intialState,
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getWrapper = () => mount(
    <Provider store={store}>
      <TimerDisplay />
    </Provider>,
  );

  const wrapper = getWrapper();

  it('An element with id="timer-label" exists', () => {
    const component = findById(wrapper, '#timer-label');
    expect(component.length).toBe(1);
  });

  it('An element with id="time-left" exists', () => {
    const component = findById(wrapper, '#time-left');
    expect(component.length).toBe(1);
  });
});
