import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects, projectCategories } from '../data/portfolioData'
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa'

const PER_PAGE = 6

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice(0, page * PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [activeCategory])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  const detailHref = (p) => p.caseStudy || p.live || '#'

  return (
    <section id="projects" className="projects py-16 px-6 border-b-5 border-black bg-white dark:bg-gray-950 overflow-hidden relative scroll-mt-24">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <h2 className="font-space text-3xl md:text-4xl font-bold uppercase tracking-tighter bg-yellow-400 dark:bg-pink-500 px-4 py-1.5 border-4 border-black shadow-neo -rotate-2">
            PROYEK PILIHAN
          </h2>
          <p className="font-mono text-base md:text-lg max-w-xl border-l-4 border-black pl-4 italic">
            Beberapa hasil karya saya dalam pengembangan web, game, AI, dan mobile.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs font-bold px-3 py-1 border-2 border-black uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-black text-white dark:bg-yellow-400 dark:text-black shadow-neo-mini -translate-y-0.5'
                  : 'bg-white dark:bg-gray-800 hover:-translate-y-0.5 hover:shadow-neo-mini'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory + '-' + page}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paginated.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              layout
              className="group relative"
            >
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />

              <div className="relative bg-white dark:bg-gray-900 border-3 border-black p-4 h-full flex flex-col group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                <a
                  href={detailHref(project)}
                  className="mb-3 block border-2 border-black overflow-hidden bg-gray-200 dark:bg-gray-800"
                  aria-label={`Buka detail ${project.title}`}
                >
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="bg-white dark:bg-gray-900 text-black dark:text-white font-bold px-2.5 py-1 border-2 border-black text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details ↗
                      </span>
                    </div>
                  </div>
                </a>

                <div className="mb-1.5 flex justify-between items-center gap-2">
                  {project.category && (
                    <span className="font-mono text-[9px] font-bold bg-black text-white dark:bg-yellow-400 dark:text-black px-1.5 py-0.5 border border-black uppercase tracking-wider">
                      {project.category}
                    </span>
                  )}
                  <span className="font-mono text-[10px] font-bold opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-space text-base md:text-lg font-bold mb-1 uppercase tracking-tight group-hover:underline decoration-yellow-400 decoration-4 underline-offset-4">
                  {project.title}
                </h3>

                <p className="font-mono text-xs leading-relaxed mb-3 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="font-mono text-[9px] font-bold bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-1.5 py-0.5 border border-black">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="font-mono text-[9px] font-bold opacity-50 px-1 py-0.5">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap gap-3 pt-2 border-t-2 border-black/10 dark:border-white/10 font-mono text-[11px] font-bold uppercase">
                  {project.caseStudy ? (
                    <a href={project.caseStudy} className="hover:text-pink-500 dark:hover:text-yellow-400 transition-colors">
                      Detail ↗
                    </a>
                  ) : null}
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-pink-500 dark:hover:text-yellow-400 transition-colors">
                      <FaGithub className="text-xs" /> Code
                    </a>
                  ) : null}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-pink-500 dark:hover:text-yellow-400 transition-colors">
                      <FaExternalLinkAlt className="text-xs" /> Live
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center font-mono text-lg mt-12 opacity-60">Tidak ada proyek di kategori ini.</p>
        )}

        {totalPages > 1 && page < totalPages && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="bg-black text-white dark:bg-yellow-400 dark:text-black font-bold px-6 py-2.5 border-4 border-black text-sm uppercase shadow-neo hover:-translate-y-1 hover:shadow-neo-large transition-all flex items-center gap-3"
            >
              <span>Muat Lainnya</span>
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
