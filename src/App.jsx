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
import KeepsimpleDemo from './components/KeepsimpleDemo'
import Blog from './components/Blog'
import BlogPage from './components/BlogPage'
import CvPage from './components/CvPage'

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Games />
      <Blog />
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
      const best = entries.reduce((max, entry) =>
        entry.intersectionRatio > (max?.intersectionRatio || 0) ? entry : max
      , null)
      if (best?.isIntersecting) {
        setActiveSection(best.target.id)
      }
    }, { threshold: [0.25, 0.4, 0.55, 0.7] })

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <HelmetProvider>
      {loading && <LoadingScreen darkMode={darkMode} onFinished={() => setLoading(false)} />}
      <Router>
          <div className={`${loading ? 'hidden' : ''} min-h-screen flex flex-col ${darkMode ? 'bg-black' : 'bg-yellow-300'} ${darkMode ? 'text-white' : 'text-black'}`}>
          <Helmet>
            <title>Naufal Rakha Putra | Full-Stack Developer & Game Dev</title>
            <meta name="description" content="Portfolio Naufal Rakha Putra — Full-Stack Developer, Game Developer (Senin Terus Studio), Cyber Security enthusiast." />
            <meta property="og:title" content="Naufal Rakha Putra | Full-Stack Developer" />
            <meta property="og:description" content="Portfolio Naufal Rakha Putra — Full-Stack Developer, Game Developer (Senin Terus Studio)." />
            <meta property="og:image" content="https://naufalrakha.my.id/ku.png" />
            <meta property="og:url" content="https://naufalrakha.my.id/" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="canonical" href="https://naufalrakha.my.id/" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Naufal Rakha Putra",
                "url": "https://naufalrakha.my.id",
                "image": "https://naufalrakha.my.id/ku.png",
                "jobTitle": ["Full-Stack Developer", "Game Developer", "IT Generalist", "Lead Game Developer and Founder at Senin Terus Studio"],
                "email": "naufalrakha2712@gmail.com",
                "address": { "@type": "PostalAddress", "addressLocality": "Malang", "addressRegion": "Jawa Timur", "addressCountry": "Indonesia" },
                "alumniOf": ["Universitas Brawijaya", "SMKN 1 Bukittinggi"],
                "knowsAbout": ["React.js", "Node.js", "Laravel", "PHP", "Game Development", "Cyber Security", "Kotlin", "Python", "Tailwind CSS", "Bootstrap", "Docker", "Git", "REST API", "MySQL", "Firebase", "Express.js", "SQL", "Azure AI Foundry", "Apache", "Postman", "Linux Server (Debian)", "Cisco", "MikroTik", "Twine", "Godot", "Unity", "C#", "SEO", "Web Scraping", "Bot Automation"],
                "sameAs": ["https://linkedin.com/in/naufal-rakha-putra", "https://github.com/sternnaufal", "https://instagram.com/stern_naufal2712", "https://youtube.com/@naufaltechtainment1", "https://x.com/okebeyos", "https://medium.com/@naufalrakha2712", "https://vokasi.ub.ac.id/author/naufal/", "https://play.google.com/store/apps/dev?id=9004420762141640273", "https://seninterus.itch.io/", "https://blog.naufalrakha.my.id", "https://digital.naufalrakha.my.id", "https://webapps.naufalrakha.my.id", "https://demo.naufalrakha.my.id", "https://api.naufalrakha.my.id"]
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Projects Portfolio Naufal Rakha Putra",
                "description": "Kumpulan proyek pilihan Naufal Rakha Putra dalam pengembangan web, game, AI, dan mobile.",
                "itemListElement": [
                  { "@type": "SoftwareApplication", "name": "CareFund", "applicationCategory": "WebApplication", "operatingSystem": "All", "description": "Platform crowdfunding medis full-stack React.js + Node.js/Express.", "url": "https://github.com/orgs/group4pbl-carefund/repositories" },
                  { "@type": "SoftwareApplication", "name": "LG-Exambot", "applicationCategory": "AIApplication", "operatingSystem": "All", "description": "Sistem generator soal ujian otomatis berbasis AI. Multi-AI fallback: Gemini, DeepSeek, Groq.", "url": "https://exambot.l-glearning.com/" },
                  { "@type": "SoftwareApplication", "name": "GreenEvent", "applicationCategory": "WebApplication", "operatingSystem": "All", "description": "Platform manajemen acara lingkungan hidup.", "url": "https://greenevent.infinityfree.me" },
                  { "@type": "MobileApplication", "name": "Flag Quiz Master", "applicationCategory": "GameApplication", "operatingSystem": "Android", "description": "Game edukasi tebak bendera negara native Android.", "url": "https://play.google.com/store/apps/details?id=com.seninterus.flagquizapps" },
                  { "@type": "MobileApplication", "name": "Sortiverse", "applicationCategory": "GameApplication", "operatingSystem": "Android", "description": "Game puzzle edukasi sorting untuk Android.", "url": "https://play.google.com/store/apps/details?id=com.seninterus.sortiverse" },
                  { "@type": "SoftwareApplication", "name": "Catatanku", "applicationCategory": "WebApplication", "operatingSystem": "All", "description": "Aplikasi catatan digital untuk pelajar & mahasiswa.", "url": "https://naufalrakha.my.id/projects/catatanku.html" },
                  { "@type": "WebAPI", "name": "Todos API", "applicationCategory": "WebApplication", "operatingSystem": "All", "description": "RESTful API manajemen todos dengan Express.js + TypeScript.", "url": "https://api-three-self-56.vercel.app/" }
                ]
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Skills Naufal Rakha Putra",
                "description": "Keahlian Naufal Rakha Putra dalam pengembangan software, game, jaringan, dan keamanan.",
                "itemListElement": [
                  { "@type": "DefinedTerm", "name": "React.js", "description": "Front-end library for building user interfaces" },
                  { "@type": "DefinedTerm", "name": "Node.js (Express)", "description": "Back-end JavaScript runtime with Express framework" },
                  { "@type": "DefinedTerm", "name": "Laravel", "description": "PHP web framework" },
                  { "@type": "DefinedTerm", "name": "Kotlin", "description": "Programming language for Android development" },
                  { "@type": "DefinedTerm", "name": "Tailwind CSS", "description": "Utility-first CSS framework" },
                  { "@type": "DefinedTerm", "name": "Python", "description": "Programming language for AI and automation" },
                  { "@type": "DefinedTerm", "name": "Docker", "description": "Containerization platform" },
                  { "@type": "DefinedTerm", "name": "MySQL", "description": "Relational database management system" },
                  { "@type": "DefinedTerm", "name": "JavaScript (ES6+)", "description": "Modern JavaScript programming" },
                  { "@type": "DefinedTerm", "name": "Git/GitHub", "description": "Version control and collaboration platform" },
                  { "@type": "DefinedTerm", "name": "Linux Server", "description": "Server administration and management" },
                  { "@type": "DefinedTerm", "name": "Cyber Security", "description": "CTF methodologies and security analysis" }
                ]
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Naufal Rakha Putra",
                "url": "https://naufalrakha.my.id",
                "description": "Full-Stack Developer, Game Developer & IT Generalist — Portfolio & Projects.",
                "about": {
                  "@type": "Person",
                  "name": "Naufal Rakha Putra"
                },
                "relatedLink": [
                  "https://digital.naufalrakha.my.id",
                  "https://blog.naufalrakha.my.id",
                  "https://webapps.naufalrakha.my.id",
                  "https://demo.naufalrakha.my.id",
                  "https://koleksilama.naufalrakha.my.id",
                  "https://api.naufalrakha.my.id"
                ]
              })}
            </script>
          </Helmet>

          <ScrollProgressBar />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/cv" element={<CvPage />} />
              <Route path="/keepsimple-demo" element={<KeepsimpleDemo />} />
            </Routes>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App