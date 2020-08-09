import React from 'react';
import { render } from '@testing-library/react';
import Percentages from '.';

const mockFunc = jest.fn();
mockFunc.mockReturnValue('up');

describe('Percentages', () => {
  it('should render a percentage component', () => {
    const { getByTestId } = render(
      <Percentages idName="markTest" />,
    );
    const element = getByTestId('percentages');
    expect(mockFunc).toHaveBeenCalledTimes(0);
    expect(element).toBeInTheDocument();
  });

  it('should return an up result', () => {
    const { container } = render(
      <Percentages idName="malalaTest" setResult={mockFunc} />,
    );
    expect(container).not.toBeEmpty();
  });
});
