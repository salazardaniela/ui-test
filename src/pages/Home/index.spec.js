import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  it('should render a home page', () => {
    const { getByTestId } = render(<Home />);
    const page = getByTestId('home-page');
    expect(page).toBeInTheDocument();
  });
});
