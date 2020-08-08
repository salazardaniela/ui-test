import React from 'react';
import NavBar from '.';

export default {
  title: 'Nav Bar',
  component: NavBar,
};

export const ToStorybook = () => <NavBar />;

ToStorybook.story = {
  name: 'Default',
};
