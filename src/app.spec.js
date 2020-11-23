import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('deleteme test', () => {
  test('deleteme again', () => {
    const { getByText } = render(<App />);

    expect(1).toBe(1);
    expect(getByText('My App')).toBeInTheDocument();
  });
});
