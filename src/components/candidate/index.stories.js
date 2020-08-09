import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from './README.md';
import Candidate from '.';

const item = {
  imgSource: '../../assets/mark.jpg',
  title: 'Mark Zuckerberg',
  description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
  time: '1 month ago',
  category: 'Business',
  url: '/mark',
};

const votes = {
  up: 1,
  down: 3,
  total: 4,
};

const votesUp = {
  up: 3,
  down: 1,
  total: 4,
};

storiesOf('Candidate', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Default - full version', () => (
    <Candidate item={item} values={votes} />
  ))
  .add('Non full version', () => (
    <Candidate item={item} fullVersion={false} values={votesUp} />
  ));
