import React from 'react';
import { render } from '@testing-library/react';
import BoxOpinion from '.';

describe('BoxOpinion', () => {
  it('should render a BoxOpinion component', () => {
    const { getByTestId } = render(<BoxOpinion />);
    const element = getByTestId('box-opinion');
    expect(element).toBeInTheDocument();
  });
});
