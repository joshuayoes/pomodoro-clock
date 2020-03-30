/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TimerControl from '../TimerControl';
import findById from '../../../testUtility';
import {
  increaseBreakLength, decreaseBreakLength, increaseSessionLength, decreaseSessionLength,
} from '../../redux/actionCreators';
import { intialState } from '../../redux/reducers/timerReducer';

const mockStore = configureMockStore([thunk]);


describe('Break <TimerControl />', () => {
  const store = mockStore({
    timer: intialState,
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getWrapper = () => mount(
    <Provider store={store}>
      <TimerControl
        controlType="break"
        increase={increaseBreakLength()}
        decrease={decreaseBreakLength()}
      />
    </Provider>,
  );

  const wrapper = getWrapper();

  it('An element with id="break-label" exists', () => {
    const component = findById(wrapper, '#break-label');
    expect(component.length).toBe(1);
  });

  it('An element with id="break-label" contains the string "Break Length"', () => {
    const component = findById(wrapper, '#break-label');
    expect(component.text().includes('Break Length')).toBe(true);
  });

  it('An element with id="break-increment" exists', () => {
    const component = findById(wrapper, '#break-increment');
    expect(component.length).toBe(1);
  });

  it('An element with id="break-decrement" exists', () => {
    const component = findById(wrapper, '#break-decrement');
    expect(component.length).toBe(1);
  });
});

describe('Session <TimerControl />', () => {
  const store = mockStore({
    timer: intialState,
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getWrapper = () => mount(
    <Provider store={store}>
      <TimerControl
        controlType="session"
        increase={increaseSessionLength()}
        decrease={decreaseSessionLength()}
      />
    </Provider>,
  );

  const wrapper = getWrapper();

  it('An element with the id="session-label"', () => {
    const component = findById(wrapper, '#session-label');
    expect(component.length).toBe(1);
  });

  it('An element with id="session-label" contains the string "Session Length"', () => {
    const component = findById(wrapper, '#session-label');
    expect(component.text().includes('Session Length')).toBe(true);
  });

  it('An element with id="session-increment" exists', () => {
    const component = findById(wrapper, '#session-increment');
    expect(component.length).toBe(1);
  });

  it('An element with id="session-decrement" exists', () => {
    const component = findById(wrapper, '#session-decrement');
    expect(component.length).toBe(1);
  });
});
