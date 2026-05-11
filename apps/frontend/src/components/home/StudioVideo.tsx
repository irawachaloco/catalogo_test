interface StudioVideoProps {
  title: string;
  body: string;
  embedUrl: string;
  watchUrl: string;
  watchLabel: string;
}

export function StudioVideo({ title, body, embedUrl, watchUrl, watchLabel }: StudioVideoProps) {
  return (
    <section className="studio-video panel">
      <div className="studio-video-copy">
        <p className="eyebrow">OM Studio</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <a className="inline-link" href={watchUrl} target="_blank" rel="noreferrer">
          {watchLabel}
        </a>
      </div>
      <div className="studio-video-frame">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
