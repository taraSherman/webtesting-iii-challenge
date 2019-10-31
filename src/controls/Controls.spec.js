// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';
import {toggleLocked} from './Controls';
import {toggleClosed} from './Controls';
import { render, fireEvent } from '@testing-library/react';



// this just allows react-testing-library to do some
// routine cleanup after each test runs (to reset the DOM and such)
afterEach(rtl.cleanup);

test('<Controls /> snapshot', () => {
  const wrapper = rtl.render(<Controls />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});