import { studio } from '../data/portfolioData'
import { FaGamepad } from 'react-icons/fa'
import { Gamepad2 } from 'lucide-react'

function Games() {
  return (
    <section id="games" className="games py-24 bg-lime-100 dark:bg-gray-950 border-b-5 border-black px-6 md:px-12 overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Studio Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-8">
          <div>
            <div className="inline-block mb-6 relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black border-4 border-black" />
              <h2 className="relative z-10 px-8 py-3 bg-pink-500 border-4 border-black text-2xl md:text-3xl font-black uppercase tracking-widest">
                <Gamepad2 size={32} className="inline mr-2" /> Game Studio
              </h2>
            </div>
            <h3 className="font-space text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 -rotate-1">
              <a href={studio.url} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 dark:hover:text-yellow-400 transition-colors underline decoration-yellow-400 decoration-8 underline-offset-8">
                {studio.name}
              </a>
            </h3>
            <p className="font-mono text-lg max-w-2xl dark:text-gray-300">
              {studio.description}
            </p>
          </div>
          <a
            href={studio.url}
            target="_blank" rel="noopener noreferrer"
            className="bg-black text-white dark:bg-yellow-400 dark:text-black font-space font-bold px-8 py-4 border-4 border-black shadow-neo-large hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all text-xl uppercase flex items-center gap-3 shrink-0"
          >
            <FaGamepad />
            Kunjungi Studio
          </a>
        </div>
      </div>
    </section>
  )
}

export default Games
