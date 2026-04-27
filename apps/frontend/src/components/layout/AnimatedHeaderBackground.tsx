import { useLayoutEffect, useRef } from 'react';

const PARTICLE_COUNT = 40;
const COLORS = ['#105057', '#ff81d0', '#400036', '#919151', '#898c8b'];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function AnimatedHeaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const particle = document.createElement('span');
      const duration = getRandom(22, 110);
      const delay = getRandom(0, duration);
      const blurRadius = getRandom(7, 26);
      const direction = Math.random() > 0.5 ? -1 : 1;

      Object.assign(particle.style, {
        width: '3vmin',
        height: '3vmin',
        borderRadius: '50%',
        position: 'absolute',
        opacity: '0.34',
        backfaceVisibility: 'hidden',
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        top: `${getRandom(-25, 125)}%`,
        left: `${getRandom(-18, 118)}%`,
        animationDuration: `${duration}s`,
        animationDelay: `-${delay}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationName: 'header-particle-orbit',
        transformOrigin: `${getRandom(-28, 28)}vw ${getRandom(-20, 20)}vh`,
        boxShadow: `${12 * direction}vmin 0 ${blurRadius}px ${blurRadius / 2}px currentColor`,
      });

      fragment.appendChild(particle);
    }

    container.replaceChildren(fragment);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return <div className="animated-header-background" ref={containerRef} aria-hidden="true" />;
}
