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
  .add('Equal', () => (
    <Percentages idName="cristina" />
  ))
  .add('Non Show Percentages', () => (
    <Percentages idName="malala" showPercentage={false} />
  ));
