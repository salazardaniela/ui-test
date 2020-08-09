import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import BoxOpinion from '.';

storiesOf('BoxOpinion', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default', () => (
    <BoxOpinion />
  ));

