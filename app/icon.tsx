import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0f172a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#5eead4',
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: '-0.06em',
          fontFamily: 'system-ui, sans-serif',
          borderRadius: 6,
        }}
      >
        DJ
      </div>
    ),
    { ...size }
  );
}
