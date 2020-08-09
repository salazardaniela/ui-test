import React from 'react';
import { render } from '@testing-library/react';
import Percentages from '.';

const values = {
  up: 560,
  down: 1000,
  total: 1560
};

describe('Percentages', () => {
  it('should render a percentage component', () => {
    const { getByTestId } = render(
      <Percentages values={values} />
    );
    const element = getByTestId('percentages');
    expect(element).toBeInTheDocument();
  });
});
