import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import ScrollProgressBar from './components/ScrollProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Games from './components/Games'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Games />
      <About />
      <Contact />
    </main>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return true
    if (stored === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { rootMargin: '-40% 0px -55% 0px' })

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <HelmetProvider>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      <Router>
        <div className={`${loading ? 'hidden' : ''} ${darkMode ? 'bg-black text-white' : 'bg-amber-50 text-black'}`}>
          <Helmet>
            <title>Naufal Rakha Putra | Full-Stack Developer & Game Dev</title>
            <meta name="description" content="Portfolio Naufal Rakha Putra — Full-Stack Developer, Game Developer (Senin Terus Studio), Cyber Security enthusiast." />
            <meta property="og:title" content="Naufal Rakha Putra | Full-Stack Developer" />
            <meta property="og:description" content="Portfolio Naufal Rakha Putra — Full-Stack Developer, Game Developer (Senin Terus Studio)." />
            <meta property="og:image" content="https://naufalrakha.my.id/ku.webp" />
            <meta property="og:url" content="https://naufalrakha.my.id/" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="canonical" href="https://naufalrakha.my.id/" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Naufal Rakha Putra",
                "url": "https://naufalrakha.my.id",
                "image": "https://naufalrakha.my.id/ku.webp",
                "jobTitle": ["Full-Stack Developer", "Game Developer", "Lead Game Developer & Founder at Senin Terus Studio"],
                "email": "naufalrakha2712@gmail.com",
                "address": { "@type": "PostalAddress", "addressLocality": "Malang", "addressRegion": "Jawa Timur", "addressCountry": "Indonesia" },
                "alumniOf": ["Universitas Brawijaya", "SMKN 1 Bukittinggi"],
                "knowsAbout": ["React.js", "Node.js", "Laravel", "Game Development", "Cyber Security"],
                "sameAs": ["https://linkedin.com/in/naufal-rakha-putra-a0130332a", "https://github.com/sternnaufal", "https://instagram.com/stern_naufal2712", "https://youtube.com/@naufaltechtainment1"]
              })}
            </script>
          </Helmet>

          <ScrollProgressBar />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App