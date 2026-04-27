import { type ImageAsset } from '@om-studio/shared-types';

const encodeSvg = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const createPlaceholderImage = (
  title: string,
  accent: string,
  base: string,
  text: string,
) =>
  encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${title}">
      <rect width="1200" height="900" fill="${base}" />
      <circle cx="290" cy="260" r="180" fill="${accent}" fill-opacity="0.18" />
      <circle cx="930" cy="650" r="240" fill="${accent}" fill-opacity="0.12" />
      <rect x="168" y="142" width="864" height="616" rx="48" fill="white" fill-opacity="0.32" />
      <text x="600" y="430" text-anchor="middle" font-size="78" font-family="Georgia, serif" fill="${text}">
        ${title}
      </text>
      <text x="600" y="515" text-anchor="middle" font-size="32" letter-spacing="8" font-family="Arial, sans-serif" fill="${text}">
        OM STUDIO
      </text>
    </svg>
  `);

const createImageAsset = (
  id: string,
  title: string,
  accent: string,
  base: string,
): ImageAsset => ({
  id,
  src: createPlaceholderImage(title, accent, base, '#3a2417'),
  storagePath: `images/products/${id}.jpg`,
  alt: {
    es: `${title} fotografiada en estudio`,
    en: `${title} photographed in the studio`,
  },
});

const createPublicProductImageAsset = (
  id: string,
  title: string,
  fileName: string,
): ImageAsset => ({
  id,
  src: `/images/products/${fileName}`,
  storagePath: `images/products/${fileName}`,
  alt: {
    es: `${title} fotografiada en estudio`,
    en: `${title} photographed in the studio`,
  },
});

export const imageAssetStrategy = {
  baseDirectory: 'public/images/products',
  derivativeSizes: ['640w', '1280w'],
  format: 'jpg',
  placeholderMode: 'public-files-with-inline-svg-placeholders',
} as const;

export const productImageAssets: Record<string, ImageAsset> = {
  luna: createPublicProductImageAsset('luna', 'Vasija Luna', 'luna-vessel-01.jpg'),
  tierra: createImageAsset('tierra', 'Cuenco Tierra', '#8f5b3c', '#e8dcc9'),
  rio: createImageAsset('rio', 'Jarron Rio', '#6d8c8b', '#e2ece9'),
};
