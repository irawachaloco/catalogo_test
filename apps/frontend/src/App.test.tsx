import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

describe('App', () => {
  it('renders the English home page from the /en route and lets the user switch language from the footer', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/en']}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /handmade ceramics for everyday life and the spaces around it/i,
      }),
    ).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(screen.getByRole('link', { name: /view pieces/i })).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: 'ES' }));

    expect(
      screen.getByRole('heading', {
        name: /cerámica hecha a mano para la vida cotidiana y los espacios que la acompañan/i,
      }),
    ).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('lang', 'es');
    expect(screen.getByRole('link', { name: /ver piezas/i })).toBeInTheDocument();
  });

  it('renders the product detail route with browser-detected English locale', () => {
    render(
      <MemoryRouter initialEntries={['/product/luna-vessel']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /moon vessel/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ask on instagram/i })).toBeInTheDocument();
  });

  it('renders the contact page route with browser-detected English locale', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /let.s talk about a piece/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /hola@omstudio.mx/i })).toBeInTheDocument();
  });

  it('renders the components showroom route', () => {
    render(
      <MemoryRouter initialEntries={['/en/components']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Components' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /product card/i })).toBeInTheDocument();
  });

  it('renders gallery availability labels in the English route locale', () => {
    render(
      <MemoryRouter initialEntries={['/en/gallery']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getAllByText(/available|sold/i).length).toBeGreaterThan(0);
  });

  it('hides gallery item details until each card is expanded independently', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <MemoryRouter initialEntries={['/en/gallery']}>
        <App />
      </MemoryRouter>,
    );

    const productCards = container.querySelectorAll('.product-card');
    const firstCard = within(productCards[0] as HTMLElement);
    const secondCard = within(productCards[1] as HTMLElement);

    expect(productCards[0]).not.toHaveClass('is-flipped');
    expect(productCards[1]).not.toHaveClass('is-flipped');
    expect(productCards[0].querySelector('.product-card-face-back')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
    expect(productCards[1].querySelector('.product-card-face-back')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
    expect(productCards[0].querySelectorAll('img')).toHaveLength(1);
    expect(productCards[0].querySelector('.product-card-face-back img')).toBeNull();

    await user.click(firstCard.getByRole('button', { name: 'Show more' }));

    expect(productCards[0]).toHaveClass('is-flipped');
    expect(productCards[1]).not.toHaveClass('is-flipped');
    expect(firstCard.getByRole('button', { name: 'Show less' })).toBeInTheDocument();
    expect(productCards[0].querySelector('.product-card-face-back')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
    expect(productCards[1].querySelector('.product-card-face-back')).toHaveAttribute(
      'aria-hidden',
      'true',
    );

    await user.click(secondCard.getByRole('button', { name: 'Show more' }));

    expect(productCards[0]).toHaveClass('is-flipped');
    expect(productCards[1]).toHaveClass('is-flipped');
    expect(secondCard.getByRole('button', { name: 'Show less' })).toBeInTheDocument();
    expect(productCards[1].querySelector('.product-card-face-back')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
    expect(productCards[1].querySelector('.product-card-face-back img')).toBeNull();
  });

  it('only marks Home as active on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/en']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('active');
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveClass('active');
  });

  it('does not keep Home active on another primary navigation route', () => {
    render(
      <MemoryRouter initialEntries={['/en/about']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass('active');
    expect(screen.getByRole('link', { name: 'About' })).toHaveClass('active');
  });

  it('renders the catch-all not found route with browser-detected English locale', () => {
    render(
      <MemoryRouter initialEntries={['/missing-page']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /piece not found/i })).toBeInTheDocument();
  });
});
