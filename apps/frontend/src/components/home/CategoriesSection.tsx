import { Link } from 'react-router-dom';

import { categoryImageAssets } from '../../content/imageAssets';
import { getLocalizedText } from '../../content/selectors';
import { useLocale } from '../../features/i18n/locale';

const categories = [
  {
    id: 'mesa',
    title: 'Mesa',
    description: 'Platos, vasos, tazas y bowls.',
    cta: 'Ver mesa',
    href: '/gallery',
    image: categoryImageAssets.mesa,
  },
  {
    id: 'objetos',
    title: 'Objetos',
    description: 'Jarrones, contenedores y piezas ornamentales.',
    cta: 'Ver objetos',
    href: '/gallery',
    image: categoryImageAssets.objetos,
  },
  {
    id: 'series-pequenas',
    title: 'Series pequeñas',
    description: 'Piezas disponibles por colección y temporada.',
    cta: 'Ver series pequeñas',
    href: '/coleccion',
    image: categoryImageAssets.seriesPequenas,
  },
];

export function CategoriesSection() {
  const { locale, getLocalizedPath } = useLocale();

  return (
    <section className="categories-section panel" aria-labelledby="categories-section-title">
      <div className="categories-section-heading">
        <p className="eyebrow">Categories</p>
        <h2 id="categories-section-title">Categories</h2>
      </div>

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
