import { Routes, Route } from 'react-router-dom';

import { SiteLayout } from './components/layout/SiteLayout';
import { LocaleProvider } from './features/i18n/locale';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';

export function App() {
  return (
    <LocaleProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/coleccion" element={<GalleryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/coleccion" element={<GalleryPage />} />
          <Route path="/en/gallery" element={<GalleryPage />} />
          <Route path="/en/product/:productId" element={<ProductPage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/en/components" element={<ComponentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LocaleProvider>
  );
}
