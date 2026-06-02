import { CategoriesSection } from '../components/home/CategoriesSection';
import { CurrentCollection } from '../components/home/CurrentCollection';
import { FullWidthOverlayBanner } from '../components/home/FullWidthOverlayBanner';
import { HeroSection } from '../components/home/HeroSection';
import { MaterialsProcessSection } from '../components/home/MaterialsProcessSection';
import { getPageContent } from '../content/selectors';
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

export function HomePage() {
  const { locale, getLocalizedPath } = useLocale();
  const pageContent = getPageContent(locale);

  return (
    <div className="page-stack">
      <HeroSection
        imageUrl={pencilCupsHeroImage1920Url}
        imageSrcSet={`${pencilCupsHeroImage1280Url} 1280w, ${pencilCupsHeroImage1920Url} 1920w`}
        imageSizes="(max-width: 880px) 100vw, 54vw"
        imageAlt={heroImages[0].alt}
        images={heroImages}
        piecesHref={getLocalizedPath('/gallery')}
        studioHref={getLocalizedPath('/about')}
      />

      <CurrentCollection />

      <CategoriesSection />

      <MaterialsProcessSection />

      <FullWidthOverlayBanner
        imageUrl={studioBannerImageUrl}
        title={pageContent.studioBannerTitle}
        body={pageContent.studioBannerBody}
        ctaHref={getLocalizedPath('/about')}
        ctaLabel={getUiText('learnMore', locale)}
        align="right"
      />
    </div>
  );
}
