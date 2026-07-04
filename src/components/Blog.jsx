import { FaArrowRight, FaBlog } from 'react-icons/fa'

const posts = [
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
  return (
    <section id="blog" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-4xl"><FaBlog /></span>
          <div>
            <h2 className="font-space font-black text-4xl tracking-tighter">Dari Blog</h2>
            <p className="font-mono text-sm opacity-60 mt-1">Tulisan terbaru dari blog.naufalrakha.my.id</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
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
              <p className="font-mono text-xs opacity-40">{post.date}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://blog.naufalrakha.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-space font-bold text-sm px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all group"
          >
            Lihat Semua Tulisan
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
