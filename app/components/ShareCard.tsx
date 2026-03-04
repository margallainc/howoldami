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

  const shareText = `I am ${formatNumber(totalSeconds)} seconds old! That's ${age.years} years, ${age.months} months, and ${age.days} days. My heart has beaten ${formatNumber(stats.heartbeats)} times! Find out your stats:`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
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

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#1e1b4b');
    gradient.addColorStop(1, '#312e81');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Decorative circles
    ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
    ctx.beginPath();
    ctx.arc(1000, 100, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 500, 150, 0, Math.PI * 2);
    ctx.fill();

    // Title
    ctx.fillStyle = '#a5b4fc';
    ctx.font = '500 28px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HOW OLD AM I?', 600, 80);

    // Main stat
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px system-ui, -apple-system, sans-serif';
    ctx.fillText(formatNumber(totalSeconds), 600, 200);

    ctx.fillStyle = '#c7d2fe';
    ctx.font = '500 32px system-ui, -apple-system, sans-serif';
    ctx.fillText('seconds old', 600, 250);

    // Age line
    ctx.fillStyle = '#e0e7ff';
    ctx.font = '400 28px system-ui, -apple-system, sans-serif';
    ctx.fillText(
      `${age.years} years, ${age.months} months, ${age.days} days`,
      600,
      330
    );

    // Stats row
    const statsY = 430;
    const statsData = [
      { label: 'Days', value: formatNumber(stats.totalDays) },
      { label: 'Heartbeats', value: formatNumber(stats.heartbeats) },
      { label: 'Breaths', value: formatNumber(stats.breaths) },
    ];

    statsData.forEach((stat, i) => {
      const x = 250 + i * 350;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
      ctx.fillText(stat.value, x, statsY);
      ctx.fillStyle = '#a5b4fc';
      ctx.font = '400 20px system-ui, -apple-system, sans-serif';
      ctx.fillText(stat.label, x, statsY + 35);
    });

    // Footer
    ctx.fillStyle = '#6366f1';
    ctx.font = '400 20px system-ui, -apple-system, sans-serif';
    ctx.fillText('howoldami.com', 600, 590);

    // Download
    const link = document.createElement('a');
    link.download = 'my-age-stats.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}`;

  return (
    <div className="rounded-xl bg-slate-100 dark:bg-slate-800/50 p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        Share Your Stats
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Show the world how many seconds you&apos;ve been alive!
      </p>

      {/* Preview card */}
      <div className="rounded-xl bg-gradient-to-br from-indigo-950 to-indigo-900 p-6 sm:p-8 text-center mb-6">
        <p className="text-indigo-300 text-sm uppercase tracking-widest mb-2">
          I am
        </p>
        <p className="text-3xl sm:text-5xl font-bold text-white tabular-nums mb-2">
          {formatNumber(totalSeconds)}
        </p>
        <p className="text-indigo-300 text-lg">seconds old</p>
        <div className="mt-4 flex items-center justify-center gap-6 text-indigo-200 text-sm">
          <span>{formatNumber(stats.totalDays)} days</span>
          <span>{formatNumber(stats.heartbeats)} heartbeats</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopy}
          className="flex-1 min-w-[140px] px-4 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors"
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[140px] px-4 py-3 rounded-lg bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-medium transition-colors text-center"
        >
          Share on X
        </a>
        <button
          onClick={handleDownload}
          className="flex-1 min-w-[140px] px-4 py-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium transition-colors"
        >
          Download Image
        </button>
      </div>

      {/* Hidden canvas for image generation */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
