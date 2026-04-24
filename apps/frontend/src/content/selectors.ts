import {
  type AvailabilityStatus,
  type LocalizedRichText,
  type LocalizedText,
  type ProductDetail,
  type SupportedLocale,
} from '@om-studio/shared-types';

import { imageAssetStrategy } from './imageAssets';
import { productSeedData } from './products';
import { siteContent } from './siteContent';

export interface LocalizedProductDetail
  extends Omit<ProductDetail, 'name' | 'description' | 'dimensions' | 'material'> {
  name: string;
  description?: string;
  dimensions: string;
  material: string;
  availabilityLabel: string;
}

const availabilityLabels: Record<AvailabilityStatus, LocalizedText> = {
  available: {
    es: 'Disponible',
    en: 'Available',
  },
  sold: {
    es: 'Vendido',
    en: 'Sold',
  },
};

export const defaultLocale: SupportedLocale = 'es';

export const getLocalizedText = (value: LocalizedText, locale: SupportedLocale) => value[locale];

export const getLocalizedRichText = (
  value: LocalizedRichText,
  locale: SupportedLocale,
) => value[locale];

export const getAvailabilityLabel = (
  status: AvailabilityStatus,
  locale: SupportedLocale,
) => getLocalizedText(availabilityLabels[status], locale);

export const getNavigation = (locale: SupportedLocale) =>
  siteContent.navigation.map((item) => ({
    ...item,
    label: getLocalizedText(item.label, locale),
  }));

export const getPageContent = (locale: SupportedLocale) => ({
  heroTitle: getLocalizedText(siteContent.heroTitle, locale),
  heroBody: getLocalizedRichText(siteContent.heroBody, locale),
  galleryIntro: getLocalizedText(siteContent.galleryIntro, locale),
  aboutTitle: getLocalizedText(siteContent.aboutTitle, locale),
  aboutBody: getLocalizedRichText(siteContent.aboutBody, locale),
  contactTitle: getLocalizedText(siteContent.contactTitle, locale),
  contactBody: getLocalizedRichText(siteContent.contactBody, locale),
  contactEmail: siteContent.contactEmail,
  instagramUrl: siteContent.instagramUrl,
});

export const listProducts = (locale: SupportedLocale): LocalizedProductDetail[] =>
  productSeedData.map((product) => ({
    ...product,
    name: getLocalizedText(product.name, locale),
    description: product.description
      ? getLocalizedText(product.description, locale)
      : undefined,
    dimensions: getLocalizedText(product.dimensions, locale),
    material: getLocalizedText(product.material, locale),
    availabilityLabel: getAvailabilityLabel(product.availability, locale),
  }));

export const getFeaturedProduct = (locale: SupportedLocale) => listProducts(locale)[0];

export const getProductById = (
  productId: string,
  locale: SupportedLocale,
): LocalizedProductDetail | undefined => {
  const product = productSeedData.find((entry) => entry.id === productId);

  if (!product) {
    return undefined;
  }

  return {
    ...product,
    name: getLocalizedText(product.name, locale),
    description: product.description
      ? getLocalizedText(product.description, locale)
      : undefined,
    dimensions: getLocalizedText(product.dimensions, locale),
    material: getLocalizedText(product.material, locale),
    availabilityLabel: getAvailabilityLabel(product.availability, locale),
  };
};

export const getCatalogSummary = () => ({
  totalProducts: productSeedData.length,
  availableProducts: productSeedData.filter((product) => product.availability === 'available').length,
  soldProducts: productSeedData.filter((product) => product.availability === 'sold').length,
  imageStrategy: imageAssetStrategy,
});
