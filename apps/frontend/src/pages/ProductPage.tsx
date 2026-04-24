import { Link, useParams } from 'react-router-dom';

import { getPageContent, getProductById } from '../content/selectors';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

const getPrice = (price: number, locale: 'es' | 'en') =>
  new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(price);

export function ProductPage() {
  const { locale } = useLocale();
  const pageContent = getPageContent(locale);
  const { productId } = useParams();
  const product = productId ? getProductById(productId, locale) : undefined;

  if (!product) {
    return (
      <section className="panel page-heading">
        <h1>{getUiText('notFoundTitle', locale)}</h1>
        <p>{getUiText('notFoundBody', locale)}</p>
        <Link className="inline-link" to="/gallery">
          {getUiText('backToGallery', locale)}
        </Link>
      </section>
    );
  }

  return (
    <div className="page-stack">
      <Link className="inline-link" to="/gallery">
        {getUiText('backToGallery', locale)}
      </Link>

      <section className="product-detail">
        <div className="product-detail-gallery panel">
          {product.imageUrls.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} alt={product.name} className="product-detail-image" />
          ))}
        </div>

        <div className="panel product-detail-copy">
          <p className="eyebrow">{product.availabilityLabel}</p>
          <h1>{product.name}</h1>
          <p className="product-price">{getPrice(product.price, locale)}</p>
          <p>{product.description}</p>
          <dl className="product-facts product-facts-detail">
            <div>
              <dt>{getUiText('productDimensions', locale)}</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div>
              <dt>{getUiText('productMaterial', locale)}</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>{getUiText('productAvailability', locale)}</dt>
              <dd>{product.availabilityLabel}</dd>
            </div>
          </dl>
          <div className="cta-row">
            <a className="button-link" href={pageContent.instagramUrl} target="_blank" rel="noreferrer">
              {getUiText('productInquiry', locale)}
            </a>
            <a className="button-link button-link-secondary" href={`mailto:${pageContent.contactEmail}`}>
              {getUiText('productEmail', locale)}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
