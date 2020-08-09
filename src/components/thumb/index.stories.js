import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Thumb from '.';

const setNewValue = () => {
  global.console.log('Click');
};

storiesOf('Thumb', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Up Icon - Small', () => (
    <Thumb type="up" size="small" setNewValue={setNewValue} />
  ))
  .add('Down Icon - Medium', () => (
    <Thumb type="down" size="medium" setNewValue={setNewValue} />
  ))
  .add('Down Icon - Big', () => (
    <Thumb type="down" size="big" setNewValue={setNewValue} />
  ))
  .add('Up Icon - Big - Percentages', () => (
    <Thumb type="up" size="big" showPercentage setNewValue={setNewValue} />
  ))
  .add('Down Icon - Big - Percentages', () => (
    <Thumb type="down" size="medium" showPercentage setNewValue={setNewValue} />
  ));
