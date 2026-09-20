/**
 * Generate image-sitemap.xml dari projects + certificates + gallery photos.
 * Run: node scripts/generate-image-sitemap.cjs
 */
const fs = require('fs');
const path = require('path');

const SITE = 'https://www.naufalrakha.my.id';
const PUBLIC = path.join(__dirname, '..', 'public');
const SRC = path.join(__dirname, '..', 'src');
const OUTPUT = path.join(PUBLIC, 'image-sitemap.xml');

const today = new Date().toISOString().split('T')[0];

// --- Extract projects (title, description, image) ---
function extractProjects() {
  const src = fs.readFileSync(path.join(SRC, 'data', 'portfolioData.js'), 'utf-8');
  const start = src.indexOf('export const projects = [');
  const end = src.indexOf('\n]', start);
  const section = src.slice(start, end);

  const entries = [];
  const blocks = section.split(/\n  \{/).slice(1);
  for (const b of blocks) {
    const title = b.match(/title:\s*'([^']+)'/)?.[1];
    const image = b.match(/image:\s*'([^']+)'/)?.[1];
    const desc = b.match(/description:\s*'([^']+)'/)?.[1];
    if (title && image && !image.includes('placeholder')) {
      entries.push({ title, image, desc: desc || title });
    }
  }
  return entries;
}

// --- Extract certificates with real images ---
function extractCertificates() {
  const src = fs.readFileSync(path.join(SRC, 'data', 'portfolioData.js'), 'utf-8');
  const start = src.indexOf('export const certificates = [');
  const end = src.indexOf('\n]', start);
  const section = src.slice(start, end);

  const entries = [];
  const matches = section.matchAll(/title:\s*'([^']+)',\s*provider:\s*'([^']+)'[^}]*image:\s*'([^']+)'/g);
  for (const m of matches) {
    const [, title, provider, image] = m;
    if (image && !image.endsWith('cert.svg')) {
      entries.push({ title, image, desc: `${title} — ${provider}` });
    }
  }
  return entries;
}

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

const abs = (p) => (p.startsWith('http') ? p : `${SITE}${p}`);

const projects = extractProjects();
const certs = extractCertificates();

const images = [
  { loc: `${SITE}/og-image.png`, caption: 'Naufal Rakha Putra — Software Developer di Bukittinggi & Malang' },
  { loc: `${SITE}/ku.png`, caption: 'Foto profil Naufal Rakha Putra' },
  ...projects.map((p) => ({ loc: abs(p.image), caption: `${p.title} — ${p.desc.slice(0, 120)}` })),
  ...certs.map((c) => ({ loc: abs(c.image), caption: c.desc })),
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
xml += '  <url>\n';
xml += `    <loc>${SITE}/</loc>\n`;
xml += `    <lastmod>${today}</lastmod>\n`;
for (const img of images) {
  xml += '    <image:image>\n';
  xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
  xml += `      <image:title>${escapeXml(img.caption.split(' - ')[0])}</image:title>\n`;
  xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
  xml += '    </image:image>\n';
}
xml += '  </url>\n';
xml += '</urlset>\n';

fs.writeFileSync(OUTPUT, xml);
console.log(`✅ Generated image-sitemap.xml with ${images.length} images`);
