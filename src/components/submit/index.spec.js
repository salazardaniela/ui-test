import React from 'react';
import { render } from '@testing-library/react';
import Submit from '.';

describe('Submit', () => {
  it('should render a submit component', () => {
    const { getByTestId } = render(<Submit />);
    const element = getByTestId('submit');
    expect(element).toBeInTheDocument();
  });
});
