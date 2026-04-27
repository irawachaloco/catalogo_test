export type SupportedLocale = 'es' | 'en';

export type AvailabilityStatus = 'available' | 'sold';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface LocalizedRichText {
  es: string[];
  en: string[];
}

export interface ImageAsset {
  id: string;
  src: string;
  storagePath: string;
  alt: LocalizedText;
}

export interface ProductSummary {
  id: string;
  name: LocalizedText;
  price: number;
  availability: AvailabilityStatus;
  primaryImageUrl: string;
}

export interface ProductDetail extends ProductSummary {
  description?: LocalizedText;
  dimensions: LocalizedText;
  material: LocalizedText;
  imageUrls: string[];
}

export interface SiteNavigationItem {
  id: string;
  label: LocalizedText;
  href: string;
}

export interface SitePageContent {
  heroTitle: LocalizedText;
  heroBody: LocalizedRichText;
  studioVideoTitle: LocalizedText;
  studioVideoBody: LocalizedText;
  studioVideoEmbedUrl: string;
  studioVideoWatchUrl: string;
  galleryIntro: LocalizedText;
  aboutTitle: LocalizedText;
  aboutBody: LocalizedRichText;
  contactTitle: LocalizedText;
  contactBody: LocalizedRichText;
  contactEmail: string;
  instagramUrl: string;
  navigation: SiteNavigationItem[];
}

export interface InquiryPayload {
  productId: string;
  name: string;
  email: string;
  message: string;
}
