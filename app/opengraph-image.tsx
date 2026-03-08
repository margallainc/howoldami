import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'How Old Am I? — Exact Age Calculator with Live Life Stats';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Clock icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            border: '4px solid #a5b4fc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 4,
              height: 24,
              background: '#e0e7ff',
              borderRadius: 2,
              position: 'absolute',
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          How Old Am I
          <span style={{ color: '#818cf8' }}>?</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: '#c7d2fe',
            marginBottom: 48,
            display: 'flex',
          }}
        >
          Exact Age Calculator with Live Life Stats
        </div>

        {/* Stats preview */}
        <div
          style={{
            display: 'flex',
            gap: 48,
          }}
        >
          {['Years', 'Days', 'Heartbeats', 'Breaths'].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: 20, color: '#a5b4fc' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            fontSize: 20,
            color: '#6366f1',
            display: 'flex',
          }}
        >
          secondsalive.com
        </div>
      </div>
    ),
    { ...size }
  );
}
