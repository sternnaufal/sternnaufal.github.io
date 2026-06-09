import { motion } from 'framer-motion'
import { games, studio } from '../data/portfolioData'
import { FaExternalLinkAlt, FaGamepad } from 'react-icons/fa'

function Games() {
  return (
    <section id="games" className="games py-24 bg-lime-100 dark:bg-gray-950 border-b-5 border-black px-6 md:px-12 overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Studio Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <div className="inline-block mb-6 relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black border-4 border-black" />
              <h3 className="relative z-10 px-8 py-3 bg-pink-500 border-4 border-black text-2xl md:text-3xl font-black uppercase tracking-widest">
                🎮 Game Studio
              </h3>
            </div>
            <h4 className="font-space text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 -rotate-1">
              <a href={studio.url} target="_blank" className="hover:text-pink-500 dark:hover:text-yellow-400 transition-colors underline decoration-yellow-400 decoration-8 underline-offset-8">
                {studio.name}
              </a>
            </h4>
            <p className="font-mono text-lg max-w-2xl dark:text-gray-300">
              {studio.description}
            </p>
          </div>
          <a
            href={studio.url}
            target="_blank"
            className="bg-black text-pink-500 dark:bg-yellow-400 dark:text-black font-space font-bold px-8 py-4 border-4 border-black shadow-neo-large hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all text-xl uppercase flex items-center gap-3 shrink-0"
          >
            <FaGamepad />
            Kunjungi Studio
          </a>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, i) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform" />
              <div className="relative z-10 bg-white dark:bg-gray-900 border-4 border-black p-8 h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">
                  {game.icon}
                </div>

                {game.tag && (
                  <span className="font-mono text-[10px] font-bold bg-pink-500 dark:bg-yellow-400 text-black px-2 py-1 border-2 border-black uppercase tracking-wider mb-3 w-fit">
                    {game.tag}
                  </span>
                )}

                <h5 className="font-space text-2xl font-black uppercase tracking-tight mb-3">
                  {game.title}
                </h5>

                <p className="font-mono text-sm leading-relaxed mb-6 flex-grow dark:text-gray-300">
                  {game.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t-3 border-black dark:border-white/20">
                  {game.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono text-xs font-bold bg-yellow-400 dark:bg-pink-500 text-black dark:text-white px-3 py-2 border-2 border-black shadow-neo-mini hover:-translate-y-1 hover:shadow-neo transition-all flex items-center gap-2"
                    >
                      {link.label}
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ))}
                </div>

                {game.stats && (
                  <p className="font-mono text-[10px] font-bold opacity-60 mt-4">
                    {game.stats}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Games
