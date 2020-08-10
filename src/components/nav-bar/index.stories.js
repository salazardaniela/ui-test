import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import NavBar from '.';

storiesOf('NavBar', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default', () => (
    <NavBar />
  ));
