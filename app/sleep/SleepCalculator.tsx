'use client';

import { useState } from 'react';

type Mode = 'wakeup' | 'bedtime';

interface CycleResult {
  cycles: number;
  time: string;
  hours: number;
  minutes: number;
}

const QUIZ_QUESTIONS = [
  {
    q: 'On a free day with no alarm, when do you naturally wake up?',
    options: ['Before 6am', '6–8am', '8–10am', 'After 10am'],
  },
  {
    q: 'When do you feel mentally sharpest?',
    options: ['Early morning', 'Late morning', 'Afternoon', 'Late at night'],
  },
  {
    q: 'If you had to wake up at 6am, how hard is that?',
    options: ['Easy', 'Doable', 'Hard', 'Near impossible'],
  },
  {
    q: 'When do you naturally feel sleepy at night?',
    options: ['Before 9pm', '9–11pm', '11pm–1am', 'After 1am'],
  },
];

const CHRONOTYPES = [
  {
    name: 'Lion',
    min: 0,
    max: 3,
    description:
      "You're a natural early riser who dominates the morning hours. Your energy peaks before noon, making mornings your most productive time. Lions tend to wind down early and rarely burn the midnight oil.",
    bedtime: '9:00 PM',
    wakeTime: '5:30 AM',
  },
  {
    name: 'Bear',
    min: 4,
    max: 7,
    description:
      'You follow the solar cycle, most active during daylight hours with energy peaking late morning. Bears represent about 55% of the population, making this the most common chronotype. Sleep comes easily and reliably.',
    bedtime: '10:30 PM',
    wakeTime: '7:00 AM',
  },
  {
    name: 'Wolf',
    min: 8,
    max: 10,
    description:
      "You're a night owl whose mind truly comes alive after dark. Wolves hit their cognitive peak in the late afternoon and struggle with early morning starts. Creative energy runs strongest well into the evening.",
    bedtime: '12:30 AM',
    wakeTime: '8:00 AM',
  },
  {
    name: 'Dolphin',
    min: 11,
    max: 12,
    description:
      "A light, easily disrupted sleeper with an active mind that resists shutting down. Dolphins are often high achievers with a tendency toward perfectionism — which is both a strength and the reason sleep doesn't come easily.",
    bedtime: '11:30 PM',
    wakeTime: '6:30 AM',
  },
];

function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function minutesToDisplay(total: number): string {
  const normalized = ((total % 1440) + 1440) % 1440;
  const h = Math.floor(normalized / 60);
  const m = normalized % 60;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const display = h % 12 || 12;
  return `${display}:${String(m).padStart(2, '0')} ${ampm}`;
}

function computeResults(mode: Mode, time: string, latency: number): CycleResult[] {
  const base = timeToMinutes(time);
  return [3, 4, 5, 6].map(cycles => {
    const sleep = cycles * 90;
    const resultMin =
      mode === 'wakeup' ? base - sleep - latency : base + latency + sleep;
    return {
      cycles,
      time: minutesToDisplay(resultMin),
      hours: Math.floor(sleep / 60),
      minutes: sleep % 60,
    };
  });
}

