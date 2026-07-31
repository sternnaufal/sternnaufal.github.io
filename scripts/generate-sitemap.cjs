/**
 * Generate comprehensive sitemap.xml from project case studies & static pages.
 * Run: node scripts/generate-sitemap.cjs
 */
const fs = require('fs');
const path = require('path');

const SITE = 'https://www.naufalrakha.my.id';
const PUBLIC = path.join(__dirname, '..', 'public');
const SRC = path.join(__dirname, '..', 'src');
const PROJECTS_DIR = path.join(PUBLIC, 'projects');
const OUTPUT = path.join(PUBLIC, 'sitemap.xml');

const today = new Date().toISOString().split('T')[0];

const pages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/blog', priority: '0.9', changefreq: 'daily' },
  { loc: '/cv', priority: '0.8', changefreq: 'monthly' },
  { loc: '/keepsimple/', priority: '0.8', changefreq: 'monthly' },
  { loc: '/keepsimple-demo', priority: '0.6', changefreq: 'monthly' },
  { loc: '/alphascript-demo', priority: '0.6', changefreq: 'monthly' },
];

// Parse portfolioData.js to extract ONLY project titles (from projects array + games array)
function getProjectSlugs() {
  const dataPath = path.join(SRC, 'data', 'portfolioData.js');
  try {
    const dataSrc = fs.readFileSync(dataPath, 'utf-8');
    
    // Find the projects array section and games array section
    const projectsSection = extractArraySection(dataSrc, 'export const projects = [');
    const gamesSection = extractArraySection(dataSrc, 'export const games = [');
    
    const slugs = [];
    
    if (projectsSection) {
      const titleMatches = projectsSection.matchAll(/title:\s*'([^']+)'/g);
      for (const m of titleMatches) {
        const slug = m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        slugs.push(slug);
      }
    }
    
    if (gamesSection) {
      const titleMatches = gamesSection.matchAll(/title:\s*'([^']+)'/g);
      for (const m of titleMatches) {
        const slug = m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        slugs.push(slug);
      }
    }
    
    return [...new Set(slugs)];
  } catch (e) {
    console.warn('⚠️  Failed to parse portfolioData.js:', e.message);
    return [];
  }
}

function extractArraySection(source, startMarker) {
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) return null;
  
  let depth = 0;
  let inString = false;
  let stringChar = '';
  
  for (let i = startIdx; i < source.length; i++) {
    const ch = source[i];
    
    if (!inString) {
      if (ch === "'" || ch === '"' || ch === '`') {
        inString = true;
        stringChar = ch;
      } else if (ch === '[') {
        depth++;
      } else if (ch === ']') {
        depth--;
        if (depth === 0) {
          return source.substring(startIdx, i + 1);
        }
      }
    } else {
      if (ch === '\\') {
        i++; // skip escaped char
      } else if (ch === stringChar) {
        inString = false;
      }
    }
  }
  return null;
}

const caseStudySlugs = getProjectSlugs();

// Collect all project case study HTML files
let projectFiles = [];
try {
  projectFiles = fs.readdirSync(PROJECTS_DIR)
    .filter(f => f.endsWith('.html'))
    .sort();
} catch {
  console.warn('⚠️  projects/ directory not found');
}

const todayStr = today;

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const p of pages) {
  xml += '  <url>\n';
  xml += `    <loc>${SITE}${p.loc}</loc>\n`;
  xml += `    <lastmod>${todayStr}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += '  </url>\n';
}

// React case-study routes (one per project)
for (const slug of caseStudySlugs) {
  xml += '  <url>\n';
  xml += `    <loc>${SITE}/case-study/${slug}</loc>\n`;
  xml += `    <lastmod>${todayStr}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.7</priority>\n`;
  xml += '  </url>\n';
}

// Static project case study HTML files
for (const f of projectFiles) {
  xml += '  <url>\n';
  xml += `    <loc>${SITE}/projects/${f}</loc>\n`;
  xml += `    <lastmod>${todayStr}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.7</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync(OUTPUT, xml);
console.log(`✅ Generated sitemap with ${pages.length + caseStudySlugs.length + projectFiles.length} URLs → public/sitemap.xml`);