import React from 'react';
import { render } from '@testing-library/react';
import Thumb from '.';

describe('Thumb', () => {
  it('should render a thumb element', () => {
    const { getByTestId } = render(
      <Thumb type="up" size="big" />,
    );
    const element = getByTestId('thumb');
    expect(element).toBeInTheDocument();
  });
});
