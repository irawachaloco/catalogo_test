import { FullWidthBanner } from '../components/home/FullWidthBanner';
import { StudioBanner } from '../components/home/StudioBanner';
import { StudioOverlayBanner } from '../components/home/StudioOverlayBanner';
import { StudioVideo } from '../components/home/StudioVideo';
import { ProductCard } from '../components/products/ProductCard';
import { getFeaturedProduct, getPageContent } from '../content/selectors';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

const studioBannerImageUrl = `${import.meta.env.BASE_URL}images/humo-banner-2026.jpg`;

export function ComponentsPage() {
  const { locale } = useLocale();
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

        <article className="component-demo component-demo-card">
          <h2>{getUiText('componentProductCard', locale)}</h2>
          <ProductCard product={featuredProduct} />
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
