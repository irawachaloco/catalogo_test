import { getPageContent } from '../content/selectors';
import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

export function AboutPage() {
  const { locale } = useLocale();
  const pageContent = getPageContent(locale);

  return (
    <section className="panel page-stack">
      <p className="eyebrow">{pageContent.aboutTitle}</p>
      <h1>{getUiText('aboutHeading', locale)}</h1>
      <div className="copy-stack">
        {pageContent.aboutBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
