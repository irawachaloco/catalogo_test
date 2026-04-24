import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

describe('App', () => {
  it('renders the home page and lets the user switch language', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /ceramica contemporanea para espacios cotidianos/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'EN' }));

    expect(
      screen.getByRole('heading', { name: /contemporary ceramics for everyday spaces/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view gallery/i })).toBeInTheDocument();
  });

  it('renders the product detail route', () => {
    render(
      <MemoryRouter initialEntries={['/product/luna-vessel']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /vasija luna/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /consultar por instagram/i })).toBeInTheDocument();
  });

  it('renders the contact page route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /hablemos de una pieza/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /hola@omstudio.mx/i })).toBeInTheDocument();
  });
});
