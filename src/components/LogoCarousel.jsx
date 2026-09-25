import React, { useEffect, useRef, useState } from 'react';

export default function LogoCarousel({ logos = [] }) {
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !logos.length) return;

    const items = Array.from(track.children);
    const setCount = logos.length;
    if (!items.length) return;

    const firstSet = items.slice(0, setCount);
    const totalWidth = firstSet.reduce((sum, item) => sum + item.offsetWidth, 0);
    const gap = firstSet.length > 1
      ? items[setCount].offsetLeft - (firstSet[firstSet.length - 1].offsetLeft + firstSet[firstSet.length - 1].offsetWidth)
      : 0;

    setDistance(totalWidth + gap);
  }, [logos]);

  const cycle = logos.length ? [...logos, ...logos] : [];

  return (
    <div
      className="logoCarousel"
      onMouseEnter={e => e.currentTarget.classList.add('paused')}
      onMouseLeave={e => e.currentTarget.classList.remove('paused')}
      style={{ '--logo-distance': `${distance}px`, '--logo-speed': `${Math.max(18, 30 - logos.length * 2)}s` }}
    >
      <div className="track" ref={trackRef} aria-label="Brand partners carousel">
        {cycle.map((logo, index) => (
          <div className="logo" key={`${logo.alt || 'logo'}-${index}`} aria-hidden={index >= logos.length}>
            <img
              src={logo.src}
              alt={logo.alt || ''}
              loading="eager"
              decoding="sync"
              draggable="false"
              width={220}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
