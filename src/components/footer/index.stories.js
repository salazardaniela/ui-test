import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Footer from '.';

storiesOf('Footer', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default', () => (
    <Footer />
  ));
