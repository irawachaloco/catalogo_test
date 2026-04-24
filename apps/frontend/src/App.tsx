import { type SupportedLocale, type AvailabilityStatus } from '@om-studio/shared-types';

const defaultLocale: SupportedLocale = 'es';
const sampleAvailability: AvailabilityStatus = 'available';

export function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">OM Studio</p>
        <h1>Phase 1 frontend scaffold</h1>
        <p className="lead">
          React + TypeScript workspace is ready for the bilingual gallery and admin
          flows planned in later phases.
        </p>
      </section>

      <section className="status-grid" aria-label="Project setup status">
        <article>
          <h2>Default locale</h2>
          <p>{defaultLocale}</p>
        </article>
        <article>
          <h2>Shared availability enum</h2>
          <p>{sampleAvailability}</p>
        </article>
      </section>
    </main>
  );
}

