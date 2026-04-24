import { listProducts, getPageContent } from '../content/selectors';
import { ProductCard } from '../components/products/ProductCard';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

export function GalleryPage() {
  const { locale } = useLocale();
  const products = listProducts(locale);
  const pageContent = getPageContent(locale);

  return (
    <div className="page-stack">
      <section className="page-heading panel">
        <p className="eyebrow">{getUiText('galleryHeading', locale)}</p>
        <h1>{getUiText('gallerySubheading', locale)}</h1>
        <p>{pageContent.galleryIntro}</p>
      </section>

      <section className="product-grid" aria-label={getUiText('galleryHeading', locale)}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
