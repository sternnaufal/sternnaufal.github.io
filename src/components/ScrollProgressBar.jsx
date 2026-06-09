import { useState, useEffect } from 'react'

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScroll(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[9999] bg-black/10 dark:bg-white/10">
      <div
        className="h-full bg-yellow-400 dark:bg-pink-500 transition-all duration-150 ease-out shadow-[0_0_8px_#facc15]"
        style={{ width: `${scroll}%` }}
      />
    </div>
  )
}
