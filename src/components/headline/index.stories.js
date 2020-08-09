import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Headline from '.';

storiesOf('Headline', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default', () => (
    <Headline title="Previous Rulings" />
  ));
