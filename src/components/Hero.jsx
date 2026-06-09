import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hero bg-pink-500 dark:bg-gray-950 dark:text-white py-16 md:py-24 px-6 md:px-12 border-b-5 border-black relative overflow-hidden"
    >
      {/* Decorative dots for Neo-Brutalism */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 border-4 border-black animate-bounce hidden md:block" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500 border-4 border-black rotate-12 hidden md:block" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="text-center md:text-left flex-1">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-space text-5xl md:text-7xl font-bold mb-6 text-black dark:text-yellow-400 leading-none uppercase -rotate-1">
              FULL-STACK DEV.<br/>
              <span className="bg-yellow-400 dark:bg-pink-500 px-3 border-4 border-black shadow-neo-small rotate-2 inline-block">GAME & AI BUILDER.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono italic text-xl md:text-2xl mb-8 text-black dark:text-gray-300 max-w-2xl bg-white/10 dark:bg-black/20 p-4 border-l-8 border-black shadow-neo-mini backdrop-blur-sm"
          >
            "Kode bukan hanya soal fungsi, tapi juga cerita." 
            <span className="block mt-2 text-sm not-italic font-bold text-gray-800 dark:text-gray-400 opacity-70"> - Naufal Rakha Putra</span>
          </motion.p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <a href="#projects" className="bg-black text-pink-500 font-bold px-8 py-3 border-4 border-black shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-large transition-all hover:bg-white hover:text-black">
              View My Work
            </a>
            <a
              href="/CV_Naufal Rakha Putra.pdf"
              target="_blank"
              onClick={() => {
                const c = parseInt(localStorage.getItem('cv_downloads') || '0') + 1
                localStorage.setItem('cv_downloads', c)
              }}
              className="bg-white dark:bg-gray-800 text-black dark:text-white font-bold px-8 py-3 border-4 border-black shadow-neo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-large transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              CV → Juni 2026
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ rotate: 10, scale: 0.5, opacity: 0 }}
          animate={{ rotate: -3, scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-yellow-400 translate-x-4 translate-y-4 border-4 border-black z-0 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform" />
          <div className="relative z-10 border-8 border-black p-2 bg-white shadow-neo">
            <LazyLoadImage 
              src="/ku.webp" 
              alt="Foto Naufal Rakha Putra" 
              width={280}
              height={380}
              effect="blur"
              className="w-64 h-80 md:w-80 md:h-[450px] object-cover filter contrast-125 saturate-150 group-hover:scale-105 transition-transform duration-500 overflow-hidden"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
