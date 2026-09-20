/**
 * Fetch latest videos from YouTube channel RSS feed.
 * Saves as public/youtube-videos.json for use at build time.
 * Run: node scripts/fetch-youtube-videos.cjs
 */
const fs = require('fs');
const path = require('path');

const CHANNEL_ID = 'UC8NZeqxAw_ixwYXpE1OO6Fg';
const RSS = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const OUTPUT = path.join(__dirname, '..', 'public', 'youtube-videos.json');
const MAX = 6;

function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

/**
 * RSS feed tidak membedakan live stream vs video biasa.
 * Cek halaman watch untuk field isLiveContent (true = pernah live/premiere).
 */
async function isLive(videoId) {
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; naufalrakha-portfolio/1.0)' },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) return false;
    const html = await res.text();
    const m = html.match(/"isLiveContent":(true|false)/);
    return m ? m[1] === 'true' : false;
  } catch {
    // Ragu → anggap live agar tidak lolos ke daftar.
    return true;
  }
}

async function main() {
  const res = await fetch(RSS, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; naufalrakha-portfolio/1.0)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  const xml = await res.text();

  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
  const parsed = entries.map(([, e]) => {
    const videoId = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] || '';
    const title = decode(e.match(/<media:title>([^<]+)<\/media:title>/)?.[1] || '(no title)');
    const published = e.match(/<published>([^<]+)<\/published>/)?.[1] || '';
    const views = e.match(/<media:statistics views="(\d+)"/)?.[1] || '';
    const thumbnail = e.match(/<media:thumbnail url="([^"]+)"/)?.[1]
      || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '');
    return {
      videoId,
      title,
      url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : '',
      thumbnail,
      published,
      views: views ? Number(views) : null,
    };
  });

  // Cek live per batch, berhenti begitu dapat cukup video non-live.
  const videos = [];
  let liveCount = 0;
  const BATCH = 3;

  for (let i = 0; i < parsed.length && videos.length < MAX; i += BATCH) {
    const batch = parsed.slice(i, i + BATCH);
    const flags = await Promise.all(batch.map((v) => isLive(v.videoId)));
    batch.forEach((v, j) => {
      if (flags[j]) {
        liveCount++;
      } else if (videos.length < MAX) {
        videos.push(v);
      }
    });
  }

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(videos, null, 2));
  console.log(`✅ Fetched ${videos.length} YouTube videos (${liveCount} live skipped) → public/youtube-videos.json`);
}

main().catch((e) => {
  console.error('⚠️ Failed to fetch YouTube videos:', e.message);
  // Don't fail build — component has fallback
  process.exit(0);
});
