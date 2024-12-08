import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Checking Fallback', () => {
  it('should render loading state', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // @ts-ignore
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
