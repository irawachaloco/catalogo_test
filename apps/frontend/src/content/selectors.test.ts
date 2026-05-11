import { describe, expect, it } from 'vitest';

import {
  defaultLocale,
  getAvailabilityLabel,
  getCatalogSummary,
  getNavigation,
  getPageContent,
  getProductById,
} from './selectors';

describe('content selectors', () => {
  it('uses spanish as the default locale', () => {
    expect(defaultLocale).toBe('es');
  });

  it('returns localized navigation labels', () => {
    expect(getNavigation('en')).toEqual([
      { id: 'gallery', label: 'Gallery', href: '/gallery' },
      { id: 'about', label: 'About', href: '/about' },
      { id: 'contact', label: 'Contact', href: '/contact' },
      { id: 'components', label: 'Components', href: '/components' },
    ]);
  });

  it('maps product details into locale-specific values', () => {
    const product = getProductById('iron-oxide-vase', 'es');

    expect(product).toMatchObject({
      id: 'iron-oxide-vase',
      name: 'Vaso Oxido de Hierro',
      material: 'Gres con esmalte de oxido de hierro, cocido a 1186 C',
      availabilityLabel: 'Disponible',
    });
    expect(product?.primaryImageSrcSet).toContain('iron-oxide-vase-640w.jpg 640w');
  });

  it('resolves public product images from the configured app base path', () => {
    const product = getProductById('luna-vessel', 'es');

    expect(product?.primaryImageUrl).toBe(
      `${import.meta.env.BASE_URL}images/products/luna-vessel-01.jpg`.replace(/\/{2,}/g, '/'),
    );
  });

  it('exposes static page copy and image strategy metadata', () => {
    const pageContent = getPageContent('en');
    const catalogSummary = getCatalogSummary();

    expect(pageContent.heroTitle).toContain('Contemporary ceramics');
    expect(pageContent.studioBannerTitle).toBe('Made in the studio, in small batches');
    expect(pageContent.studioVideoEmbedUrl).toBe(
      'https://www.youtube.com/embed/hca7uYPtCuI?autoplay=1&mute=1&playsinline=1',
    );
    expect(catalogSummary).toMatchObject({
      totalProducts: 4,
      availableProducts: 3,
      soldProducts: 1,
      imageStrategy: {
        baseDirectory: 'public/images/products',
        placeholderMode: 'public-files-with-inline-svg-placeholders',
      },
    });
  });

  it('localizes availability labels', () => {
    expect(getAvailabilityLabel('sold', 'es')).toBe('Vendido');
  });
});
