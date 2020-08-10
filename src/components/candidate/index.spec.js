import React from 'react';
import { render } from '@testing-library/react';
import Candidate from '.';

const item = {
  imgSource: '../../assets/mark.jpg',
  title: 'Mark Zuckerberg',
  description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
  time: '1 month ago',
  category: 'Business',
  url: '/mark',
  id: 'itemTest',
};

const votes = {
  up: 3,
  down: 1,
  total: 4,
};

describe('Candidate', () => {
  it('should render a candidate component', () => {
    const { getByTestId } = render(
      <Candidate item={item} values={votes} fullVersion />,
    );
    const element = getByTestId('candidate');
    const category = getByTestId('candidate-category');
    const description = getByTestId('candidate-description');
    expect(element).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render non full version of candidate component', () => {
    const { getByTestId } = render(
      <Candidate item={item} values={votes} fullVersion={false} />,
    );
    const element = getByTestId('candidate');
    expect(element).toBeInTheDocument();
  });
});
