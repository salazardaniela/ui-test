import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InfoBox from '.';

describe('InfoBox', () => {
  it('should render a info box component', () => {
    const { getByTestId } = render(<InfoBox />);
    const element = getByTestId('info-box');
    expect(element).toBeInTheDocument();
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
  });

  it('should remove component when click in close button', () => {
    const { getByTestId } = render(<InfoBox />);
    const element = getByTestId('info-box');
    const button = getByTestId('button');
    expect(element).toBeInTheDocument();
    fireEvent.click(button);
    expect(element).not.toBeInTheDocument();
  });
});
