import { Link } from 'react-router-dom';

import { getFeaturedProduct, getPageContent } from '../content/selectors';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

export function HomePage() {
  const { locale } = useLocale();
  const pageContent = getPageContent(locale);
  const featuredProduct = getFeaturedProduct(locale);

  return (
    <div className="page-stack">
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
            <Link className="button-link" to="/gallery">
              {getUiText('viewGallery', locale)}
            </Link>
            <Link className="button-link button-link-secondary" to="/about">
              {getUiText('learnMore', locale)}
            </Link>
          </div>
        </div>
        <div className="hero-visual panel">
          <img src={featuredProduct.primaryImageUrl} alt={featuredProduct.name} />
          <div className="hero-visual-copy">
            <h2>{featuredProduct.name}</h2>
            <p>{featuredProduct.description}</p>
            <p className="hero-detail-line">{featuredProduct.availabilityLabel}</p>
          </div>
        </div>
      </section>

      <section className="studio-video panel">
        <div className="studio-video-copy">
          <p className="eyebrow">OM Studio</p>
          <h2>{pageContent.studioVideoTitle}</h2>
          <p>{pageContent.studioVideoBody}</p>
          <a
            className="inline-link"
            href={pageContent.studioVideoWatchUrl}
            target="_blank"
            rel="noreferrer"
          >
            {getUiText('watchOnYoutube', locale)}
          </a>
        </div>
        <div className="studio-video-frame">
          <iframe
            src={pageContent.studioVideoEmbedUrl}
            title={pageContent.studioVideoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
