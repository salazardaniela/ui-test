import React from 'react';
import { render } from '@testing-library/react';
import Countdown from '.';

describe('Countdown', () => {
  it('should render a Countdown component', () => {
    const { getByTestId } = render(<Countdown futureDate="2050-09-01" />);
    const element = getByTestId('countdown');
    expect(element).toBeInTheDocument();
  });
});
