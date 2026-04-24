import { Link } from 'react-router-dom';

import { useLocale } from '../features/i18n/locale';
import { getUiText } from '../features/i18n/uiCopy';

export function NotFoundPage() {
  const { locale } = useLocale();

  return (
    <section className="panel page-heading">
      <p className="eyebrow">404</p>
      <h1>{getUiText('notFoundTitle', locale)}</h1>
      <p>{getUiText('notFoundBody', locale)}</p>
      <Link className="inline-link" to="/gallery">
        {getUiText('backToGallery', locale)}
      </Link>
    </section>
  );
}
