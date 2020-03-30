/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { intialState } from './src/redux/reducers/timerReducer';

const mockStore = configureMockStore([thunk]);

const store = mockStore({
  timer: intialState,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const reduxWrapper = (component: React.FC) => mount(
  <Provider store={store}>
    {component}
  </Provider>,
);

const findById = (component: any, id: string): any => {
  const wrapper = component.find(id);
  return wrapper;
};


export default findById;
