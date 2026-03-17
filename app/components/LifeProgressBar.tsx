'use client';

import { useEffect, useState, useCallback } from 'react';
import { getLifeProgress } from '@/lib/calculations';
import { countryLifeExpectancies } from '@/lib/data';

interface LifeProgressBarProps {
  birthDate: Date;
  focusCountry?: boolean;
}

export default function LifeProgressBar({ birthDate, focusCountry }: LifeProgressBarProps) {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [progress, setProgress] = useState(0);

  const expectancy = countryLifeExpectancies[selectedCountry].expectancy;
  const country = countryLifeExpectancies[selectedCountry].name;

  const update = useCallback(() => {
    setProgress(getLifeProgress(birthDate, new Date(), expectancy));
  }, [birthDate, expectancy]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  return (
    <div>
      {/* Header row */}
      <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
        <p className="text-[var(--muted)] text-xs tracking-[0.25em] uppercase">
          Life expectancy progress
        </p>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(Number(e.target.value))}
          className={`luxury-select text-[var(--text)] ${focusCountry ? 'border-[var(--gold)]' : ''}`}
        >
          {countryLifeExpectancies.map((c, i) => (
            <option key={c.name} value={i} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
              {c.name} — {c.expectancy} yrs
            </option>
          ))}
        </select>
      </div>

      {/* Progress bar — thin, gold */}
      <div className="w-full h-[3px] bg-[var(--border)] rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-[var(--gold)] transition-all duration-1000 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Reading */}
      <p className="text-[var(--muted)] text-sm">
        <span className="font-display text-[var(--text)] text-base">{progress.toFixed(2)}%</span>
        {' '}of the average life expectancy in {country} ({expectancy} years)
      </p>
    </div>
  );
}
