import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('renders the phase 1 scaffold heading', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /phase 1 frontend scaffold/i })).toBeInTheDocument();
  });
});

