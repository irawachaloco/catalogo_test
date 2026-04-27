import { type SupportedLocale } from '@om-studio/shared-types';

export const uiCopy = {
  brandTagline: {
    es: 'Piezas de ceramica para habitar y regalar',
    en: 'Ceramic pieces for living with and gifting',
  },
  skipToContent: {
    es: 'Saltar al contenido',
    en: 'Skip to content',
  },
  homeLabel: {
    es: 'Inicio',
    en: 'Home',
  },
  featuredLabel: {
    es: 'Pieza destacada',
    en: 'Featured piece',
  },
  viewGallery: {
    es: 'Ver galeria',
    en: 'View gallery',
  },
  learnMore: {
    es: 'Conocer el estudio',
    en: 'Learn about the studio',
  },
  watchOnYoutube: {
    es: 'Ver en YouTube',
    en: 'Watch on YouTube',
  },
  browseCollection: {
    es: 'Explorar coleccion',
    en: 'Browse collection',
  },
  productDetails: {
    es: 'Ver detalles',
    en: 'View details',
  },
  productPrice: {
    es: 'Precio',
    en: 'Price',
  },
  productAvailability: {
    es: 'Disponibilidad',
    en: 'Availability',
  },
  productMaterial: {
    es: 'Material',
    en: 'Material',
  },
  productDimensions: {
    es: 'Dimensiones',
    en: 'Dimensions',
  },
  galleryHeading: {
    es: 'Galeria',
    en: 'Gallery',
  },
  gallerySubheading: {
    es: 'Catalogo inicial listo para publicarse en GitHub Pages.',
    en: 'Initial catalog ready to be published on GitHub Pages.',
  },
  productInquiry: {
    es: 'Consultar por Instagram',
    en: 'Ask on Instagram',
  },
  productEmail: {
    es: 'Escribir por correo',
    en: 'Send an email',
  },
  aboutHeading: {
    es: 'Ceramica hecha en series cortas',
    en: 'Ceramics made in short runs',
  },
  contactHeading: {
    es: 'Hablemos de una pieza',
    en: 'Let’s talk about a piece',
  },
  backToGallery: {
    es: 'Volver a la galeria',
    en: 'Back to gallery',
  },
  notFoundTitle: {
    es: 'Pieza no encontrada',
    en: 'Piece not found',
  },
  notFoundBody: {
    es: 'La pieza que buscas no existe o aun no fue publicada.',
    en: 'The piece you are looking for does not exist or has not been published yet.',
  },
  footerLine: {
    es: 'Sitio bilingue estatico para el MVP publico de OM Studio.',
    en: 'Static bilingual site for the OM Studio public MVP.',
  },
  localeLabel: {
    es: 'Idioma',
    en: 'Language',
  },
} satisfies Record<string, Record<SupportedLocale, string>>;

export const getUiText = (key: keyof typeof uiCopy, locale: SupportedLocale) => uiCopy[key][locale];
