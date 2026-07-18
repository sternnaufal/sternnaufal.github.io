import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import ScrollProgressBar from './components/ScrollProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const Projects = lazy(() => import('./components/Projects'))
const Games = lazy(() => import('./components/Games'))
const Blog = lazy(() => import('./components/Blog'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const BlogPage = lazy(() => import('./components/BlogPage'))
const CvPage = lazy(() => import('./components/CvPage'))
const KeepsimpleDemo = lazy(() => import('./components/KeepsimpleDemo'))
const ProjectCase = lazy(() => import('./components/ProjectCase'))
const AlphascriptDemo = lazy(() => import('./components/AlphascriptDemo'))

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Suspense fallback={<div className="h-[700px]" />}><Projects /></Suspense>
      <Suspense fallback={<div className="h-[500px]" />}><Games /></Suspense>
      <Suspense fallback={<div className="h-[400px]" />}><Blog /></Suspense>
      <Suspense fallback={<div className="min-h-[1200px]" />}><About /></Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}><Contact /></Suspense>
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
          <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${darkMode ? 'bg-black' : 'bg-yellow-300'} ${darkMode ? 'text-white' : 'text-black'}`}>
          <Helmet>
            <title>Naufal Rakha Putra | Full-Stack Developer, Game Dev & AI Builder</title>
            <meta name="description" content="Portofolio Naufal Rakha Putra — Full-Stack Developer, Game Developer & AI Builder. React.js, Node.js, Laravel, Kotlin, Cyber Security. 25+ proyek, game Android di Google Play." />
            <meta property="og:title" content="Naufal Rakha Putra | Full-Stack Developer & Game Dev" />
            <meta property="og:description" content="Portofolio Naufal Rakha Putra — Full-Stack Developer, Game Developer & AI Builder. 25+ proyek termasuk CareFund, LG-Exambot, Flag Quiz Master." />
            <meta property="og:image" content="https://naufalrakha.my.id/api/og" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content="https://naufalrakha.my.id/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://naufalrakha.my.id/api/og" />
            <meta name="keywords" content="Naufal Rakha Putra, portfolio, full-stack developer, game developer, React.js, Node.js, Laravel, Kotlin, AI, cyber security, Malang, Universitas Brawijaya" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://naufalrakha.my.id" },
                  { "@type": "ListItem", "position": 2, "name": "Proyek", "item": "https://naufalrakha.my.id/#projects" },
                  { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://naufalrakha.my.id/blog" }
                ]
              })}
            </script>
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
                  { "@type": "SoftwareApplication", "name": "Catatanku", "applicationCategory": "WebApplication", "operatingSystem": "All", "description": "Aplikasi catatan digital untuk pelajar & mahasiswa.", "url": "https://naufalrakha.my.id/case-study/catatanku" },
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
                  "https://api.naufalrakha.my.id"
                ]
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Siapa Naufal Rakha Putra?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Naufal Rakha Putra adalah Full-Stack Developer, Game Developer, dan AI Builder asal Indonesia. Mahasiswa D3 Teknologi Informasi Universitas Brawijaya yang menguasai React.js, Node.js, Laravel, Kotlin, dan integrasi AI (Gemini, DeepSeek, Groq)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Apa tech stack utama yang dikuasai Naufal Rakha Putra?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tech stack utamanya: Front-End (React.js, Next.js, Tailwind CSS, Bootstrap), Back-End (Node.js/Express, Laravel, RESTful API, MySQL, Firebase), dan Game Development (Kotlin/Android, Twine, Unity, Godot). Ia juga mahir Python, Docker, dan Linux Server."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Proyek apa saja yang sudah dibuat Naufal Rakha Putra?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Beberapa proyek utama: CareFund (platform crowdfunding medis full-stack), LG-Exambot (generator soal ujian berbasis AI), GreenEvent (manajemen acara), Flag Quiz Master & Sortiverse (game Android di Google Play), Catatanku (aplikasi catatan PHP), Alphascript (library JavaScript), dan Todos API (RESTful API Express.js)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Apakah Naufal Rakha Putra menerima proyek freelance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ya. Naufal terbuka untuk kolaborasi dan proyek freelance di bidang web development, game development, dan AI integration. Hubungi melalui LinkedIn atau email yang tersedia di halaman kontak portofolio."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Studio game apa yang didirikan Naufal Rakha Putra?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Naufal adalah Lead Game Developer & Founder di Senin Terus Studio, studio game indie yang fokus pada game naratif dan edukasi berbasis web (Twine + JavaScript) serta Android. Game-game-nya tersedia di itch.io dan Google Play."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Sertifikat apa yang dimiliki Naufal Rakha Putra?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ia memiliki 16+ sertifikat IT termasuk Junior Web Programmer (BNSP), Web Programmer React JS (Telkom), kursus AWS Gen AI & Cloud (Dicoding), Introduction to Cybersecurity dan Networking Basics (Cisco), serta Python for Data Science (IBM Cognitive Class)."
                    }
                  }
                ]
              })}
            </script>
          </Helmet>

          <ScrollProgressBar />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />

            <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center font-space text-2xl font-black">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/cv" element={<CvPage />} />
                <Route path="/keepsimple-demo" element={<KeepsimpleDemo />} />
                <Route path="/alphascript-demo" element={<AlphascriptDemo />} />
                <Route path="/case-study/:slug" element={<ProjectCase />} />
              </Routes>
            </Suspense>
          
          <Footer />
        </div>
      </Router>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  )
}

export default App