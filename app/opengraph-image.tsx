import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DeJon Johnson — Principal Digital Strategist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0f172a',
          backgroundImage:
            'radial-gradient(circle at 78% 32%, rgba(94, 234, 212, 0.22), transparent 55%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              color: '#5eead4',
              fontSize: 38,
              marginRight: 18,
              lineHeight: 1,
            }}
          >
            ◆
          </span>
          <span
            style={{
              color: '#94a3b8',
              fontSize: 24,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            notdijon.com
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 700,
              letterSpacing: '-0.045em',
              color: '#e2e8f0',
              lineHeight: 1,
              display: 'flex',
            }}
          >
            DeJon Johnson
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 44,
              color: '#94a3b8',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            Principal Digital Strategist
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 72,
              height: 2,
              background: '#5eead4',
              marginRight: 20,
            }}
          />
          <span
            style={{
              fontSize: 22,
              color: '#5eead4',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Built in Detroit
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
