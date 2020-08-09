import React from 'react';
import { render } from '@testing-library/react';
import Candidate from '.';

const item = {
  imgSource: '../../assets/mark.jpg',
  title: 'Mark Zuckerberg',
  description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
  time: '1 month ago',
  category: 'Business',
  url: '/mark'
};

describe('Candidate', () => {
  it('should render a candidate component', () => {
    const { getByTestId } = render(
      <Candidate item={item} />
    );
    const element = getByTestId('candidate');
    expect(element).toBeInTheDocument();
  });
});
