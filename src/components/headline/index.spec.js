import React from 'react';
import { render } from '@testing-library/react';
import Headline from '.';

describe('Headline', () => {
  it('should render a headline element', () => {
    const { getByTestId } = render(<Headline title="title" />);
    const element = getByTestId('headline');
    expect(element).toBeInTheDocument();
  });
});
