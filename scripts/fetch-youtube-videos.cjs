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

async function main() {
  const res = await fetch(RSS, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; naufalrakha-portfolio/1.0)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  const xml = await res.text();

  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, MAX);
  const videos = entries.map(([, e]) => {
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

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(videos, null, 2));
  console.log(`✅ Fetched ${videos.length} YouTube videos → public/youtube-videos.json`);
}

main().catch((e) => {
  console.error('⚠️ Failed to fetch YouTube videos:', e.message);
  // Don't fail build — component has fallback
  process.exit(0);
});
