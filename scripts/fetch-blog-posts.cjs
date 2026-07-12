/**
 * Fetch latest blog posts from Blogger RSS feed
 * Saves as public/blog-posts.json for use at build time.
 * Run: node scripts/fetch-blog-posts.cjs
 */
const fs = require('fs');
const path = require('path');

const BLOG_RSS = 'https://blog.naufalrakha.my.id/feeds/posts/default?alt=json&max-results=50';
const OUTPUT = path.join(__dirname, '..', 'public', 'blog-posts.json');

async function main() {
  const res = await fetch(BLOG_RSS);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  const data = await res.json();

  const entries = data.feed?.entry || [];
  const posts = entries.map(entry => {
    const altUrl = entry.link?.find(l => l.rel === 'alternate');
    return {
      title: entry.title?.$t || '(no title)',
      url: altUrl?.href || '',
      date: entry.published?.$t || '',
      category: entry.category?.[0]?.term || 'Technology',
      snippet: (entry.summary?.$t || entry.content?.$t || '')
        .replace(/<[^>]*>/g, '').substring(0, 250),
    };
  });

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(posts, null, 2));
  console.log(`✅ Fetched ${posts.length} blog posts → public/blog-posts.json`);
}

main().catch(e => {
  console.error('⚠️ Failed to fetch blog posts:', e.message);
  // Don't fail build — component has fallback
  process.exit(0);
});
