import { type SupportedLocale } from '@om-studio/shared-types';

export const uiCopy = {
  brandTagline: {
    es: 'Estudio de cerámica | Ciudad de México',
    en: 'Ceramics studio | Mexico City',
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
  showMore: {
    es: 'Mostrar mas',
    en: 'Show more',
  },
  showLess: {
    es: 'Mostrar menos',
    en: 'Show less',
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
    es: 'Cerámica hecha en series cortas',
    en: 'Ceramics made in short runs',
  },
  contactHeading: {
    es: 'Hablemos de una pieza',
    en: 'Let’s talk about a piece',
  },
  componentsHeading: {
    es: 'Components',
    en: 'Components',
  },
  componentsIntro: {
    es: 'Showroom de componentes reutilizables que forman la experiencia pública del sitio.',
    en: 'Showroom of reusable components that shape the public site experience.',
  },
  componentFullWidthBanner: {
    es: 'Banner de ancho completo',
    en: 'Full-width banner',
  },
  componentStudioBanner: {
    es: 'Banner con texto inferior',
    en: 'Banner with text below',
  },
  componentStudioOverlayBanner: {
    es: 'Banner con texto superpuesto',
    en: 'Banner with overlay text',
  },
  componentProductCard: {
    es: 'Tarjeta de producto',
    en: 'Product card',
  },
  componentStudioVideo: {
    es: 'Video de taller',
    en: 'Studio video',
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
  footerLanguageLabel: {
    es: 'Idioma',
    en: 'Language',
  },
  localeLabel: {
    es: 'Idioma',
    en: 'Language',
  },
  menuLabel: {
    es: 'Menu',
    en: 'Menu',
  },
  openMenuLabel: {
    es: 'Abrir menu',
    en: 'Open menu',
  },
  closeMenuLabel: {
    es: 'Cerrar menu',
    en: 'Close menu',
  },
  primaryNavigationLabel: {
    es: 'Navegacion principal',
    en: 'Primary navigation',
  },
} satisfies Record<string, Record<SupportedLocale, string>>;

export const getUiText = (key: keyof typeof uiCopy, locale: SupportedLocale) => uiCopy[key][locale];
