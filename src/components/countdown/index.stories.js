import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import CountdownTimer from '.';

storiesOf('Countdown', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Countdown Days', () => (
    <CountdownTimer futureDate="2020-09-01" />
  ));
