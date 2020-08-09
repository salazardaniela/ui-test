import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Thumb from '.';

storiesOf('Thumb', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Up Icon - Small', () => (
    <Thumb type="up" size="small" />
  ))
  .add('Down Icon - Medium', () => (
    <Thumb type="down" size="medium" />
  ))
  .add('Down Icon - Big', () => (
    <Thumb type="down" size="big" />
  ))
  .add('Up Icon - Big - Percentages', () => (
    <Thumb type="up" size="big" showPercentage />
  ))
  .add('Down Icon - Big - Percentages', () => (
    <Thumb type="down" size="medium" showPercentage />
  ));
