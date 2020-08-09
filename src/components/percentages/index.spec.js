import React from 'react';
import { render } from '@testing-library/react';
import Percentages from '.';

const values = {
  up: 1000,
  down: 560,
  total: 1560,
};

const mockFunc = jest.fn();
mockFunc.mockReturnValue('up');

describe('Percentages', () => {
  it('should render a percentage component', () => {
    const { getByTestId } = render(
      <Percentages values={values} />,
    );
    const element = getByTestId('percentages');
    expect(mockFunc).toHaveBeenCalledTimes(0);
    expect(element).toBeInTheDocument();
  });

  it('should return an up result', () => {
    const { container } = render(
      <Percentages values={values} setResult={mockFunc} />,
    );
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(container).not.toBeEmpty();
  });
});
