import { type ImageAsset } from '@om-studio/shared-types';

const withBasePath = (path: string) => `${import.meta.env.BASE_URL}${path}`.replace(/\/{2,}/g, '/');

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

const createCollectionImageAsset = (
  id: string,
  title: string,
  accent: string,
  base: string,
  alt: ImageAsset['alt'],
): ImageAsset => ({
  id,
  src: createPlaceholderImage(title, accent, base, '#3a2417'),
  storagePath: `images/collections/corteza/${id}.jpg`,
  alt,
});

const createCategoryImageAsset = (
  id: string,
  title: string,
  accent: string,
  base: string,
  alt: ImageAsset['alt'],
): ImageAsset => ({
  id,
  src: createPlaceholderImage(title, accent, base, '#3a2417'),
  storagePath: `images/categories/${id}.jpg`,
  alt,
});

const createProcessImageAsset = (
  id: string,
  title: string,
  accent: string,
  base: string,
  alt: ImageAsset['alt'],
): ImageAsset => ({
  id,
  src: createPlaceholderImage(title, accent, base, '#3a2417'),
  storagePath: `images/process/${id}.jpg`,
  alt,
});

const createPublicProductImageAsset = (
  id: string,
  title: string,
  fileName: string,
): ImageAsset => ({
  id,
  src: withBasePath(`images/products/${fileName}`),
  storagePath: `images/products/${fileName}`,
  alt: {
    es: `${title} fotografiada en estudio`,
    en: `${title} photographed in the studio`,
  },
});

const createResponsiveProductImageAsset = (
  id: string,
  title: string,
  baseFileName: string,
): ImageAsset => {
  const variants = [640, 1280].map((width) => {
    const fileName = `${baseFileName}-${width}w.jpg`;

    return {
      width,
      src: withBasePath(`images/products/${fileName}`),
      storagePath: `images/products/${fileName}`,
    };
  });

  return {
    id,
    src: variants[variants.length - 1].src,
    srcSet: variants.map((variant) => `${variant.src} ${variant.width}w`).join(', '),
    sizes: '(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw',
    storagePath: variants[variants.length - 1].storagePath,
    alt: {
      es: `${title} fotografiada en estudio`,
      en: `${title} photographed in the studio`,
    },
    variants,
  };
};

export const imageAssetStrategy = {
  baseDirectory: 'public/images/products',
  derivativeSizes: ['640w', '1280w'],
  format: 'jpg',
  placeholderMode: 'public-files-with-inline-svg-placeholders',
} as const;

export const productImageAssets: Record<string, ImageAsset> = {
  luna: createPublicProductImageAsset('luna', 'Vasija Luna', 'luna-vessel-01.jpg'),
  ironOxideVase: createResponsiveProductImageAsset(
    'iron-oxide-vase',
    'Vaso de oxido de hierro',
    'iron-oxide-vase',
  ),
  tierra: createImageAsset('tierra', 'Cuenco Tierra', '#8f5b3c', '#e8dcc9'),
  rio: createImageAsset('rio', 'Jarron Rio', '#6d8c8b', '#e2ece9'),
};

export const currentCollectionImageAssets: ImageAsset[] = [
  createCollectionImageAsset(
    'corteza-cylindrical-vessel',
    'Corteza vessel slot',
    '#8f5b3c',
    '#e8dcc9',
    {
      es: 'Vaso cilindrico de ceramica de la coleccion Corteza con superficie texturizada',
      en: 'Cylindrical ceramic vessel from the Corteza collection with a textured surface',
    },
  ),
  createCollectionImageAsset(
    'corteza-blue-bowl',
    'Corteza blue bowl slot',
    '#105057',
    '#d8e2df',
    {
      es: 'Cuenco de ceramica de la coleccion Corteza con esmalte azul oscuro jaspeado',
      en: 'Ceramic bowl from the Corteza collection with a dark variegated blue glaze',
    },
  ),
  createCollectionImageAsset(
    'corteza-still-life',
    'Corteza still life slot',
    '#919151',
    '#efe7d8',
    {
      es: 'Composicion de la coleccion Corteza con jarron, pieza pequena y rama seca',
      en: 'Corteza collection composition with a vase, small ceramic piece, and dry branch',
    },
  ),
];

export const categoryImageAssets: Record<string, ImageAsset> = {
  mesa: createCategoryImageAsset('mesa-tableware', 'Mesa category slot', '#8f5b3c', '#e8dcc9', {
    es: 'Platos, tazas y cuencos de ceramica para mesa',
    en: 'Ceramic plates, cups, and bowls for the table',
  }),
  objetos: createCategoryImageAsset('objetos-vases', 'Objetos category slot', '#919151', '#efe7d8', {
    es: 'Jarrones, contenedores y piezas ornamentales de ceramica',
    en: 'Ceramic vases, jars, and ornamental pieces',
  }),
  seriesPequenas: createCategoryImageAsset(
    'series-pequenas-collection',
    'Series pequenas category slot',
    '#105057',
    '#d8e2df',
    {
      es: 'Piezas de ceramica disponibles por coleccion y temporada',
      en: 'Ceramic pieces available by collection and season',
    },
  ),
};

export const processImageAssets: Record<string, ImageAsset> = {
  clayBodyTexture: createProcessImageAsset(
    'clay-body-texture',
    'Clay texture slot',
    '#8f5b3c',
    '#e8dcc9',
    {
      es: 'Textura de barro crudo con herramientas de taller',
      en: 'Raw clay texture with studio tools',
    },
  ),
  drying: createProcessImageAsset('drying-shelf', 'Drying shelf slot', '#919151', '#efe7d8', {
    es: 'Piezas de ceramica sin cocer reposando durante el secado',
    en: 'Unfired ceramic pieces resting during drying',
  }),
  glazing: createProcessImageAsset('glazing-tools', 'Glazing tools slot', '#105057', '#d8e2df', {
    es: 'Herramientas y superficie de trabajo para aplicar esmalte ceramico',
    en: 'Tools and work surface for applying ceramic glaze',
  }),
  firing: createProcessImageAsset('kiln-firing', 'Kiln firing slot', '#7e3f2c', '#ead8c8', {
    es: 'Detalle calido del horno y el proceso de quema ceramica',
    en: 'Warm detail of the kiln and ceramic firing process',
  }),
};
