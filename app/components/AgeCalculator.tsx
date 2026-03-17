'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import {
  getDayOfWeekBorn,
  getNextBirthday,
  formatNumber,
  isValidBirthDate,
  calculateLifeStats,
} from '@/lib/calculations';
import { yearEvents } from '@/lib/data';
import type { LifeStats } from '@/lib/calculations';
import LiveCounter from './LiveCounter';
import StatsGrid from './StatsGrid';
import LifeProgressBar from './LifeProgressBar';
import ShareCard from './ShareCard';

interface AgeCalculatorProps {
  highlightStat?: keyof LifeStats;
  focusCountry?: boolean;
}

export default function AgeCalculator({ highlightStat, focusCountry }: AgeCalculatorProps) {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Three-field date state
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  // Assemble date when all three fields have values
  useEffect(() => {
    if (day && month && year && year.length === 4) {
      const dd = day.padStart(2, '0');
      const mm = month.padStart(2, '0');
      const dateStr = `${year}-${mm}-${dd}`;
      const date = new Date(dateStr + 'T00:00:00');
      const validation = isValidBirthDate(date);
      if (!validation.valid) {
        setError(validation.error || 'Invalid date');
        setBirthDate(null);
      } else {
        setError(null);
        setBirthDate(date);
      }
    } else if (!day && !month && !year) {
      setBirthDate(null);
      setError(null);
    }
  }, [day, month, year]);

  const handleDayChange = useCallback((v: string) => {
    const clean = v.replace(/\D/g, '').slice(0, 2);
    setDay(clean);
    if (clean.length === 2) {
      const d = parseInt(clean, 10);
      if (d >= 1 && d <= 31) monthRef.current?.focus();
    }
  }, []);

  const handleMonthChange = useCallback((v: string) => {
    const clean = v.replace(/\D/g, '').slice(0, 2);
    setMonth(clean);
    if (clean.length === 2) {
      const m = parseInt(clean, 10);
      if (m >= 1 && m <= 12) yearRef.current?.focus();
    }
  }, []);

  const handleYearChange = useCallback((v: string) => {
    const clean = v.replace(/\D/g, '').slice(0, 4);
    setYear(clean);
  }, []);

  const birthYear = birthDate?.getFullYear();
  const yearEvent = birthYear ? yearEvents[birthYear] : null;
  const dayOfWeek = birthDate ? getDayOfWeekBorn(birthDate) : null;
  const nextBday = birthDate ? getNextBirthday(birthDate, new Date()) : null;
  const stats = birthDate ? calculateLifeStats(birthDate, new Date()) : null;

  return (
    <div className="space-y-16 sm:space-y-20">

      {/* ── Date Input ── */}
      <div>
        <label className="block text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">
          Date of birth
        </label>
        <div className="flex items-end gap-4 sm:gap-6">
          {/* Day */}
          <div className="flex-1 max-w-[80px]">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="DD"
              value={day}
              onChange={(e) => handleDayChange(e.target.value)}
              maxLength={2}
              className="date-field"
            />
            <span className="block text-[var(--dim)] text-xs tracking-widest uppercase mt-2 text-center">Day</span>
          </div>

          <span className="text-[var(--dim)] text-2xl mb-5 flex-shrink-0">/</span>

          {/* Month */}
          <div className="flex-1 max-w-[80px]">
            <input
              ref={monthRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="MM"
              value={month}
              onChange={(e) => handleMonthChange(e.target.value)}
              maxLength={2}
              className="date-field"
            />
            <span className="block text-[var(--dim)] text-xs tracking-widest uppercase mt-2 text-center">Month</span>
          </div>

          <span className="text-[var(--dim)] text-2xl mb-5 flex-shrink-0">/</span>

          {/* Year */}
          <div className="flex-1 max-w-[140px]">
            <input
              ref={yearRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="YYYY"
              value={year}
              onChange={(e) => handleYearChange(e.target.value)}
              maxLength={4}
              className="date-field"
            />
            <span className="block text-[var(--dim)] text-xs tracking-widest uppercase mt-2 text-center">Year</span>
          </div>
        </div>

        {error && (
          <p className="mt-4 text-xs text-red-400 tracking-wide">{error}</p>
        )}
      </div>

      {/* ── Placeholder state ── */}
      {!birthDate && !error && (
        <div className="py-12 sm:py-20 text-center">
          <p className="text-[var(--dim)] text-sm tracking-widest uppercase">
            — enter your birthdate above —
          </p>
        </div>
      )}

      {/* ── Results ── */}
      {birthDate && (
        <>
          {/* Live Counter */}
          <section>
            <LiveCounter birthDate={birthDate} />
          </section>

          {/* Fun facts — born on / next birthday / total weeks */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-[var(--border)]" style={{ background: 'var(--border)' }}>
            {dayOfWeek && (
              <div className="bg-[var(--bg)] px-5 py-5">
                <p className="text-[var(--muted)] text-xs tracking-widest uppercase mb-1.5">Born on a</p>
                <p className="font-display text-[var(--text)] text-xl">{dayOfWeek}</p>
              </div>
            )}
            {nextBday && (
              <div className="bg-[var(--bg)] px-5 py-5">
                <p className="text-[var(--muted)] text-xs tracking-widest uppercase mb-1.5">
                  Your {nextBday.turningAge}{getOrdinalSuffix(nextBday.turningAge)} birthday
                </p>
                <p className="font-display text-[var(--text)] text-xl">
                  in {nextBday.daysUntil} days
                </p>
              </div>
            )}
            {stats && (
              <div className="bg-[var(--bg)] px-5 py-5">
                <p className="text-[var(--muted)] text-xs tracking-widest uppercase mb-1.5">Age in weeks</p>
                <p className="font-display text-[var(--text)] text-xl tabular-nums">
                  {formatNumber(stats.totalWeeks)}
                </p>
              </div>
            )}
          </section>

          {/* Year event */}
          {yearEvent && (
            <section className="border-l-2 border-[var(--gold)] pl-5 sm:pl-7">
              <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-3">
                The year you were born — {birthYear}
              </p>
              <p className="text-[var(--text)] text-sm leading-relaxed mb-1.5">
                <span className="text-[var(--muted)]">World — </span>{yearEvent.event}
              </p>
              <p className="text-[var(--text)] text-sm leading-relaxed">
                <span className="text-[var(--muted)]">Culture — </span>{yearEvent.culture}
              </p>
            </section>
          )}

          {/* AD SLOT: below-calculator */}
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] sm:block hidden bg-[var(--surface)] flex items-center justify-center">
              {/* AD SLOT: leaderboard-desktop */}
            </div>
            <div className="w-[320px] h-[50px] sm:hidden bg-[var(--surface)] flex items-center justify-center">
              {/* AD SLOT: banner-mobile */}
            </div>
          </div>

          {/* Stats */}
          <section>
            <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">
              Your life in numbers
            </p>
            <StatsGrid birthDate={birthDate} highlightStat={highlightStat} />
          </section>

          {/* AD SLOT: between-stats-and-progress */}
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] bg-[var(--surface)] flex items-center justify-center">
              {/* AD SLOT: mid-content */}
            </div>
          </div>

          {/* Life Progress */}
          <section>
            <LifeProgressBar birthDate={birthDate} focusCountry={focusCountry} />
          </section>

          {/* Share */}
          <section>
            <ShareCard birthDate={birthDate} />
          </section>

          {/* AD SLOT: bottom */}
          <div className="flex justify-center">
            <div className="w-[300px] h-[250px] bg-[var(--surface)] flex items-center justify-center">
              {/* AD SLOT: bottom-rectangle */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
