import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'
import InfoBox from '.';

describe('InfoBox', () => {
  it('should render a info box component', () => {
    const { getByTestId } = render(<InfoBox />);
    const element = getByTestId('info-box');
    expect(element).toBeInTheDocument();
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });

  it('should change the state', () => {
    const { result } = renderHook(() => InfoBox());
    console.log(result)

    expect(result.current.showBox).toBe(false);

    act(() => {
      // fireEvent.click(button);
    });

    // expect(element).not.toBeInTheDocument();
  })
});
