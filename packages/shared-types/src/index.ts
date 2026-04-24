export type SupportedLocale = 'es' | 'en';

export type AvailabilityStatus = 'available' | 'sold';

export interface LocalizedText {
  es: string;
  en: string;
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

export interface InquiryPayload {
  productId: string;
  name: string;
  email: string;
  message: string;
}
