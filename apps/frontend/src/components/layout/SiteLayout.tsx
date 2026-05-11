import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { getNavigation } from '../../content/selectors';
import { useLocale } from '../../features/i18n/locale';
import { getUiText } from '../../features/i18n/uiCopy';
import { AnimatedHeaderBackground } from './AnimatedHeaderBackground';

const logoSrc = `${import.meta.env.BASE_URL}HUMO_LOGO_negro_transparente.svg`;
const headerCollapseScrollY = 96;
const headerExpandScrollY = 24;

export function SiteLayout() {
  const { locale, getLocalizedPath } = useLocale();
  const location = useLocation();
  const navigation = getNavigation(locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderCondensed, setIsHeaderCondensed] = useState(false);
  const isHeaderCondensedRef = useRef(false);
  const closeMenu = () => setIsMenuOpen(false);
  const homeLabel = getUiText('homeLabel', locale);

  useEffect(() => {
    let animationFrameId = 0;

    const updateHeaderState = () => {
      const shouldCondense = isHeaderCondensedRef.current
        ? window.scrollY > headerExpandScrollY
        : window.scrollY > headerCollapseScrollY;

      if (shouldCondense !== isHeaderCondensedRef.current) {
        isHeaderCondensedRef.current = shouldCondense;
        setIsHeaderCondensed(shouldCondense);
      }

      animationFrameId = 0;
    };

    const handleScroll = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {getUiText('skipToContent', locale)}
      </a>

      <header className={`site-header${isHeaderCondensed ? ' is-condensed' : ''}`}>
        <AnimatedHeaderBackground />

        <div className="brand-block">
          <NavLink to={getLocalizedPath('/')} aria-label="HUMO" className="brand-logo-link">
            <img className="brand-logo" src={logoSrc} alt="HUMO" />
          </NavLink>
          <p className="brand-tagline">{getUiText('brandTagline', locale)}</p>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={getUiText(isMenuOpen ? 'closeMenuLabel' : 'openMenuLabel', locale)}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`header-actions${isMenuOpen ? ' is-open' : ''}`} id="primary-navigation">
          <nav aria-label={getUiText('primaryNavigationLabel', locale)}>
            <ul className="site-nav">
              <li>
                <NavLink to={getLocalizedPath('/')} end onClick={closeMenu} data-label={homeLabel}>
                  <span>{homeLabel}</span>
                </NavLink>
              </li>
              {navigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={getLocalizedPath(item.href)}
                    onClick={closeMenu}
                    data-label={item.label}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="page-shell">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>{getUiText('footerLine', locale)}</p>
        <nav className="footer-language" aria-label={getUiText('localeLabel', locale)}>
          <span>{getUiText('footerLanguageLabel', locale)}</span>
          <NavLink to={getLocalizedPath(location.pathname, 'es')}>ES</NavLink>
          <NavLink to={getLocalizedPath(location.pathname, 'en')}>EN</NavLink>
        </nav>
      </footer>
    </div>
  );
}
