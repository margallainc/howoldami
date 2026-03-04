'use client';

import { useState, useCallback } from 'react';
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
  const [inputValue, setInputValue] = useState('');

  const handleDateChange = useCallback((value: string) => {
    setInputValue(value);
    if (!value) {
      setBirthDate(null);
      setError(null);
      return;
    }
    const date = new Date(value + 'T00:00:00');
    const validation = isValidBirthDate(date);
    if (!validation.valid) {
      setError(validation.error || 'Invalid date');
      setBirthDate(null);
    } else {
      setError(null);
      setBirthDate(date);
    }
  }, []);

  const birthYear = birthDate?.getFullYear();
  const yearEvent = birthYear ? yearEvents[birthYear] : null;
  const dayOfWeek = birthDate ? getDayOfWeekBorn(birthDate) : null;
  const nextBday = birthDate ? getNextBirthday(birthDate, new Date()) : null;
  const stats = birthDate ? calculateLifeStats(birthDate, new Date()) : null;

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Date Input */}
      <div className="flex flex-col items-center gap-4">
        <label
          htmlFor="birthdate"
          className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300"
        >
          Enter your birthday
        </label>
        <input
          id="birthdate"
          type="date"
          value={inputValue}
          onChange={(e) => handleDateChange(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
          className="w-full max-w-xs px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-lg text-center focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all [color-scheme:dark]"
        />
        {error && (
          <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
        )}
      </div>

      {/* Placeholder when no date entered */}
      {!birthDate && !error && (
        <div className="text-center py-16 sm:py-24">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 mb-6">
            <svg
              className="w-10 h-10 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            Enter your birthday above to discover your life stats
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
            See your exact age counting live, heartbeats, breaths, and more
          </p>
        </div>
      )}

      {/* Results */}
      {birthDate && (
        <>
          {/* Live Counter */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-slate-900 p-6 sm:p-10">
            <LiveCounter birthDate={birthDate} />
          </div>

          {/* Fun facts row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dayOfWeek && (
              <div className="rounded-xl bg-slate-100 dark:bg-slate-800/50 p-5">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Born on a
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {dayOfWeek}
                </p>
              </div>
            )}
            {nextBday && (
              <div className="rounded-xl bg-slate-100 dark:bg-slate-800/50 p-5">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Your {nextBday.turningAge}
                  {getOrdinalSuffix(nextBday.turningAge)} birthday
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  in {nextBday.daysUntil} days, {nextBday.hoursUntil} hrs
                </p>
              </div>
            )}
            {stats && (
              <div className="rounded-xl bg-slate-100 dark:bg-slate-800/50 p-5">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  Age in weeks
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {formatNumber(stats.totalWeeks)} weeks
                </p>
              </div>
            )}
          </div>

          {/* Year event */}
          {yearEvent && (
            <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/50 dark:border-amber-800/30 p-5 sm:p-6">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-2">
                The year you were born ({birthYear})
              </p>
              <p className="text-slate-800 dark:text-slate-200">
                <span className="font-semibold">World:</span>{' '}
                {yearEvent.event}
              </p>
              <p className="text-slate-800 dark:text-slate-200 mt-1">
                <span className="font-semibold">Culture:</span>{' '}
                {yearEvent.culture}
              </p>
            </div>
          )}

          {/* AD SLOT: below-calculator */}
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] sm:block hidden bg-slate-100 dark:bg-slate-800/30 rounded-lg flex items-center justify-center">
              {/* AD SLOT: leaderboard-desktop */}
            </div>
            <div className="w-[320px] h-[50px] sm:hidden bg-slate-100 dark:bg-slate-800/30 rounded-lg flex items-center justify-center">
              {/* AD SLOT: banner-mobile */}
            </div>
          </div>

          {/* Stats Grid */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Your Life in Numbers
            </h2>
            <StatsGrid birthDate={birthDate} highlightStat={highlightStat} />
          </div>

          {/* AD SLOT: between-stats-and-progress */}
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] h-[90px] bg-slate-100 dark:bg-slate-800/30 rounded-lg flex items-center justify-center">
              {/* AD SLOT: mid-content */}
            </div>
          </div>

          {/* Life Progress Bar */}
          <LifeProgressBar birthDate={birthDate} focusCountry={focusCountry} />

          {/* Share Card */}
          <ShareCard birthDate={birthDate} />

          {/* AD SLOT: bottom-of-page */}
          <div className="flex justify-center">
            <div className="w-[300px] h-[250px] bg-slate-100 dark:bg-slate-800/30 rounded-lg flex items-center justify-center">
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
