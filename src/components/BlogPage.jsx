import { useState, useEffect } from 'react'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import { formatDate } from '../utils'

const CATEGORY_COLORS = {
  'C++': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Hacking': 'text-red-400 bg-red-400/10 border-red-400/20',
  'Teknik Hacking': 'text-red-400 bg-red-400/10 border-red-400/20',
  'Teknologi': 'text-green-400 bg-green-400/10 border-green-400/20',
  'Java': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'Programming': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Sistem Operasi': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
}

function getCategoryColor(cat) {
  return CATEGORY_COLORS[cat] || 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
}

function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('Semua')

  useEffect(() => {
    fetch('/blog-posts.json')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  const categories = ['Semua', ...new Set(posts.map(p => p.category))]
  const filtered = activeCategory === 'Semua' ? posts : posts.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Blog — Naufal Rakha Putra</title>
        <meta name="description" content="Tulisan teknologi, programming, hacking, dan sains komputer oleh Naufal Rakha Putra." />
        <meta property="og:title" content="Blog — Naufal Rakha Putra" />
        <meta property="og:description" content="Tulisan teknologi, programming, hacking, dan sains komputer oleh Naufal Rakha Putra." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://naufalrakha.my.id/blog" />
        <link rel="canonical" href="https://naufalrakha.my.id/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog — Naufal Rakha Putra",
            "description": "Tulisan teknologi, programming, hacking, dan sains komputer oleh Naufal Rakha Putra.",
            "url": "https://naufalrakha.my.id/blog",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": posts.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": p.url,
                "name": p.title
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back nav */}
        <a href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-yellow-400 mb-10 transition-colors">
          <FaArrowLeft /> Kembali ke Portfolio
        </a>

        <h1 className="font-space font-black text-5xl tracking-tighter mb-4">Blog</h1>
        <p className="font-mono text-white/50 mb-10">
          {posts.length} tulisan dari{' '}
          <a href="https://blog.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">
            blog.naufalrakha.my.id
          </a>
        </p>

        {/* Category filters */}
        {!loading && categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-mono px-3 py-1 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-yellow-400 text-black border-yellow-400'
                    : 'bg-transparent text-white/60 border-white/20 hover:border-yellow-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Posts list */}
        {loading ? (
          <div className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6 animate-pulse">
                <div className="h-3 w-20 bg-white/10 rounded mb-4" />
                <div className="h-6 w-3/4 bg-white/10 rounded mb-2" />
                <div className="h-4 w-full bg-white/10 rounded" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 opacity-50">
            <p className="text-xl">Belum ada tulisan.</p>
            <p className="text-sm mt-2">Kunjungi{' '}
              <a href="https://blog.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">
                blog.naufalrakha.my.id
              </a>
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((post, i) => (
              <a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-white/10 rounded-xl p-6 hover:bg-white/5 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded border ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="font-mono text-xs text-white/30">
                        {formatDate(post.date, { month: 'long' }) || post.date}
                      </span>
                    </div>
                    <h2 className="font-space font-bold text-xl group-hover:text-yellow-400 transition-colors mb-2">
                      {post.title}
                    </h2>
                    {post.snippet && (
                      <p className="text-sm text-white/40 line-clamp-2">
                        {post.snippet}...
                      </p>
                    )}
                  </div>
                  <FaExternalLinkAlt className="text-white/20 group-hover:text-yellow-400 transition-colors mt-2 shrink-0" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* External link CTA */}
        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <a
            href="https://blog.naufalrakha.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-space font-bold text-sm px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
          >
            Baca Langsung di Blog
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </main>
  )
}

export default BlogPage
