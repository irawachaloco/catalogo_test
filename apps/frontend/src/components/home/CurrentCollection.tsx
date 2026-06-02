import { Link } from 'react-router-dom';

import { currentCollectionImageAssets } from '../../content/imageAssets';
import { getLocalizedText } from '../../content/selectors';
import { useLocale } from '../../features/i18n/locale';

const collectionCopy = {
  eyebrow: 'Current Collection',
  name: 'Corteza',
  description:
    'A series that explores surfaces reminiscent of tree bark, dry earth, and the natural cracks of the landscape.',
  cta: 'Explore collection →',
};

export function CurrentCollection() {
  const { locale, getLocalizedPath } = useLocale();

  return (
    <section className="current-collection panel" aria-labelledby="current-collection-title">
      <div className="current-collection-copy">
        <p className="eyebrow">{collectionCopy.eyebrow}</p>
        <h2 id="current-collection-title">{collectionCopy.name}</h2>
        <p>{collectionCopy.description}</p>
        <Link className="inline-link current-collection-link" to={getLocalizedPath('/coleccion')}>
          {collectionCopy.cta}
        </Link>
      </div>

      <div className="current-collection-gallery" aria-label="Corteza collection images">
        {currentCollectionImageAssets.map((image) => (
          <Link
            className="current-collection-image-link"
            key={image.id}
            to={getLocalizedPath('/coleccion')}
          >
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              alt={getLocalizedText(image.alt, locale)}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