export default function SleepCalculator() {
  const [mode, setMode] = useState<Mode>('wakeup');
  const [targetTime, setTargetTime] = useState('07:00');
  const [latency, setLatency] = useState(14);
  const [results, setResults] = useState<CycleResult[] | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null, null]);

  const calculate = () => {
    if (targetTime) setResults(computeResults(mode, targetTime, latency));
  };

  const answer = (qi: number, ai: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[qi] = ai;
      return next;
    });
  };

  const complete = answers.every(a => a !== null);
  const score = complete ? (answers as number[]).reduce((s, a) => s + a, 0) : null;
  const chronotype =
    score !== null ? CHRONOTYPES.find(c => score >= c.min && score <= c.max) : null;

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* ── Mode switcher ── */}
      <div className="inline-flex border border-[var(--border)]">
        {(['wakeup', 'bedtime'] as Mode[]).map(m => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              setResults(null);
            }}
            className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-colors duration-200 ${
              mode === m
                ? 'bg-[var(--gold)] text-[var(--bg)]'
                : 'text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            {m === 'wakeup' ? 'Wake up at\u2026' : 'Going to bed at\u2026'}
          </button>
        ))}
      </div>

      {/* ── Inputs ── */}
      <div className="grid sm:grid-cols-2 gap-10">
        <div>
          <label className="block text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-5">
            {mode === 'wakeup' ? 'Wake-up time' : 'Bedtime'}
          </label>
          <input
            type="time"
            value={targetTime}
            onChange={e => setTargetTime(e.target.value)}
            className="date-field text-left"
            style={{ maxWidth: '180px', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
          />
        </div>
        <div>
          <label className="block text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-5">
            Minutes to fall asleep
          </label>
          <div className="flex items-end gap-3">
            <input
              type="number"
              value={latency}
              onChange={e =>
                setLatency(Math.max(0, Math.min(120, parseInt(e.target.value) || 0)))
              }
              min={0}
              max={120}
              className="date-field text-center"
              style={{ maxWidth: '100px', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
            />
            <span className="text-[var(--dim)] text-sm pb-2">min</span>
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        className="px-8 py-3 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-all duration-200"
      >
        Calculate
      </button>

      {/* ── Results ── */}
      {results && (
        <section className="animate-fade-up">
          <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">
            {mode === 'wakeup' ? 'Go to bed at' : 'Wake up at'}
          </p>
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[var(--border)]"
            style={{ background: 'var(--border)' }}
          >
            {results.map(r => (
              <div
                key={r.cycles}
                className={`px-5 py-7 ${r.cycles === 5 ? 'bg-[var(--surface2)]' : 'bg-[var(--bg)]'}`}
                style={
                  r.cycles === 5
                    ? { boxShadow: 'inset 0 2px 0 var(--gold)' }
                    : {}
                }
              >
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: r.cycles === 5 ? 'var(--gold)' : 'var(--muted)' }}>
                  {r.cycles === 5 ? 'Recommended' : `${r.cycles} cycles`}
                </p>
                <p
                  className="font-display text-[var(--text)] leading-none tabular-nums"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
                >
                  {r.time}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wide mt-3">
                  {r.cycles} cycles &middot;{' '}
                  {r.hours}h{r.minutes > 0 ? ` ${r.minutes}m` : ''} sleep
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Chronotype Quiz ── */}
      <section>
        <hr className="rule mb-12" />
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-4">
          Chronotype quiz
        </p>
        <h2
          className="font-display text-[var(--text)] mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          What&apos;s your sleep type?
        </h2>
        <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xl mb-12">
          Answer four questions to find your chronotype — the biological sleep pattern you were
          born with.
        </p>

        <div className="space-y-10">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <div key={qi}>
              <p className="text-[var(--text)] text-sm font-medium mb-4">
                <span className="text-[var(--gold)] mr-2">{qi + 1}.</span>
                {q.q}
              </p>
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[var(--border)]"
                style={{ background: 'var(--border)' }}
              >
                {q.options.map((opt, ai) => (
                  <button
                    key={ai}
                    onClick={() => answer(qi, ai)}
                    className={`px-4 py-3 text-xs text-left transition-colors duration-150 ${
                      answers[qi] === ai
                        ? 'bg-[var(--gold)] text-[var(--bg)]'
                        : 'bg-[var(--bg)] text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Chronotype result ── */}
        {chronotype && (
          <div
            className="mt-12 animate-fade-up border border-[var(--border)]"
            style={{ boxShadow: 'inset 0 2px 0 var(--gold)' }}
          >
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-[var(--gold)] text-xs tracking-[0.35em] uppercase mb-4">
                Your chronotype
              </p>
              <p
                className="font-display text-[var(--text)] mb-5"
                style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)' }}
              >
                {chronotype.name}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xl mb-8">
                {chronotype.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div>
                  <p className="text-[var(--muted)] text-xs tracking-widest uppercase mb-1.5">
                    Optimal bedtime
                  </p>
                  <p className="font-display text-[var(--text)] text-2xl">
                    {chronotype.bedtime}
                  </p>
                </div>
                <div>
                  <p className="text-[var(--muted)] text-xs tracking-widest uppercase mb-1.5">
                    Optimal wake time
                  </p>
                  <p className="font-display text-[var(--text)] text-2xl">
                    {chronotype.wakeTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
