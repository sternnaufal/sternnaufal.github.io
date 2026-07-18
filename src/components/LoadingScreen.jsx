import { useState, useEffect } from 'react'

const highlights = [
  { label: 'Game Views', value: '3.070+' },
  { label: 'AI Project', value: 'Rp2,5jt' },
  { label: 'Google Play', value: '60+ Download' },
  { label: 'YouTube', value: '700+ Subs' },
  { label: 'Blog Readers', value: '4.000+' },
]

const quotes = [
  '"Kode bukan hanya soal fungsi, tapi juga cerita."',
  '"Membangun web seperti merangkai puisi dengan kode."',
  '"Desain yang baik dimulai dari struktur kode yang bersih."',
]

const LoadingScreen = ({ darkMode, onFinished }) => {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)
  const highlight = highlights[Math.floor(Math.random() * highlights.length)]
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 15
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          setShow(false)
          // memberi waktu opacity transition loading screen fade out
          setTimeout(onFinished, 300)
        }, 400)
      }
      setProgress(current)
    }, 180)
    return () => clearInterval(interval)
  }, [onFinished])

  return (
    <div className={`fixed inset-0 z-[9999] ${darkMode ? 'bg-black' : 'bg-yellow-400'} flex flex-col items-center justify-center p-6 overflow-hidden transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`absolute top-10 left-10 w-32 h-32 border-4 ${darkMode ? 'border-white bg-pink-500' : 'border-black bg-white'} -rotate-12 shadow-neo`} />
      <div className={`absolute bottom-10 right-10 w-48 h-48 border-4 ${darkMode ? 'border-white' : 'border-black'} bg-pink-500 rotate-12 shadow-neo`} />
      <div className={`absolute top-1/4 right-20 w-16 h-16 border-4 ${darkMode ? 'border-white' : 'border-black'} bg-lime-400 shadow-neo animate-spin-slow`} />

      <div className="w-full max-w-2xl text-center space-y-8 relative z-10">
        <h1 className="text-5xl md:text-7xl font-space font-black tracking-tighter uppercase leading-none">
          Naufal Rakha<br />
          <span className="bg-black text-white dark:bg-yellow-400 dark:text-black px-4 inline-block rotate-1 border-4 border-white dark:border-black shadow-neo">Putra</span>
        </h1>

        <div className="bg-black text-white font-mono font-bold text-lg md:text-xl p-4 border-4 border-white shadow-neo -rotate-1">
          {quote}
        </div>

        <div className={`bg-white dark:text-black ${darkMode ? 'border-white' : 'border-black'} shadow-neo p-4`}>
          <p className="font-mono text-xs uppercase tracking-widest mb-1">Random Highlight</p>
          <p className="font-space text-2xl font-black">{highlight.label}: <span>{highlight.value}</span></p>
        </div>

        <div className="space-y-4">
          <div className={`relative w-full h-12 bg-white ${darkMode ? 'border-white' : 'border-black'} shadow-neo overflow-hidden`}>
            <div
              className="h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
              <span className="text-white font-mono font-bold text-xl uppercase tracking-widest">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          <p className="font-mono font-bold text-xl uppercase animate-pulse">
            {progress < 100 ? 'Loading...' : 'Ready!'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen