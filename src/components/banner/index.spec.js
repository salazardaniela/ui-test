import React from 'react';
import { render } from '@testing-library/react';
import Banner from '.';

describe('Banner', () => {
  it('should render a banner component', () => {
    const { getByTestId } = render(<Banner />);
    const element = getByTestId('banner');
    expect(element).toBeInTheDocument();
  });
});
