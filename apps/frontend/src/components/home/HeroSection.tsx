import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroImage {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
}

interface HeroSectionProps {
  imageUrl: string;
  imageAlt: string;
  imageSrcSet?: string;
  imageSizes?: string;
  images?: HeroImage[];
  piecesHref: string;
  studioHref: string;
}

export function HeroSection({
  imageUrl,
  imageAlt,
  imageSrcSet,
  imageSizes,
  images,
  piecesHref,
  studioHref,
}: HeroSectionProps) {
  const slides = images?.length
    ? images
    : [{ src: imageUrl, alt: imageAlt, srcSet: imageSrcSet, sizes: imageSizes }];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = slides[activeSlideIndex] ?? slides[0];
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) =>
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
      );
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, [hasMultipleSlides, slides.length]);

  return (
    <section className="editorial-hero" aria-labelledby="editorial-hero-title">
      <div className="editorial-hero-copy">
        <h1 id="editorial-hero-title">
          Cerámica hecha a mano para la vida cotidiana y los espacios que la acompañan.
        </h1>
        <div className="copy-stack">
          <p>
            Humo Estudio es un micro-taller de cerámica de autor dedicado a crear piezas
            funcionales y ornamentales en gres: tazas, vasos, platos, floreros y objetos para el
            hogar.
          </p>
          <p>
            Cada pieza se trabaja en series pequeñas, con superficies que evocan la tierra
            agrietada, la corteza y la materia transformada por el fuego.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button-link" to={piecesHref}>
            Ver piezas
          </Link>
          <Link className="button-link button-link-secondary" to={studioHref}>
            Conocer el taller
          </Link>
        </div>
      </div>
      <div className="editorial-hero-visual">
        <img
          src={activeSlide.src}
          srcSet={activeSlide.srcSet}
          sizes={activeSlide.sizes}
          alt={activeSlide.alt}
        />
        {hasMultipleSlides ? (
          <div className="editorial-hero-slider-controls" aria-label="Imagenes del Hero">
            <div className="editorial-hero-slider-dots">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  className={index === activeSlideIndex ? 'is-active' : undefined}
                  key={slide.src}
                  onClick={() => setActiveSlideIndex(index)}
                  aria-label={`Mostrar imagen ${index + 1}`}
                  aria-current={index === activeSlideIndex}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
