import { useState } from 'react';

import { type LocalizedProductDetail } from '../../content/selectors';
import { useLocale } from '../../features/i18n/locale';
import { getUiText } from '../../features/i18n/uiCopy';

const getPrice = (price: number, locale: 'es' | 'en') =>
  new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(price);

interface ProductCardProps {
  product: LocalizedProductDetail;
}

export function ProductCard({ product }: ProductCardProps) {
  const { locale } = useLocale();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article className={`product-card${isFlipped ? ' is-flipped' : ''}`}>
      <div className="product-card-body product-card-flip-shell">
        <div className="product-card-flip">
          <section className="product-card-face product-card-face-front" aria-hidden={isFlipped}>
            <img
              src={product.primaryImageUrl}
              srcSet={product.primaryImageSrcSet}
              sizes={product.primaryImageSizes}
              alt={product.name}
              className="product-card-image"
            />
            <div className="product-card-header">
              <h3>{product.name}</h3>
              <span className={`availability-chip availability-${product.availability}`}>
                {product.availabilityLabel}
              </span>
            </div>
            <dl className="product-facts product-facts-summary">
              <div>
                <dt>{getUiText('productPrice', locale)}</dt>
                <dd>{getPrice(product.price, locale)}</dd>
              </div>
            </dl>
            <button
              type="button"
              className="inline-link product-card-toggle"
              aria-pressed={isFlipped}
              onClick={() => setIsFlipped(true)}
              tabIndex={isFlipped ? -1 : 0}
            >
              {getUiText('showMore', locale)}
            </button>
          </section>

          <section className="product-card-face product-card-face-back" aria-hidden={!isFlipped}>
            <div className="product-card-header">
              <h3>{product.name}</h3>
              <span className={`availability-chip availability-${product.availability}`}>
                {product.availabilityLabel}
              </span>
            </div>
            {product.description ? <p>{product.description}</p> : null}
            <dl className="product-facts">
              <div>
                <dt>{getUiText('productMaterial', locale)}</dt>
                <dd>{product.material}</dd>
              </div>
            </dl>
            <button
              type="button"
              className="inline-link product-card-toggle"
              aria-pressed={isFlipped}
              onClick={() => setIsFlipped(false)}
              tabIndex={isFlipped ? 0 : -1}
            >
              {getUiText('showLess', locale)}
            </button>
          </section>
        </div>
      </div>
    </article>
  );
}
