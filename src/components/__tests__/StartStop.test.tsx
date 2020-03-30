/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import findById from '../../../testUtility';
import { intialState } from '../../redux/reducers/timerReducer';
import StartStop from '../StartStop';
import { BEGIN_COUNTDOWN } from '../../redux/actions';

const mockStore = configureMockStore([thunk]);

describe('<StartStop />', () => {
  const store = mockStore({
    timer: intialState,
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getWrapper = () => mount(
    <Provider store={store}>
      <StartStop />
    </Provider>,
  );

  const wrapper = getWrapper();

  it('An element with the id="start_stop" exists', () => {
    const component = findById(wrapper, '#start_stop');
    expect(component.length).toBe(1);
  });

  it('Clicking button dispatches event', () => {
    const component = findById(wrapper, '#start_stop');
    component.simulate('click');

    expect(store.getActions()[0]).toMatchObject({
      type: BEGIN_COUNTDOWN,
    });
  });
});
