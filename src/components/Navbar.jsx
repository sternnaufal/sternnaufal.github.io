import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaGamepad, FaChevronDown } from 'react-icons/fa'
import { Sun, Moon } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', url: 'https://instagram.com/stern_naufal2712' },
  { label: 'X (Twitter)', url: 'https://x.com/okebeyos' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/naufal-rakha-putra-a0130332a' },
  { label: 'YouTube', url: 'https://youtube.com/@naufaltechtainment1' },
  { label: 'Medium', url: 'https://medium.com/@naufalrakha2712' },
]

const siteLinks = [
  { label: 'IT Solutions', url: 'https://digital.naufalrakha.my.id' },
  { label: 'Webapps', url: 'https://webapps.naufalrakha.my.id' },
  { label: 'Demo Artstyle', url: 'https://demo.naufalrakha.my.id' },
  { label: 'Blog', url: '/blog' },
  { label: 'Gallery', url: '/gallery' },
  { label: 'Senin Terus Studio', url: 'https://seninterusstudio.vercel.app', icon: true },
]

function Navbar({ darkMode, toggleDarkMode, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [socialOpen, setSocialOpen] = useState(false)
  const [sitesOpen, setSitesOpen] = useState(false)
  const socialRef = useRef(null)
  const sitesRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (socialRef.current && !socialRef.current.contains(e.target)) setSocialOpen(false)
      if (sitesRef.current && !sitesRef.current.contains(e.target)) setSitesOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#games', label: 'Studio' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="bg-yellow-400 dark:bg-black border-b-5 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center gap-4">
        <Link to="/" className="font-space text-lg sm:text-xl md:text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity whitespace-nowrap">
          NAUFAL RAKHA PUTRA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
          <div className="relative" ref={socialRef}>
            <button
              onClick={() => { setSocialOpen(!socialOpen); setSitesOpen(false) }}
              className="font-space font-bold text-sm xl:text-base hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black px-2 py-1.5 transition-colors flex items-center gap-1.5"
              aria-expanded={socialOpen}
              aria-haspopup="menu"
            >
              Social <FaChevronDown size={10} className={`transition-transform ${socialOpen ? 'rotate-180' : ''}`} />
            </button>
            {socialOpen && (
              <div className="absolute right-0 top-full mt-1 bg-black text-white min-w-44 py-2 shadow-neo border-3 border-black z-50" role="menu">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-yellow-400 hover:text-black transition-colors font-mono text-sm">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative" ref={sitesRef}>
            <button
              onClick={() => { setSitesOpen(!sitesOpen); setSocialOpen(false) }}
              className="font-space font-bold text-sm xl:text-base hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black px-2 py-1.5 transition-colors flex items-center gap-1.5"
              aria-expanded={sitesOpen}
              aria-haspopup="menu"
            >
              My Sites <FaChevronDown size={10} className={`transition-transform ${sitesOpen ? 'rotate-180' : ''}`} />
            </button>
            {sitesOpen && (
              <div className="absolute right-0 top-full mt-1 bg-black text-white min-w-52 py-2 shadow-neo border-3 border-black z-50" role="menu">
                {siteLinks.map((s) =>
                  s.url.startsWith('http') ? (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-400 hover:text-black transition-colors font-mono text-sm"
                    >
                      {s.label} {s.icon && <FaGamepad size={13} />}
                    </a>
                  ) : (
                    <Link
                      key={s.label}
                      to={s.url}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-400 hover:text-black transition-colors font-mono text-sm"
                    >
                      {s.label} {s.icon && <FaGamepad size={13} />}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          <div className="w-px h-6 bg-black/20 dark:bg-white/20" />

          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <Link
                key={sectionId}
                to={`/${link.href}`}
                className={`font-space font-bold text-sm xl:text-base px-2 py-1.5 transition-all ${
                  isActive
                    ? 'bg-black text-white dark:bg-yellow-400 dark:text-black'
                    : 'hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            className="bg-black text-white dark:bg-yellow-400 dark:text-black border-3 border-black p-2 shadow-neo hover:-translate-y-0.5 transition-all ml-1"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile/Tablet controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            className="bg-black text-white dark:bg-yellow-400 dark:text-black border-3 border-black p-2 shadow-neo-mini"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-xl border-3 border-black p-2 bg-black text-white dark:bg-yellow-400 dark:text-black shadow-neo-mini"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden absolute inset-x-0 top-full h-[calc(100vh-100%)] bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="lg:hidden absolute right-0 top-full h-[calc(100vh-100%)] w-72 max-w-[85vw] bg-yellow-400 dark:bg-gray-950 border-l-4 border-b-4 border-black overflow-y-auto py-6 px-5 flex flex-col gap-6 shadow-neo-large animate-slide-in z-50">
            <div className="flex flex-col gap-1.5 font-bold">
              <p className="text-xs uppercase opacity-60 mb-1 font-mono tracking-widest">Navigation</p>
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <Link
                    key={sectionId}
                    to={`/${link.href}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2.5 border-2 border-black transition-colors ${
                      isActive
                        ? 'bg-black text-white dark:bg-yellow-400 dark:text-black'
                        : 'bg-white dark:bg-gray-900 hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="flex flex-col gap-1.5 font-bold">
              <p className="text-xs uppercase opacity-60 mb-1 font-mono tracking-widest">Socials</p>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank" rel="noopener noreferrer"
                  className="p-2.5 border-2 border-black bg-white dark:bg-gray-900 hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 font-bold">
              <p className="text-xs uppercase opacity-60 mb-1 font-mono tracking-widest">My Sites</p>
              {siteLinks.map((s) =>
                s.url.startsWith('http') ? (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 border-2 border-black bg-white dark:bg-gray-900 hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition-colors"
                  >
                    {s.label} {s.icon && <FaGamepad size={13} />}
                  </a>
                ) : (
                  <Link
                    key={s.label}
                    to={s.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2.5 border-2 border-black bg-white dark:bg-gray-900 hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition-colors"
                  >
                    {s.label} {s.icon && <FaGamepad size={13} />}
                  </Link>
                )
              )}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

export default Navbar
