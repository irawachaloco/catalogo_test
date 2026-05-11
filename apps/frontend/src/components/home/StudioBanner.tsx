interface StudioBannerProps {
  imageUrl: string;
  eyebrow?: string;
  title: string;
  body: string;
}

export function StudioBanner({ imageUrl, eyebrow = 'OM Studio', title, body }: StudioBannerProps) {
  return (
    <section className="studio-banner panel">
      <img className="studio-banner-image" src={imageUrl} alt="" />
      <div className="studio-banner-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
