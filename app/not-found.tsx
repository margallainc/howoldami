import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 mb-8">
        <svg
          className="w-12 h-12 text-indigo-500"
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
      <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-slate-500 dark:text-slate-400 mb-8">
        This page doesn&apos;t exist — but you do, and that&apos;s pretty remarkable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors"
      >
        Calculate Your Age
      </Link>
    </div>
  );
}
