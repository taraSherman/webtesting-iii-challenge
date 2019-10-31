// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

// this just allows react-testing-library to do some
// routine cleanup after each test runs (to reset the DOM and such)
afterEach(rtl.cleanup);

test('<Display /> snapshot', () => {
  const wrapper = rtl.render(<Display />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});