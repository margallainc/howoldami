'use client';

import { useEffect, useState, useCallback } from 'react';
import { calculateLifeStats, formatNumber, type LifeStats } from '@/lib/calculations';

interface StatsGridProps {
  birthDate: Date;
  highlightStat?: keyof LifeStats;
}

interface StatRowProps {
  label: string;
  value: string;
  highlight?: boolean;
}

function StatRow({ label, value, highlight }: StatRowProps) {
  return (
    <div className="flex items-baseline justify-between py-3.5 border-b border-[var(--border)]">
      <span className={`text-sm tracking-wide ${highlight ? 'text-[var(--gold)]' : 'text-[var(--muted)]'}`}>
        {label}
      </span>
      <span
        className={`font-display tabular-nums text-lg sm:text-xl ${
          highlight ? 'text-[var(--gold)]' : 'text-[var(--text)]'
        }`}
      >
        {value}
      </span>
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
    <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
      <StatRow label="Days lived" value={formatNumber(stats.totalDays)} highlight={highlightStat === 'totalDays'} />
      <StatRow label="Hours lived" value={formatNumber(stats.totalHours)} highlight={highlightStat === 'totalHours'} />
      <StatRow label="Minutes lived" value={formatNumber(stats.totalMinutes)} highlight={highlightStat === 'totalMinutes'} />
      <StatRow label="Seconds lived" value={formatNumber(stats.totalSeconds)} highlight={highlightStat === 'totalSeconds'} />
      <StatRow label="Heartbeats" value={formatNumber(stats.heartbeats)} highlight={highlightStat === 'heartbeats'} />
      <StatRow label="Breaths drawn" value={formatNumber(stats.breaths)} highlight={highlightStat === 'breaths'} />
      <StatRow label="Nights slept" value={formatNumber(stats.timesSlepped)} />
      <StatRow label="Hours slept" value={formatNumber(stats.hoursSlepped)} />
    </div>
  );
}
