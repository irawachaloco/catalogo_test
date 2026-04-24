import { Link } from 'react-router-dom';

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

  return (
    <article className="product-card">
      <img src={product.primaryImageUrl} alt={product.name} className="product-card-image" />
      <div className="product-card-body">
        <div className="product-card-header">
          <h3>{product.name}</h3>
          <span className={`availability-chip availability-${product.availability}`}>
            {product.availabilityLabel}
          </span>
        </div>
        {product.description ? <p>{product.description}</p> : null}
        <dl className="product-facts">
          <div>
            <dt>{getUiText('productPrice', locale)}</dt>
            <dd>{getPrice(product.price, locale)}</dd>
          </div>
          <div>
            <dt>{getUiText('productMaterial', locale)}</dt>
            <dd>{product.material}</dd>
          </div>
        </dl>
        <Link className="inline-link" to={`/product/${product.id}`}>
          {getUiText('productDetails', locale)}
        </Link>
      </div>
    </article>
  );
}
