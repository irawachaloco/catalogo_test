interface FullWidthBannerProps {
  imageUrl: string;
  label: string;
}

export function FullWidthBanner({ imageUrl, label }: FullWidthBannerProps) {
  return (
    <section className="full-width-banner" aria-label={label}>
      <img src={imageUrl} alt="" />
    </section>
  );
}
