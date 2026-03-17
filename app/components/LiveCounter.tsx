'use client';

import { useEffect, useState, useCallback } from 'react';
import { calculateExactAge, calculateLifeStats, formatNumber, type AgeBreakdown } from '@/lib/calculations';

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
  const [totalSeconds, setTotalSeconds] = useState(() =>
    calculateLifeStats(birthDate, new Date()).totalSeconds
  );

  const update = useCallback(() => {
    const now = new Date();
    setAge(calculateExactAge(birthDate, now));
    setTotalSeconds(calculateLifeStats(birthDate, now).totalSeconds);
  }, [birthDate]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  return (
    <div className="animate-fade-up">
      {/* Label */}
      <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6 sm:mb-8">
        You have been alive for
      </p>

      {/* Hero — total seconds */}
      <div className="mb-6 sm:mb-8 overflow-hidden">
        <span
          className="font-display tabular-nums text-[var(--text)] leading-none block"
          style={{ fontSize: 'clamp(3rem, 11vw, 7.5rem)' }}
        >
          {formatNumber(totalSeconds)}
        </span>
        <span className="text-[var(--muted)] text-sm sm:text-base tracking-widest uppercase mt-1 block">
          seconds
        </span>
      </div>

      {/* Thin rule */}
      <hr className="rule mb-6 sm:mb-8" />

      {/* Years · Months · Days */}
      <div className="flex items-baseline gap-3 sm:gap-5 mb-4 flex-wrap">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[var(--text)] tabular-nums" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
            {age.years}
          </span>
          <span className="text-[var(--muted)] text-xs tracking-widest uppercase">years</span>
        </div>
        <span className="text-[var(--dim)] text-2xl leading-none">·</span>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[var(--text)] tabular-nums" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
            {age.months}
          </span>
          <span className="text-[var(--muted)] text-xs tracking-widest uppercase">months</span>
        </div>
        <span className="text-[var(--dim)] text-2xl leading-none">·</span>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[var(--text)] tabular-nums" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
            {age.days}
          </span>
          <span className="text-[var(--muted)] text-xs tracking-widest uppercase">days</span>
        </div>
      </div>

      {/* HH : MM : SS */}
      <div
        className="font-mono tabular-nums text-[var(--gold)] font-light tracking-[0.08em]"
        style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
      >
        {pad(age.hours)}<span className="text-[var(--dim)] mx-1">:</span>{pad(age.minutes)}<span className="text-[var(--dim)] mx-1">:</span>{pad(age.seconds)}
      </div>
      <p className="text-[var(--muted)] text-xs tracking-widest uppercase mt-1.5">
        hours · minutes · seconds
      </p>
    </div>
  );
}
