import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

// Main Page Component
function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
  }

  return (
    <HelmetProvider>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      <Router>
        <div className={`min-h-screen transition-colors duration-300 ${loading ? 'hidden' : ''} ${darkMode ? 'dark bg-black' : 'bg-gray-50'}`}>
          <Helmet>
            <title>Naufal Rakha Putra | Full-Stack Developer & Game Dev</title>
            <meta name="description" content="Portfolio Naufal Rakha Putra — Full-Stack Developer, Game Developer (Senin Terus Studio), Cyber Security enthusiast. IPK 4.00 di Universitas Brawijaya." />
            <meta property="og:title" content="Naufal Rakha Putra | Full-Stack Developer" />
            <meta property="og:description" content="Portfolio Naufal Rakha Putra — Full-Stack Developer, Game Developer (Senin Terus Studio)." />
            <meta property="og:image" content="https://naufalrakha.my.id/ku.webp" />
            <meta property="og:url" content="https://naufalrakha.my.id/" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="canonical" href="https://naufalrakha.my.id/" />
          </Helmet>

          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future routes like /projects/:id can be added here */}
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
