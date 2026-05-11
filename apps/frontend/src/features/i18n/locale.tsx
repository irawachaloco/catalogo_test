import {
  createContext,
  useEffect,
  useContext,
  useRef,
  type PropsWithChildren,
} from 'react';
import { type SupportedLocale } from '@om-studio/shared-types';
import { useLocation, useNavigate } from 'react-router-dom';

import { defaultLocale } from '../../content/selectors';

interface LocaleContextValue {
  locale: SupportedLocale;
  getLocalizedPath: (path: string, targetLocale?: SupportedLocale) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const englishPrefix = '/en';

const normalizePath = (path: string) => (path.startsWith('/') ? path : `/${path}`);

const stripEnglishPrefix = (path: string) => {
  if (path === englishPrefix) {
    return '/';
  }

  if (path.startsWith(`${englishPrefix}/`)) {
    return path.slice(englishPrefix.length);
  }

  return path;
};

const detectBrowserLocale = (): SupportedLocale => {
  if (typeof navigator === 'undefined') {
    return defaultLocale;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith('en')) {
    return 'en';
  }

  return defaultLocale;
};

export function LocaleProvider({ children }: PropsWithChildren) {
  const location = useLocation();
  const navigate = useNavigate();
  const hasAppliedBrowserDetection = useRef(false);
  const locale: SupportedLocale =
    location.pathname === englishPrefix || location.pathname.startsWith(`${englishPrefix}/`)
      ? 'en'
      : defaultLocale;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (hasAppliedBrowserDetection.current) {
      return;
    }

    hasAppliedBrowserDetection.current = true;

    if (
      detectBrowserLocale() !== 'en' ||
      location.pathname === englishPrefix ||
      location.pathname.startsWith(`${englishPrefix}/`)
    ) {
      return;
    }

    const normalizedPath = stripEnglishPrefix(location.pathname);
    const englishPath = normalizedPath === '/' ? englishPrefix : `${englishPrefix}${normalizedPath}`;

    navigate(`${englishPath}${location.search}${location.hash}`, { replace: true });
  }, [location.hash, location.pathname, location.search, navigate]);

  const getLocalizedPath = (path: string, targetLocale = locale) => {
    const normalizedPath = stripEnglishPrefix(normalizePath(path));

    if (targetLocale === 'en') {
      return normalizedPath === '/' ? englishPrefix : `${englishPrefix}${normalizedPath}`;
    }

    return normalizedPath;
  };

  return (
    <LocaleContext.Provider value={{ locale, getLocalizedPath }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }

  return context;
};
