/**
 * Prerender SPA routes into static HTML files so Google gets the correct
 * per-page <title>, description, canonical and JSON-LD from raw HTML — no
 * JavaScript rendering required.
 *
 * Covers: /case-study/:slug (from projects data) + /blog, /cv,
 * /keepsimple-demo, /alphascript-demo.
 *
 * Run after `vite build`: node scripts/prerender-case-studies.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { projects } from '../src/data/portfolioData.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const SITE = 'https://www.naufalrakha.my.id'
const DEFAULT_OG_IMAGE = `${SITE}/og-image.png`

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const appCategoryMap = {
  'Web App': 'WebApplication',
  AI: 'AIApplication',
  Game: 'GameApplication',
  Mobile: 'MobileApplication',
  Library: 'SoftwareApplication',
  Backend: 'WebAPI',
  Tools: 'SoftwareApplication',
}

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const jsonLdTag = (obj) => {
  const json = JSON.stringify(obj).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">\n    ${json}\n    </script>`
}

const html = readFileSync(join(DIST, 'index.html'), 'utf8')

// Drop homepage-only JSON-LD (Person/WebSite/ItemList/FAQ); each page gets its own.
const stripLdJson = (doc) =>
  doc.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')

// Wrong for subpages: hreflang blocks point to the homepage.
const stripHreflang = (doc) =>
  doc.replace(/\n?\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>/g, '')

/**
 * @param {object} spec
 * @param {string} spec.path      route path relative to root, e.g. "blog"
 * @param {string} spec.title     <title> content
 * @param {string} spec.desc      meta description
 * @param {string} [spec.ogTitle] overrides og:title / twitter:title
 * @param {string} [spec.ogDesc]  overrides og:description / twitter:description
 * @param {string} [spec.ogImage] overrides og:image / twitter:image
 * @param {string} [spec.ogType]  default "website"
 * @param {string} [spec.extraHead] raw HTML injected before </head>
 * @param {object} [spec.jsonLd]  JSON-LD object injected before </head>
 */
function render(spec) {
  const { path, title, desc, ogTitle = title, ogDesc = desc, ogImage = DEFAULT_OG_IMAGE, ogType = 'website' } = spec
  const pageUrl = `${SITE}/${path}`

  let out = stripHreflang(stripLdJson(html))
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${pageUrl}" />`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeHtml(desc)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeHtml(ogTitle)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeHtml(ogDesc)}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${ogImage}$2`)
    .replace(/(<meta property="og:image:alt" content=")[^"]*(")/, `$1${escapeHtml(ogTitle)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${pageUrl}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${ogType}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeHtml(ogTitle)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escapeHtml(ogDesc)}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${ogImage}$2`)
    .replace(/(<meta name="twitter:image:alt" content=")[^"]*(")/, `$1${escapeHtml(ogTitle)}$2`)

  if (spec.extraHead) out = out.replace('</head>', `    ${spec.extraHead}\n  </head>`)
  if (spec.jsonLd) out = out.replace('</head>', `    ${jsonLdTag(spec.jsonLd)}\n  </head>`)

  const dir = join(DIST, path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), out)
  console.log(`✅ Prerendered ${pageUrl}`)
}

// --- Static pages -----------------------------------------------------------

render({
  path: 'blog',
  title: 'Blog — Naufal Rakha Putra',
  desc: 'Tulisan teknologi, programming, hacking, dan sains komputer oleh Naufal Rakha Putra.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog — Naufal Rakha Putra',
    description: 'Tulisan teknologi, programming, hacking, dan sains komputer oleh Naufal Rakha Putra.',
    url: `${SITE}/blog`,
    isPartOf: { '@type': 'WebSite', name: 'Naufal Rakha Putra', url: SITE },
  },
})

render({
  path: 'cv',
  title: 'CV — Naufal Rakha Putra',
  desc: 'Curriculum Vitae Naufal Rakha Putra — Software Developer di Bukittinggi & Malang, Full Stack, Game & IT Generalist',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'CV — Naufal Rakha Putra',
    description: 'Curriculum Vitae Naufal Rakha Putra — Software Developer di Bukittinggi & Malang.',
    url: `${SITE}/cv`,
    isPartOf: { '@type': 'WebSite', name: 'Naufal Rakha Putra', url: SITE },
  },
})

render({
  path: 'keepsimple-demo',
  title: 'KeepSimple CSS — Demo & Dokumentasi | Naufal Rakha Putra',
  desc: 'KeepSimple CSS — Framework CSS minimalis, cepat, ringan. Demo live, dokumentasi lengkap, langsung copas!',
  extraHead: '<link rel="stylesheet" href="/keepsimple/style.css" />',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'KeepSimple CSS — Demo & Dokumentasi',
    description: 'Framework CSS minimalis, cepat, ringan. Demo live, dokumentasi lengkap.',
    url: `${SITE}/keepsimple-demo`,
    isPartOf: { '@type': 'WebSite', name: 'Naufal Rakha Putra', url: SITE },
  },
})

render({
  path: 'alphascript-demo',
  title: 'Alphascript — JavaScript Library Demo & Docs | Naufal Rakha Putra',
  desc: 'Alphascript — JavaScript library open-source untuk DOM manipulation cepat & ringan. Demo interaktif, dokumentasi lengkap, API reference.',
  ogTitle: 'Alphascript — JavaScript Library Demo & Docs',
  ogDesc: 'DOM manipulation library ringan ~2KB, zero dependencies, open source. Coba demo interaktif!',
  ogImage: 'https://www.naufalrakha.my.id/api/og?title=Alphascript%20%E2%80%94%20JS%20Library',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Alphascript — JavaScript Library Demo & Docs',
    description: 'JavaScript library open-source untuk DOM manipulation cepat & ringan, zero dependencies.',
    url: `${SITE}/alphascript-demo`,
    isPartOf: { '@type': 'WebSite', name: 'Naufal Rakha Putra', url: SITE },
  },
})

// --- Case-study pages (one per project) ------------------------------------

for (const project of projects) {
  const slug = slugify(project.title)
  const title = `${project.title} — Case Study | Naufal Rakha Putra`
  const desc = `Case Study ${project.title} — ${project.description.slice(0, 160)}`

  render({
    path: `case-study/${slug}`,
    title,
    desc,
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': appCategoryMap[project.category] || 'SoftwareApplication',
      name: project.title,
      description: project.description,
      url: project.live || project.github || `${SITE}/case-study/${slug}`,
      applicationCategory: project.category,
      operatingSystem: project.category === 'Mobile' ? 'Android' : 'All',
      author: { '@type': 'Person', name: 'Naufal Rakha Putra', url: SITE },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
    },
  })
}

console.log(`\nDone. ${projects.length + 4} pages prerendered → dist/`)
