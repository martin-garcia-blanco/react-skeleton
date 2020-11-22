import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('deleteme test', () => {
  test('deleteme again', () => {
    const { getByText } = render(<App />);

    expect(1).toBe(1);

    const foo = getByText('My App');
    console.log(foo);

    expect(getByText('My App')).toBeInTheDocument();
  });
});
