import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects" className="projects py-20 px-6 border-b-5 border-black bg-white dark:bg-gray-950 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <h3 className="font-space text-4xl md:text-6xl font-bold uppercase tracking-tighter bg-yellow-400 dark:bg-pink-500 px-6 py-2 border-5 border-black shadow-neo-large -rotate-2">
            PROYEK PILIHAN
          </h3>
          <p className="font-mono text-lg md:text-xl text-black dark:text-gray-300 max-w-xl border-l-8 border-black pl-5 italic">
            Beberapa hasil karya saya dalam pengembangan web, mulai dari library open-source hingga aplikasi berbasis data.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative"
            >
              {/* Card shadow */}
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform" />
              
              <div className="relative bg-white dark:bg-gray-900 border-5 border-black p-6 h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 flex justify-between items-start">
                  <div className="bg-pink-500 dark:bg-yellow-400 w-12 h-12 border-4 border-black flex items-center justify-center font-bold text-xl -rotate-12 group-hover:rotate-0 transition-transform">
                    {index + 1}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" className="text-2xl hover:text-pink-500 dark:hover:text-yellow-400 transition-colors">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" className="text-2xl hover:text-pink-500 dark:hover:text-yellow-400 transition-colors">
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
                    <a href={project.caseStudy} className="bg-yellow-400 dark:bg-pink-500 text-black font-bold px-4 py-2 border-3 border-black text-sm uppercase shadow-neo-mini hover:-translate-y-1 hover:shadow-neo transition-all">
                      Case Study
                    </a>
                  ) : null}
                  <a href={project.github} target="_blank" className="bg-white dark:bg-gray-800 text-black dark:text-white font-bold px-4 py-2 border-3 border-black text-sm uppercase shadow-neo-mini hover:-translate-y-1 hover:shadow-neo transition-all">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
