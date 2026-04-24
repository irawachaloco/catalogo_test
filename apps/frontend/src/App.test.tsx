import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('renders the phase 2 content preview', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /phase 2 static content foundations/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /vasija luna/i })).toBeInTheDocument();
    expect(screen.getByText('hola@omstudio.mx')).toBeInTheDocument();
  });
});
