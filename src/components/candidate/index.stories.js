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
  url: '/mark'
};

storiesOf('Candidate', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('default', () => (
    <Candidate item={item} />
  ));

