import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Banner from '.';

storiesOf('Banner', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default', () => (
    <Banner />
  ));

