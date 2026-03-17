'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { calculateLifeStats, calculateExactAge, formatNumber } from '@/lib/calculations';

interface ShareCardProps {
  birthDate: Date;
}

export default function ShareCard({ birthDate }: ShareCardProps) {
  const [copied, setCopied] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const update = useCallback(() => {
    const stats = calculateLifeStats(birthDate, new Date());
    setTotalSeconds(stats.totalSeconds);
  }, [birthDate]);

  useEffect(() => {
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  const age = calculateExactAge(birthDate, new Date());
  const stats = calculateLifeStats(birthDate, new Date());

  const shareText = `I am ${formatNumber(totalSeconds)} seconds old. That's ${age.years} years, ${age.months} months, ${age.days} days. My heart has beaten ${formatNumber(stats.heartbeats)} times. secondsalive.com`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 630;

    // Dark luxury background
    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, 1200, 630);

    // Subtle border line
    ctx.strokeStyle = '#1f1f1f';
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, 1120, 550);

    // Label
    ctx.fillStyle = '#5c5752';
    ctx.font = '300 18px "DM Sans", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '4px';
    ctx.fillText('YOU HAVE BEEN ALIVE FOR', 600, 120);

    // Main number
    ctx.fillStyle = '#ede8df';
    ctx.font = '400 90px Georgia, serif';
    ctx.letterSpacing = '-2px';
    ctx.fillText(formatNumber(totalSeconds), 600, 240);

    // Unit
    ctx.fillStyle = '#c9a96e';
    ctx.font = '300 24px "DM Sans", system-ui, sans-serif';
    ctx.letterSpacing = '6px';
    ctx.fillText('SECONDS', 600, 290);

    // Rule
    ctx.strokeStyle = '#1f1f1f';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(200, 330);
    ctx.lineTo(1000, 330);
    ctx.stroke();

    // Age line
    ctx.fillStyle = '#5c5752';
    ctx.font = '300 22px "DM Sans", system-ui, sans-serif';
    ctx.letterSpacing = '1px';
    ctx.fillText(
      `${age.years} years  ·  ${age.months} months  ·  ${age.days} days`,
      600,
      390
    );

    // Stats
    const statsData = [
      { label: 'DAYS', value: formatNumber(stats.totalDays) },
      { label: 'HEARTBEATS', value: formatNumber(stats.heartbeats) },
      { label: 'BREATHS', value: formatNumber(stats.breaths) },
    ];

    statsData.forEach((stat, i) => {
      const x = 230 + i * 370;
      ctx.fillStyle = '#ede8df';
      ctx.font = '400 32px Georgia, serif';
      ctx.letterSpacing = '-0.5px';
      ctx.fillText(stat.value, x, 480);
      ctx.fillStyle = '#5c5752';
      ctx.font = '300 14px "DM Sans", system-ui, sans-serif';
      ctx.letterSpacing = '3px';
      ctx.fillText(stat.label, x, 510);
    });

    // Footer
    ctx.fillStyle = '#2e2c28';
    ctx.font = '300 16px "DM Sans", system-ui, sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('SECONDSALIVE.COM', 600, 575);

    const link = document.createElement('a');
    link.download = 'seconds-alive.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div>
      {/* Section label */}
      <p className="text-[var(--muted)] text-xs tracking-[0.25em] uppercase mb-6">
        Share your stats
      </p>

      {/* Preview */}
      <div className="border border-[var(--border)] p-6 sm:p-8 mb-6" style={{ background: 'var(--surface)' }}>
        <p className="text-[var(--muted)] text-xs tracking-[0.25em] uppercase mb-3">
          You have been alive for
        </p>
        <p className="font-display tabular-nums text-[var(--text)] mb-1" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          {formatNumber(totalSeconds)}
        </p>
        <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">seconds</p>
        <hr className="rule mb-4" />
        <div className="flex gap-6 text-xs text-[var(--muted)]">
          <span>{formatNumber(stats.totalDays)} days</span>
          <span>{formatNumber(stats.heartbeats)} heartbeats</span>
          <span>{formatNumber(stats.breaths)} breaths</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopy}
          className="flex-1 min-w-[120px] px-4 py-3 text-xs tracking-widest uppercase border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-all duration-200"
        >
          {copied ? 'Copied' : 'Copy text'}
        </button>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] px-4 py-3 text-xs tracking-widest uppercase border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-all duration-200 text-center"
        >
          Post on X
        </a>
        <button
          onClick={handleDownload}
          className="flex-1 min-w-[120px] px-4 py-3 text-xs tracking-widest uppercase border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-all duration-200"
        >
          Download image
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
