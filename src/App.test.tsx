/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import findById from '../testUtility';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('An element with id="timer-label" exists', () => {
    const component = findById(wrapper, '#timer-label');
    expect(component.length).toBe(1);
  });

  it('An element with id="timer-label" contains a string when intialized', () => {
    const component = findById(wrapper, '#timer-label');
    expect(component.text().includes('Session')).toBe(true);
  });

  it('An element with id="start_stop" exists', () => {
    const component = findById(wrapper, '#start_stop');
    expect(component.length).toBe(1);
  });

  it('An element with id="start_stop" exists', () => {
    const component = findById(wrapper, '#reset');
    expect(component.length).toBe(1);
  });
});
