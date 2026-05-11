interface StudioOverlayBannerProps {
  imageUrl: string;
  eyebrow?: string;
  title: string;
  body: string;
}

export function StudioOverlayBanner({
  imageUrl,
  eyebrow = 'OM Studio',
  title,
  body,
}: StudioOverlayBannerProps) {
  return (
    <section className="studio-overlay-banner panel">
      <img className="studio-overlay-banner-image" src={imageUrl} alt="" />
      <div className="studio-overlay-banner-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
