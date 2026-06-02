import { Link } from 'react-router-dom';

interface FullWidthOverlayBannerProps {
  imageUrl: string;
  eyebrow?: string;
  title: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
  align?: 'left' | 'right';
}

export function FullWidthOverlayBanner({
  imageUrl,
  eyebrow = 'OM Studio',
  title,
  body,
  ctaHref,
  ctaLabel,
  align = 'left',
}: FullWidthOverlayBannerProps) {
  return (
    <section
      className={`full-width-overlay-banner${align === 'right' ? ' full-width-overlay-banner-reverse' : ''}`}
    >
      <img className="full-width-overlay-banner-image" src={imageUrl} alt="" />
      <div className="studio-overlay-banner-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        {ctaHref && ctaLabel ? (
          <Link className="button-link" to={ctaHref}>
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
