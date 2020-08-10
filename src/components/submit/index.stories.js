import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Submit from '.';

storiesOf('Submit', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default', () => (
    <Submit />
  ));
