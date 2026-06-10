import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, projectCategories } from '../data/portfolioData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects" className="projects py-20 px-6 border-b-5 border-black bg-white dark:bg-gray-950 overflow-hidden relative scroll-mt-24">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <h3 className="font-space text-4xl md:text-6xl font-bold uppercase tracking-tighter bg-yellow-400 dark:bg-pink-500 px-6 py-2 border-5 border-black shadow-neo-large -rotate-2">
            PROYEK PILIHAN
          </h3>
          <p className="font-mono text-lg md:text-xl max-w-xl border-l-8 border-black pl-5 italic">
            Beberapa hasil karya saya dalam pengembangan web, game, AI, dan mobile.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-space font-bold px-5 py-2 border-3 border-black uppercase text-sm tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-black text-white dark:bg-yellow-400 dark:text-black shadow-neo-mini -translate-y-1'
                  : 'bg-white dark:bg-gray-800 hover:-translate-y-0.5 hover:shadow-neo-mini'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              layout
              className="group relative"
            >
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform" />

              <div className="relative bg-white dark:bg-gray-900 border-5 border-black p-6 h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 flex justify-between items-start">
                  <div className="flex gap-2 items-center">
                    <div className="bg-pink-500 dark:bg-yellow-400 w-10 h-10 border-4 border-black flex items-center justify-center font-bold text-sm -rotate-12 group-hover:rotate-0 transition-transform">
                      {index + 1}
                    </div>
                    {project.category && (
                      <span className="font-mono text-[10px] font-bold bg-black text-white dark:bg-yellow-400 dark:text-black px-2 py-1 border-2 border-black uppercase tracking-wider">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 dark:hover:text-yellow-400 transition-colors">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 dark:hover:text-yellow-400 transition-colors">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="font-space text-2xl font-bold mb-3 uppercase tracking-tight group-hover:underline decoration-yellow-400 decoration-8 underline-offset-4">
                  {project.title}
                </h4>

                <p className="font-mono text-sm leading-relaxed mb-6 flex-grow border-b-2 border-black/10 dark:border-white/10 pb-4">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-3 pt-4">
                  {project.caseStudy ? (
                    <a href={project.caseStudy} className="bg-yellow-400 dark:bg-pink-500 text-black dark:text-white font-bold px-4 py-2 border-3 border-black text-sm uppercase shadow-neo-mini hover:-translate-y-1 hover:shadow-neo transition-all">
                      Case Study
                    </a>
                  ) : null}
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 text-black dark:text-white font-bold px-4 py-2 border-3 border-black text-sm uppercase shadow-neo-mini hover:-translate-y-1 hover:shadow-neo transition-all">
                      View Code
                    </a>
                  ) : project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 text-black dark:text-white font-bold px-4 py-2 border-3 border-black text-sm uppercase shadow-neo-mini hover:-translate-y-1 hover:shadow-neo transition-all">
                      View App
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
      </div>
    </section>
  )
}

export default Projects