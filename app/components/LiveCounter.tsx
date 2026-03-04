'use client';

import { useEffect, useState, useCallback } from 'react';
import { calculateExactAge, type AgeBreakdown } from '@/lib/calculations';

interface LiveCounterProps {
  birthDate: Date;
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

export default function LiveCounter({ birthDate }: LiveCounterProps) {
  const [age, setAge] = useState<AgeBreakdown>(() =>
    calculateExactAge(birthDate, new Date())
  );

  const update = useCallback(() => {
    setAge(calculateExactAge(birthDate, new Date()));
  }, [birthDate]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
        Your exact age
      </p>
      <div className="flex flex-wrap items-baseline justify-center gap-1 sm:gap-2">
        <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
          {age.years}
        </span>
        <span className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 mr-2">
          years
        </span>
        <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
          {age.months}
        </span>
        <span className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 mr-2">
          months
        </span>
        <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
          {age.days}
        </span>
        <span className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 mr-2">
          days
        </span>
      </div>
      <div className="mt-3 font-mono text-2xl sm:text-4xl lg:text-5xl font-bold text-indigo-500 dark:text-indigo-400 tabular-nums">
        {pad(age.hours)}:{pad(age.minutes)}:{pad(age.seconds)}
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
        hours : minutes : seconds
      </p>
    </div>
  );
}
