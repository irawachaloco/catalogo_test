import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroImage {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
}

interface HeroSectionProps {
  title: string;
  body: string[];
  imageUrl: string;
  imageAlt: string;
  imageSrcSet?: string;
  imageSizes?: string;
  images?: HeroImage[];
  piecesHref: string;
  piecesLabel: string;
  studioHref: string;
  studioLabel: string;
  sliderLabel: string;
  showImageLabel: (index: number) => string;
}

export function HeroSection({
  title,
  body,
  imageUrl,
  imageAlt,
  imageSrcSet,
  imageSizes,
  images,
  piecesHref,
  piecesLabel,
  studioHref,
  studioLabel,
  sliderLabel,
  showImageLabel,
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
        <h1 id="editorial-hero-title">{title}</h1>
        <div className="copy-stack">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="hero-actions">
          <Link className="button-link" to={piecesHref}>
            {piecesLabel}
          </Link>
          <Link className="button-link button-link-secondary" to={studioHref}>
            {studioLabel}
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
          <div className="editorial-hero-slider-controls" aria-label={sliderLabel}>
            <div className="editorial-hero-slider-dots">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  className={index === activeSlideIndex ? 'is-active' : undefined}
                  key={slide.src}
                  onClick={() => setActiveSlideIndex(index)}
                  aria-label={showImageLabel(index + 1)}
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
