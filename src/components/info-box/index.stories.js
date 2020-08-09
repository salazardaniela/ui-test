import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import InfoBox from '.';

storiesOf('InfoBox', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default', () => (
    <InfoBox />
  ));

