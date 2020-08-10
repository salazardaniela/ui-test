import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('should render a footer component', () => {
    const { getByTestId } = render(<Footer />);
    const element = getByTestId('footer');
    expect(element).toBeInTheDocument();
  });
});
