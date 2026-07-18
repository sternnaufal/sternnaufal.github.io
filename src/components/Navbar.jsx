import { useState } from 'react'
import { FaBars, FaTimes, FaGamepad } from 'react-icons/fa'
import { Sun, Moon } from 'lucide-react'

function Navbar({ darkMode, toggleDarkMode, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#games', label: 'Games' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="bg-yellow-400 dark:bg-black border-b-5 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-space text-2xl font-bold tracking-tighter">NAUFAL RAKHA PUTRA</h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="font-space font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors" aria-expanded="false">
              Social Media ▾
            </button>
            <div className="absolute hidden group-hover:block group-focus-within:block bg-black text-white min-w-40 py-2 shadow-neo border-3 border-black z-50" role="menu">
              <a href="https://instagram.com/stern_naufal2712" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">Instagram</a>
              <a href="https://x.com/okebeyos" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">X (Twitter)</a>
              <a href="https://linkedin.com/in/naufal-rakha-putra-a0130332a" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">Linkedin</a>
              <a href="https://youtube.com/@naufaltechtainment1" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">Youtube</a>
              <a href="https://medium.com/@naufalrakha2712" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">Medium</a>
            </div>
          </div>
          
          <div className="relative group">
            <button className="font-space font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors" aria-expanded="false">
              My Sites ▾
            </button>
            <div className="absolute hidden group-hover:block group-focus-within:block bg-black text-white min-w-40 py-2 shadow-neo border-3 border-black z-50" role="menu">
              <a href="https://webapps.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">Webapps</a>
              <a href="https://demo.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">Demo Artstyle</a>
              <a href="/blog" className="block px-4 py-2 hover:bg-white hover:text-black">Blog</a>
              <a href="https://seninterusstudio.vercel.app" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-white hover:text-black">Senin Terus Studio <FaGamepad size={14} className="inline" /></a>
            </div>
          </div>
          
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={sectionId}
                href={link.href}
                className={`font-space font-bold px-2 py-1 transition-all ${
                  isActive
                    ? 'bg-black text-white dark:bg-yellow-400 dark:text-black scale-110'
                    : 'hover:bg-black hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          
          <button 
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            className="bg-black text-white border-3 border-black p-2 text-xl shadow-neo hover:bg-yellow-400 hover:text-black transition-all rotate-3 hover:rotate-0"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl border-3 border-black p-1 bg-black text-white shadow-neo"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-yellow-400 dark:bg-black border-l-4 border-b-4 border-black absolute right-0 w-64 py-6 px-4 flex flex-col gap-4 shadow-neo-large animate-slide-in">
          <button onClick={toggleDarkMode} className="text-left font-bold flex items-center justify-between border-3 border-black p-2 bg-white dark:bg-gray-800">
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            <span>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</span>
          </button>
          <div className="flex flex-col gap-2 font-bold">
             <p className="text-xs uppercase opacity-60 mt-2">Navigation</p>
             {navLinks.map((link) => {
               const sectionId = link.href.replace('#', '')
               const isActive = activeSection === sectionId
               return (
                 <a
                   key={sectionId}
                   href={link.href}
                   onClick={() => setMobileMenuOpen(false)}
                   className={`p-2 transition-colors ${
                     isActive
                       ? 'bg-black text-white dark:bg-yellow-400 dark:text-black'
                       : 'border-b-2 border-black hover:bg-white dark:hover:bg-gray-800'
                   }`}
                 >
                   {link.label}
                 </a>
               )
             })}
          </div>
          <div className="flex flex-col gap-2 font-bold">
             <p className="text-xs uppercase opacity-60 mt-2">Socials</p>
              <a href="https://instagram.com/stern_naufal2712" target="_blank" rel="noopener noreferrer" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800">Instagram</a>
              <a href="https://x.com/okebeyos" target="_blank" rel="noopener noreferrer" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800">X (Twitter)</a>
              <a href="https://linkedin.com/in/naufal-rakha-putra-a0130332a" target="_blank" rel="noopener noreferrer" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800">Linkedin</a>
              <a href="https://youtube.com/@naufaltechtainment1" target="_blank" rel="noopener noreferrer" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800">Youtube</a>
              <a href="https://medium.com/@naufalrakha2712" target="_blank" rel="noopener noreferrer" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800">Medium</a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar