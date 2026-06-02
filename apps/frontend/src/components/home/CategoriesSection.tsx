import { Link } from 'react-router-dom';

import { currentCollectionImageAssets } from '../../content/imageAssets';
import { getLocalizedText } from '../../content/selectors';
import { useLocale } from '../../features/i18n/locale';

const categories = [
  {
    id: 'mesa',
    title: 'Mesa',
    description: 'Platos, vasos, tazas y bowls.',
    cta: 'Ver mesa',
    href: '/gallery',
    image: currentCollectionImageAssets[1],
  },
  {
    id: 'objetos',
    title: 'Objetos',
    description: 'Jarrones, contenedores y piezas ornamentales.',
    cta: 'Ver objetos',
    href: '/gallery',
    image: currentCollectionImageAssets[2],
  },
  {
    id: 'series-pequenas',
    title: 'Series pequeñas',
    description: 'Piezas disponibles por colección y temporada.',
    cta: 'Ver series pequeñas',
    href: '/coleccion',
    image: currentCollectionImageAssets[0],
  },
];

export function CategoriesSection() {
  const { locale, getLocalizedPath } = useLocale();

  return (
    <section className="categories-section panel" aria-label="Categories">
      <div className="category-card-grid">
        {categories.map((category) => (
          <Link
            className="category-card"
            key={category.id}
            to={getLocalizedPath(category.href)}
            aria-label={`${category.cta}: ${category.description}`}
          >
            <img
              src={category.image.src}
              srcSet={category.image.srcSet}
              sizes={category.image.sizes}
              alt={getLocalizedText(category.image.alt, locale)}
              loading="lazy"
            />
            <div className="category-card-copy">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="category-card-cta" aria-hidden="true">
                <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
