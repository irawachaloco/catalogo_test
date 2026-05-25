import { processImageAssets } from '../../content/imageAssets';
import { getLocalizedText } from '../../content/selectors';
import { useLocale } from '../../features/i18n/locale';

const glazes = [
  {
    id: 'greenish-gray',
    label: 'Greenish Gray',
    className: 'glaze-swatch-greenish-gray',
  },
  {
    id: 'variegated-blue',
    label: 'Variegated Blue',
    className: 'glaze-swatch-variegated-blue',
  },
  {
    id: 'reddish-ochre',
    label: 'Reddish Ochre',
    className: 'glaze-swatch-reddish-ochre',
  },
  {
    id: 'semi-opaque-white',
    label: 'Semi-Opaque White',
    className: 'glaze-swatch-semi-opaque-white',
  },
  {
    id: 'glossy-transparent',
    label: 'Glossy Transparent',
    className: 'glaze-swatch-glossy-transparent',
  },
];

const processSteps = [
  {
    id: 'clay-body-texture',
    caption: 'Clay Body and Texture',
    image: processImageAssets.clayBodyTexture,
  },
  {
    id: 'drying',
    caption: 'Drying',
    image: processImageAssets.drying,
  },
  {
    id: 'glazing',
    caption: 'Glazing',
    image: processImageAssets.glazing,
  },
  {
    id: 'firing',
    caption: 'Firing',
    image: processImageAssets.firing,
  },
];

export function MaterialsProcessSection() {
  const { locale } = useLocale();

  return (
    <section className="materials-process-section panel" aria-labelledby="materials-process-title">
      <div className="materials-glazes" aria-labelledby="materials-process-title">
        <div className="materials-glazes-copy">
          <p className="eyebrow">Materials and Glazes</p>
          <h2 id="materials-process-title">Materials and Glazes</h2>
          <p>Mid-fire stoneware, vitrified, impermeable, and suitable for table use.</p>
        </div>

        <ul className="glaze-swatch-list" aria-label="Current glaze palette">
          {glazes.map((glaze) => (
            <li className="glaze-swatch-item" key={glaze.id}>
              <span className={`glaze-swatch ${glaze.className}`} aria-hidden="true" />
              <span className="glaze-swatch-label">{glaze.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="process-section" aria-labelledby="materials-process-process-title">
        <div className="process-section-heading">
          <p className="eyebrow">Process</p>
          <h2 id="materials-process-process-title">Process</h2>
          <p>Variations in texture, tone, and surface are part of the studio’s language.</p>
        </div>

        <div className="process-step-grid">
          {processSteps.map((step) => (
            <figure className="process-step" key={step.id}>
              <img
                src={step.image.src}
                alt={getLocalizedText(step.image.alt, locale)}
                loading="lazy"
              />
              <figcaption>{step.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
