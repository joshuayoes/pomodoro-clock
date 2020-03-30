/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import findById from '../../../testUtility';
import { intialState } from '../../redux/reducers/timerReducer';
import ResetButton from '../ResetButton';

const mockStore = configureMockStore([thunk]);

describe('<ResetButton />', () => {
  const store = mockStore({
    timer: intialState,
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getWrapper = () => mount(
    <Provider store={store}>
      <ResetButton />
    </Provider>,
  );

  const wrapper = getWrapper();

  it('An element with the id="reset" exists', () => {
    const component = findById(wrapper, '#reset');
    expect(component.length).toBe(1);
  });
});
