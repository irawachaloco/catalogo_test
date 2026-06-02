import { Link } from 'react-router-dom';

import { CategoriesSection } from '../components/home/CategoriesSection';
import { CurrentCollection } from '../components/home/CurrentCollection';
import { FullWidthOverlayBanner } from '../components/home/FullWidthOverlayBanner';
import { FullWidthBanner } from '../components/home/FullWidthBanner';
import { HeroSection } from '../components/home/HeroSection';
import { MaterialsProcessSection } from '../components/home/MaterialsProcessSection';
import { StudioBanner } from '../components/home/StudioBanner';
import { StudioOverlayBanner } from '../components/home/StudioOverlayBanner';
import { StudioVideo } from '../components/home/StudioVideo';
import { ProductCard } from '../components/products/ProductCard';
import { getFeaturedProduct, getPageContent } from '../content/selectors';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

const studioBannerImageUrl = `${import.meta.env.BASE_URL}images/humo-banner-2026.jpg`;
const pencilCupsHeroImage1280Url = `${import.meta.env.BASE_URL}images/hero/lapiceros-2-1280w.jpg`;
const pencilCupsHeroImage1920Url = `${import.meta.env.BASE_URL}images/hero/lapiceros-2-1920w.jpg`;
const pencilCupHeroImage1280Url = `${import.meta.env.BASE_URL}images/hero/lapiceros-1280w.jpg`;
const pencilCupHeroImage1920Url = `${import.meta.env.BASE_URL}images/hero/lapiceros-1920w.jpg`;
const heroImages = [
  {
    src: pencilCupsHeroImage1920Url,
    srcSet: `${pencilCupsHeroImage1280Url} 1280w, ${pencilCupsHeroImage1920Url} 1920w`,
    sizes: '(max-width: 880px) 100vw, 54vw',
    alt: 'Lapiceros de cerámica hechos a mano',
  },
  {
    src: pencilCupHeroImage1920Url,
    srcSet: `${pencilCupHeroImage1280Url} 1280w, ${pencilCupHeroImage1920Url} 1920w`,
    sizes: '(max-width: 880px) 100vw, 54vw',
    alt: 'Lapicero de cerámica hecho a mano',
  },
];

export function ComponentsPage() {
  const { locale, getLocalizedPath } = useLocale();
  const pageContent = getPageContent(locale);
  const featuredProduct = getFeaturedProduct(locale);

  return (
    <div className="page-stack">
      <section className="page-heading panel">
        <p className="eyebrow">Showroom</p>
        <h1>{getUiText('componentsHeading', locale)}</h1>
        <p>{getUiText('componentsIntro', locale)}</p>
      </section>

      <section className="component-showroom">
        <article className="component-demo">
          <h2>Hero</h2>
          <HeroSection
            title={getUiText('homeHeroTitle', locale)}
            body={[
              getUiText('homeHeroBodyPrimary', locale),
              getUiText('homeHeroBodySecondary', locale),
            ]}
            imageUrl={pencilCupsHeroImage1920Url}
            imageSrcSet={`${pencilCupsHeroImage1280Url} 1280w, ${pencilCupsHeroImage1920Url} 1920w`}
            imageSizes="(max-width: 880px) 100vw, 54vw"
            imageAlt={heroImages[0].alt}
            images={heroImages}
            piecesHref={getLocalizedPath('/gallery')}
            piecesLabel={getUiText('viewPieces', locale)}
            studioHref={getLocalizedPath('/about')}
            studioLabel={getUiText('learnStudio', locale)}
            sliderLabel={getUiText('heroImagesLabel', locale)}
            showImageLabel={(index) => `${getUiText('showHeroImage', locale)} ${index}`}
          />
        </article>

        <article className="component-demo component-demo-full-bleed">
          <h2>{getUiText('componentFullWidthBanner', locale)}</h2>
          <FullWidthBanner
            imageUrl={studioBannerImageUrl}
            label={getUiText('componentFullWidthBanner', locale)}
          />
        </article>

        <article className="component-demo">
          <h2>{getUiText('componentStudioBanner', locale)}</h2>
          <StudioBanner
            imageUrl={studioBannerImageUrl}
            title={pageContent.studioBannerTitle}
            body={pageContent.studioBannerBody}
          />
        </article>

        <article className="component-demo">
          <h2>{getUiText('componentStudioOverlayBanner', locale)}</h2>
          <StudioOverlayBanner
            imageUrl={studioBannerImageUrl}
            title={pageContent.studioBannerTitle}
            body={pageContent.studioBannerBody}
          />
        </article>

        <article className="component-demo component-demo-full-bleed">
          <h2>{getUiText('componentFullWidthOverlayBanner', locale)}</h2>
          <FullWidthOverlayBanner
            imageUrl={studioBannerImageUrl}
            title={pageContent.studioBannerTitle}
            body={pageContent.studioBannerBody}
            ctaHref={getLocalizedPath('/about')}
            ctaLabel={getUiText('learnMore', locale)}
          />
        </article>

        <article className="component-demo component-demo-full-bleed">
          <h2>{getUiText('componentFullWidthOverlayBannerReverse', locale)}</h2>
          <FullWidthOverlayBanner
            imageUrl={studioBannerImageUrl}
            title={pageContent.studioBannerTitle}
            body={pageContent.studioBannerBody}
            ctaHref={getLocalizedPath('/about')}
            ctaLabel={getUiText('learnMore', locale)}
            align="right"
          />
        </article>

        <article className="component-demo component-demo-card">
          <h2>{getUiText('componentProductCard', locale)}</h2>
          <ProductCard product={featuredProduct} />
        </article>

        <article className="component-demo">
          <h2>Featured Piece</h2>
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
        </article>

        <article className="component-demo">
          <h2>Current Collection</h2>
          <CurrentCollection />
        </article>

        <article className="component-demo">
          <h2>Categories</h2>
          <CategoriesSection />
        </article>

        <article className="component-demo">
          <h2>Materials and Glazes / Process</h2>
          <MaterialsProcessSection />
        </article>

        <article className="component-demo">
          <h2>{getUiText('componentStudioVideo', locale)}</h2>
          <StudioVideo
            title={pageContent.studioVideoTitle}
            body={pageContent.studioVideoBody}
            embedUrl={pageContent.studioVideoEmbedUrl}
            watchUrl={pageContent.studioVideoWatchUrl}
            watchLabel={getUiText('watchOnYoutube', locale)}
          />
        </article>
      </section>
    </div>
  );
}
