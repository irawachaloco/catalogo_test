import { type SitePageContent } from '@om-studio/shared-types';

export const siteContent: SitePageContent = {
  heroTitle: {
    es: 'Ceramica contemporanea para espacios cotidianos',
    en: 'Contemporary ceramics for everyday spaces',
  },
  heroBody: {
    es: [
      'OM Studio presenta piezas unicas de barro, gres y porcelana con enfoque artesanal.',
      'La fase 2 deja listo el contenido bilingue estatico que alimentara la galeria publica.',
    ],
    en: [
      'OM Studio presents one-of-a-kind clay, stoneware, and porcelain pieces with an artisanal approach.',
      'Phase 2 establishes the static bilingual content that will power the public gallery.',
    ],
  },
  galleryIntro: {
    es: 'El catalogo inicial mezcla piezas disponibles y vendidas para validar estructura, copy e imagenes.',
    en: 'The initial catalog mixes available and sold pieces to validate structure, copy, and imagery.',
  },
  aboutTitle: {
    es: 'Sobre el estudio',
    en: 'About the studio',
  },
  aboutBody: {
    es: [
      'OM Studio trabaja series cortas de ceramica utilitaria y decorativa.',
      'El contenido editorial vive en archivos TypeScript para mantener despliegues simples en GitHub Pages.',
    ],
    en: [
      'OM Studio creates short runs of functional and decorative ceramics.',
      'Editorial content lives in TypeScript files to keep GitHub Pages deployments simple.',
    ],
  },
  contactTitle: {
    es: 'Contacto',
    en: 'Contact',
  },
  contactBody: {
    es: [
      'Las consultas del MVP se atenderan por canales publicos compatibles con hosting estatico.',
      'Instagram y correo quedan definidos en contenido para reutilizarse en la futura pagina de contacto.',
    ],
    en: [
      'MVP inquiries will be handled through public channels that work with static hosting.',
      'Instagram and email are defined in content so they can be reused in the future contact page.',
    ],
  },
  contactEmail: 'hola@omstudio.mx',
  instagramUrl: 'https://www.instagram.com/omstudio.mx/',
  navigation: [
    {
      id: 'gallery',
      label: { es: 'Galeria', en: 'Gallery' },
      href: '/gallery',
    },
    {
      id: 'about',
      label: { es: 'Sobre OM Studio', en: 'About' },
      href: '/about',
    },
    {
      id: 'contact',
      label: { es: 'Contacto', en: 'Contact' },
      href: '/contact',
    },
  ],
};
