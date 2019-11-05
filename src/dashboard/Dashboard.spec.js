// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

// this just allows react-testing-library to do some
// routine cleanup after each test runs (to reset the DOM and such)
afterEach(rtl.cleanup);

test('<Dashboard /> snapshot', () => {
  // Arrange
  const wrapper = rtl.render(<Dashboard />);
  // Assert
  expect(wrapper.asFragment()).toMatchSnapshot();
});

describe('Dashboard Testing Initial', () => {
  it('has four buttons labeled Unlocked, Open, Lock Gate, and Close Gate, with default values of Unlocked and Open', () => {
    // Arrange
    const { getByText } = rtl.render(<Dashboard />);
    // Assert
    expect(getByText('Unlocked'));
    expect(getByText('Open'));
    expect(getByText('Lock Gate'));
    expect(getByText('Close Gate'));
  });
});