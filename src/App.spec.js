import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('app');
    expect(element).toBeInTheDocument();
  });
});
