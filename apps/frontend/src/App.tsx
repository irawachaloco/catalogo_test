import { getCatalogSummary, getFeaturedProduct, getNavigation, getPageContent, defaultLocale } from './content/selectors';

export function App() {
  const pageContent = getPageContent(defaultLocale);
  const navigation = getNavigation(defaultLocale);
  const featuredProduct = getFeaturedProduct(defaultLocale);
  const catalogSummary = getCatalogSummary();

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">OM Studio</p>
        <h1>Phase 2 static content foundations</h1>
        <p className="lead">{pageContent.heroTitle}</p>
        <div className="copy-stack">
          {pageContent.heroBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="status-grid" aria-label="Project setup status">
        <article>
          <h2>Default locale</h2>
          <p>{defaultLocale}</p>
        </article>
        <article>
          <h2>Products seeded</h2>
          <p>{catalogSummary.totalProducts}</p>
        </article>
        <article>
          <h2>Available / sold</h2>
          <p>
            {catalogSummary.availableProducts} / {catalogSummary.soldProducts}
          </p>
        </article>
        <article>
          <h2>Image strategy</h2>
          <p>{catalogSummary.imageStrategy.baseDirectory}</p>
        </article>
      </section>

      <section className="content-grid" aria-label="Phase 2 content preview">
        <article className="panel">
          <h2>Navigation labels</h2>
          <ul className="list">
            {navigation.map((item) => (
              <li key={item.id}>
                <span>{item.label}</span>
                <code>{item.href}</code>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel featured-piece">
          <div className="featured-copy">
            <h2>{featuredProduct.name}</h2>
            <p>{pageContent.galleryIntro}</p>
            <dl className="meta">
              <div>
                <dt>Availability</dt>
                <dd>{featuredProduct.availabilityLabel}</dd>
              </div>
              <div>
                <dt>Material</dt>
                <dd>{featuredProduct.material}</dd>
              </div>
              <div>
                <dt>Dimensions</dt>
                <dd>{featuredProduct.dimensions}</dd>
              </div>
            </dl>
          </div>
          <img src={featuredProduct.primaryImageUrl} alt={featuredProduct.name} />
        </article>

        <article className="panel">
          <h2>{pageContent.aboutTitle}</h2>
          <div className="copy-stack">
            {pageContent.aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>{pageContent.contactTitle}</h2>
          <div className="copy-stack">
            {pageContent.contactBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="contact-line">{pageContent.contactEmail}</p>
          <p className="contact-line">{pageContent.instagramUrl}</p>
        </article>
      </section>
    </main>
  );
}
