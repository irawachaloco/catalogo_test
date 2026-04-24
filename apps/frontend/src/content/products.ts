import { type ProductDetail } from '@om-studio/shared-types';

import { productImageAssets } from './imageAssets';

export const productSeedData: ProductDetail[] = [
  {
    id: 'luna-vessel',
    name: {
      es: 'Vasija Luna',
      en: 'Moon Vessel',
    },
    price: 1850,
    availability: 'available',
    primaryImageUrl: productImageAssets.luna.src,
    description: {
      es: 'Pieza torneada con esmalte marfil y textura suave para arreglos secos o exhibicion.',
      en: 'Wheel-thrown piece with an ivory glaze and soft texture for dry arrangements or display.',
    },
    dimensions: {
      es: '28 cm alto x 18 cm diametro',
      en: '28 cm tall x 18 cm diameter',
    },
    material: {
      es: 'Gres con esmalte brillante',
      en: 'Stoneware with glossy glaze',
    },
    imageUrls: [productImageAssets.luna.src],
  },
  {
    id: 'tierra-bowl',
    name: {
      es: 'Cuenco Tierra',
      en: 'Earth Bowl',
    },
    price: 950,
    availability: 'sold',
    primaryImageUrl: productImageAssets.tierra.src,
    description: {
      es: 'Cuenco de borde abierto con acabado tostado y variacion organica en la superficie.',
      en: 'Open-rim bowl with a toasted finish and organic variation across the surface.',
    },
    dimensions: {
      es: '11 cm alto x 24 cm diametro',
      en: '11 cm tall x 24 cm diameter',
    },
    material: {
      es: 'Barro de alta temperatura',
      en: 'High-fire clay',
    },
    imageUrls: [productImageAssets.tierra.src],
  },
  {
    id: 'rio-pitcher',
    name: {
      es: 'Jarron Rio',
      en: 'River Pitcher',
    },
    price: 1640,
    availability: 'available',
    primaryImageUrl: productImageAssets.rio.src,
    description: {
      es: 'Jarron con asa escultural y paleta azul humo inspirado en corrientes de agua.',
      en: 'Pitcher with a sculptural handle and a smoke-blue palette inspired by river currents.',
    },
    dimensions: {
      es: '25 cm alto x 16 cm diametro',
      en: '25 cm tall x 16 cm diameter',
    },
    material: {
      es: 'Porcelana pigmentada',
      en: 'Pigmented porcelain',
    },
    imageUrls: [productImageAssets.rio.src],
  },
];
