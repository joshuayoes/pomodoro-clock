/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { shallow } from 'enzyme';
import TimerControl from '../TimerControl';
import findById from '../../../testUtility';

describe('Break Timer Control', () => {
  const props = {
    controlType: 'break',
    length: 5,
  };
  const { controlType, length } = props;

  const wrapper = shallow(<TimerControl controlType={controlType} length={length} />);

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

describe('Session Timer Control', () => {
  const props = {
    controlType: 'session',
    length: 25,
  };
  const { controlType, length } = props;

  const wrapper = shallow(<TimerControl controlType={controlType} length={length} />);

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
