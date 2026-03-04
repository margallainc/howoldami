'use client';

import { useEffect, useState, useCallback } from 'react';
import { calculateLifeStats, formatNumber, type LifeStats } from '@/lib/calculations';

interface StatsGridProps {
  birthDate: Date;
  highlightStat?: keyof LifeStats;
}

interface StatCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

function StatCard({ label, value, highlight }: StatCardProps) {
  return (
    <div
      className={`rounded-xl p-4 sm:p-6 transition-all duration-300 ${
        highlight
          ? 'bg-indigo-500/20 dark:bg-indigo-500/30 ring-2 ring-indigo-500/50 scale-105'
          : 'bg-slate-100 dark:bg-slate-800/50'
      }`}
    >
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">
        {label}
      </p>
      <p
        className={`text-lg sm:text-2xl font-bold tabular-nums ${
          highlight
            ? 'text-indigo-600 dark:text-indigo-300'
            : 'text-slate-900 dark:text-white'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default function StatsGrid({ birthDate, highlightStat }: StatsGridProps) {
  const [stats, setStats] = useState<LifeStats>(() =>
    calculateLifeStats(birthDate, new Date())
  );

  const update = useCallback(() => {
    setStats(calculateLifeStats(birthDate, new Date()));
  }, [birthDate]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <StatCard
        label="Days Alive"
        value={formatNumber(stats.totalDays)}
        highlight={highlightStat === 'totalDays'}
      />
      <StatCard
        label="Hours Alive"
        value={formatNumber(stats.totalHours)}
        highlight={highlightStat === 'totalHours'}
      />
      <StatCard
        label="Minutes Alive"
        value={formatNumber(stats.totalMinutes)}
        highlight={highlightStat === 'totalMinutes'}
      />
      <StatCard
        label="Seconds Alive"
        value={formatNumber(stats.totalSeconds)}
        highlight={highlightStat === 'totalSeconds'}
      />
      <StatCard
        label="Heartbeats"
        value={formatNumber(stats.heartbeats)}
        highlight={highlightStat === 'heartbeats'}
      />
      <StatCard
        label="Breaths Taken"
        value={formatNumber(stats.breaths)}
        highlight={highlightStat === 'breaths'}
      />
      <StatCard
        label="Nights Slept"
        value={formatNumber(stats.timesSlepped)}
      />
      <StatCard
        label="Hours Slept"
        value={formatNumber(stats.hoursSlepped)}
      />
    </div>
  );
}
