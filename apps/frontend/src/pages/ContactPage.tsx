import { getPageContent } from '../content/selectors';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

export function ContactPage() {
  const { locale } = useLocale();
  const pageContent = getPageContent(locale);

  return (
    <section className="panel page-stack">
      <p className="eyebrow">{pageContent.contactTitle}</p>
      <h1>{getUiText('contactHeading', locale)}</h1>
      <div className="copy-stack">
        {pageContent.contactBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="contact-actions">
        <a className="button-link" href={pageContent.instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a className="button-link button-link-secondary" href={`mailto:${pageContent.contactEmail}`}>
          {pageContent.contactEmail}
        </a>
      </div>
    </section>
  );
}
