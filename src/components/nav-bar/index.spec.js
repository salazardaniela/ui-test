import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '.';

describe('NavBar', () => {
  it('should render a nav bar component', () => {
    const { getByTestId } = render(<NavBar />);
    const element = getByTestId('navBar');
    expect(element).toBeInTheDocument();
  });
});
