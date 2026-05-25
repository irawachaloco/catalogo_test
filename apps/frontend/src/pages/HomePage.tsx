import { Link } from 'react-router-dom';

import { CurrentCollection } from '../components/home/CurrentCollection';
import { StudioOverlayBanner } from '../components/home/StudioOverlayBanner';
import { StudioVideo } from '../components/home/StudioVideo';
import { getFeaturedProduct, getPageContent } from '../content/selectors';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

const studioBannerImageUrl = `${import.meta.env.BASE_URL}images/humo-banner-2026.jpg`;
const homeStudioBannerCopy = {
  eyebrow: 'Humo Estudio',
  title: 'Hecho en taller, en series pequeñas',
  body: 'Cerámica hecha a mano para la vida cotidiana y los espacios que la acompañan: piezas simples que encuentran belleza en la textura de la tierra.',
};

export function HomePage() {
  const { locale, getLocalizedPath } = useLocale();
  const pageContent = getPageContent(locale);
  const featuredProduct = getFeaturedProduct(locale);

  return (
    <div className="page-stack">
      <StudioOverlayBanner
        imageUrl={studioBannerImageUrl}
        eyebrow={homeStudioBannerCopy.eyebrow}
        title={homeStudioBannerCopy.title}
        body={homeStudioBannerCopy.body}
      />

      <section className="hero hero-home">
        <div className="hero-copy">
          <p className="eyebrow">{getUiText('featuredLabel', locale)}</p>
          <h1>{pageContent.heroTitle}</h1>
          <div className="copy-stack">
            {pageContent.heroBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="button-link" to={getLocalizedPath('/gallery')}>
              {getUiText('viewGallery', locale)}
            </Link>
            <Link className="button-link button-link-secondary" to={getLocalizedPath('/about')}>
              {getUiText('learnMore', locale)}
            </Link>
          </div>
        </div>
        <div className="hero-visual panel">
          <img
            src={featuredProduct.primaryImageUrl}
            srcSet={featuredProduct.primaryImageSrcSet}
            sizes={featuredProduct.primaryImageSizes}
            alt={featuredProduct.name}
          />
          <div className="hero-visual-copy">
            <h2>{featuredProduct.name}</h2>
            <p>{featuredProduct.description}</p>
            <p className="hero-detail-line">{featuredProduct.availabilityLabel}</p>
          </div>
        </div>
      </section>

      <CurrentCollection />

      <StudioVideo
        title={pageContent.studioVideoTitle}
        body={pageContent.studioVideoBody}
        embedUrl={pageContent.studioVideoEmbedUrl}
        watchUrl={pageContent.studioVideoWatchUrl}
        watchLabel={getUiText('watchOnYoutube', locale)}
      />
    </div>
  );
}
