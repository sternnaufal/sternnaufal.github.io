import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

async function loadFont(name, weight, style = 'normal') {
  const url = `https://fonts.googleapis.com/css2?family=${name}:wght@${weight}&display=swap`;
  const css = await (await fetch(url)).text();
  const match = css.match(/url\((https:\/\/[^)]+)\)/);
  if (!match) throw new Error(`Font ${name} not found`);
  const res = await fetch(match[1]);
  return { name, data: await res.arrayBuffer(), weight, style };
}

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Full Stack, Game & IT Generalist';
  const name = 'NAUFAL RAKHA PUTRA';
  const subtitle = 'Full Stack · Game · IT Generalist · 25+ Proyek · React · Node · Laravel · Kotlin';

  const [spaceGrotesk, ibmPlexMono] = await Promise.all([
    loadFont('Space+Grotesk', 900),
    loadFont('IBM+Plex+Mono', 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#fde047',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blocks */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            background: '#3b82f6',
            border: '4px solid #000',
            transform: 'rotate(12deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            width: '40px',
            height: '40px',
            background: '#ec4899',
            border: '4px solid #000',
            transform: 'rotate(-8deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            width: '24px',
            height: '24px',
            background: '#22c55e',
            border: '4px solid #000',
          }}
        />
        {/* Dots grid decorative */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            display: 'flex',
            gap: '12px',
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ display: 'flex', gap: '12px' }}>
              {[0, 1, 2].map((j) => (
                <div
                  key={j}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#000',
                    opacity: 0.3,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Main card */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            background: '#ffffff',
            border: '6px solid #000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px',
            boxShadow: '12px 12px 0 #000',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 900,
              fontSize: '72px',
              color: '#000',
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-2px',
              marginBottom: '16px',
            }}
          >
            {name}
          </div>

          {/* Title badge */}
          <div
            style={{
              display: 'flex',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 900,
                fontSize: '26px',
                color: '#000',
                background: '#fde047',
                border: '4px solid #000',
                padding: '8px 20px',
                textTransform: 'uppercase',
                transform: 'rotate(-1deg)',
                display: 'inline-block',
              }}
            >
              {title}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: '100%',
              height: '4px',
              background: '#000',
              marginBottom: '24px',
            }}
          />

          {/* Subtitle / tech stack */}
          <div
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '22px',
              color: '#333',
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>

          {/* URL */}
          <div
            style={{
              fontFamily: 'IBM Plex Mono',
              fontSize: '18px',
              color: '#666',
              marginTop: '12px',
            }}
          >
            www.naufalrakha.my.id
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [spaceGrotesk, ibmPlexMono],
    },
  );
}
