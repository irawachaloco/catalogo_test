import { NavLink, Outlet } from 'react-router-dom';

import { getNavigation } from '../../content/selectors';
import { useLocale } from '../../features/i18n/locale';
import { getUiText } from '../../features/i18n/uiCopy';

export function SiteLayout() {
  const { locale, setLocale } = useLocale();
  const navigation = getNavigation(locale);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {getUiText('skipToContent', locale)}
      </a>

      <header className="site-header">
        <div>
          <p className="eyebrow">OM Studio</p>
          <p className="brand-tagline">{getUiText('brandTagline', locale)}</p>
        </div>

        <div className="header-actions">
          <nav aria-label="Primary">
            <ul className="site-nav">
              <li>
                <NavLink to="/">{getUiText('homeLabel', locale)}</NavLink>
              </li>
              {navigation.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <fieldset className="locale-switcher">
            <legend>{getUiText('localeLabel', locale)}</legend>
            <button
              type="button"
              className={locale === 'es' ? 'is-active' : undefined}
              onClick={() => setLocale('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : undefined}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </fieldset>
        </div>
      </header>

      <main id="main-content" className="page-shell">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>{getUiText('footerLine', locale)}</p>
      </footer>
    </div>
  );
}
