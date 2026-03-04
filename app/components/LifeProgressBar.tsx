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

  const update = useCallback(() => {
    setProgress(getLifeProgress(birthDate, new Date(), expectancy));
  }, [birthDate, expectancy]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  return (
    <div className="rounded-xl bg-slate-100 dark:bg-slate-800/50 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Life Journey So Far
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Based on average life expectancy in{' '}
            {countryLifeExpectancies[selectedCountry].name} (
            {expectancy} years)
          </p>
        </div>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(Number(e.target.value))}
          className={`px-3 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
            focusCountry ? 'ring-2 ring-indigo-500' : ''
          }`}
        >
          {countryLifeExpectancies.map((c, i) => (
            <option key={c.name} value={i}>
              {c.name} ({c.expectancy} yrs)
            </option>
          ))}
        </select>
      </div>

      <div className="relative w-full h-6 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 transition-all duration-1000 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white drop-shadow-sm">
            {progress.toFixed(2)}%
          </span>
        </div>
      </div>

      <p className="mt-4 text-center text-slate-600 dark:text-slate-300">
        You have lived{' '}
        <span className="font-bold text-indigo-500 dark:text-indigo-400">
          {progress.toFixed(2)}%
        </span>{' '}
        of the average life expectancy. Every moment is a gift!
      </p>
    </div>
  );
}
