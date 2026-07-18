import { useState, useEffect } from 'react'
import { FaArrowRight, FaBlog } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import { formatDate } from '../utils'

const FALLBACK_POSTS = [
  {
    title: "Teknik Hacking #09 — File Inclusion",
    url: "https://blog.naufalrakha.my.id/2026/03/teknik-hacking-09-file-inclusion.html",
    date: "22 Mar 2026",
    category: "Hacking",
  },
  {
    title: "C++ #28 — Pointer ke Pointer",
    url: "https://blog.naufalrakha.my.id/2026/03/c-28-pointer-ke-pointer.html",
    date: "14 Mar 2026",
    category: "C++",
  },
  {
    title: "C++ #27 — Pointer dan Fungsi",
    url: "https://blog.naufalrakha.my.id/2026/03/c-27-pointer-dan-fungsi.html",
    date: "11 Mar 2026",
    category: "C++",
  },
]

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetch('/blog-posts.json')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => { if (!cancelled) setPosts(Array.isArray(data) ? data.slice(0, 6) : []) })
      .catch(() => { if (!cancelled) setPosts(FALLBACK_POSTS) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  const display = posts.length ? posts : FALLBACK_POSTS

  return (
    <section id="blog" className="py-24 px-6 bg-black text-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Penting Literasi — Blog Naufal Rakha Putra",
            "url": "https://blog.naufalrakha.my.id",
            "author": {
              "@type": "Person",
              "name": "Naufal Rakha Putra",
              "url": "https://www.naufalrakha.my.id"

              "image": p.image || "https://www.naufalrakha.my.id/ku.png",
              "author": { "@type": "Person", "name": "Naufal Rakha Putra", "url": "https://www.naufalrakha.my.id" },
              "publisher": { "@type": "Person", "name": "Naufal Rakha Putra" }
            }))
          })}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-4xl"><FaBlog /></span>
          <div>
            <h2 className="font-space font-black text-4xl tracking-tighter">Dari Blog</h2>
            <p className="font-mono text-sm opacity-60 mt-1">Tulisan terbaru dari blog.naufalrakha.my.id</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 animate-pulse">
                  <div className="h-4 w-20 bg-white/10 rounded mb-3" />
                  <div className="h-6 w-full bg-white/10 rounded mb-2" />
                  <div className="h-4 w-24 bg-white/10 rounded" />
                </div>
              ))
            : display.map((post, i) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-yellow-400 transition-all duration-300"
                >
                  <span className="inline-block text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-space font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-mono text-xs opacity-40">{formatDate(post.date) || post.date}</p>
                </a>
              ))
          }
        </div>

        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 font-space font-bold text-sm px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all group mr-4"
          >
            Lihat Semua Tulisan
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://blog.naufalrakha.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-space font-bold text-sm px-6 py-3 border-2 border-white/20 text-white/60 rounded-lg hover:bg-white/10 hover:text-white transition-all"
          >
            Buka Blog Eksternal
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
