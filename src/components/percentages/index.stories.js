import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Percentages from '.';

storiesOf('Percentages', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Down', () => (
    <Percentages values={{ up: 86797, down: 890, total: 87687 }} />
  ))
  .add('Equal', () => (
    <Percentages values={{ up: 1000, down: 1000, total: 2000 }} />
  ))
  .add('Up', () => (
    <Percentages  values={{ up: 27687, down: 60000, total: 87687 }} />
  ));

