import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-yellow-400 dark:bg-black dark:text-white border-b-5 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-space text-2xl font-bold tracking-tighter">NAUFAL RAKHA PUTRA</h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="font-space font-bold hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors">
              Social Media ▾
            </button>
            <div className="absolute hidden group-hover:block bg-black text-yellow-400 min-w-40 py-2 shadow-neo border-3 border-black">
              <a href="https://instagram.com/stern_naufal2712" target="_blank" className="block px-4 py-2 hover:bg-white hover:text-black">Instagram</a>
              <a href="https://twitter.com/@okebeyos" target="_blank" className="block px-4 py-2 hover:bg-white hover:text-black">Twitter</a>
              <a href="https://linkedin.com/naufal-rakha-putra-a0130332a" target="_blank" className="block px-4 py-2 hover:bg-white hover:text-black">Linkedin</a>
            </div>
          </div>
          
          <div className="relative group">
            <button className="font-space font-bold hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors">
              My Sites ▾
            </button>
            <div className="absolute hidden group-hover:block bg-black text-yellow-400 min-w-40 py-2 shadow-neo border-3 border-black">
              <a href="https://catatanku.naufalrakha.my.id" target="_blank" className="block px-4 py-2 hover:bg-white hover:text-black">Catatanku (Apps)</a>
              <a href="https://webapps.naufalrakha.my.id" target="_blank" className="block px-4 py-2 hover:bg-white hover:text-black">Webapps</a>
              <a href="https://blog.naufalrakha.my.id" target="_blank" className="block px-4 py-2 hover:bg-white hover:text-black">Blog</a>
              <a href="https://story.naufalrakha.my.id" target="_blank" className="block px-4 py-2 hover:bg-white hover:text-black">Cerita</a>
            </div>
          </div>
          
          <a href="https://youtube.com/@naufaltechtainment1" target="_blank" className="font-space font-bold hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors">Youtube</a>
          <a href="#about" className="font-space font-bold hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors">About</a>
          <a href="#projects" className="font-space font-bold hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors">Projects</a>
          <a href="#contact" className="font-space font-bold hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors">Contact</a>
          
          <button 
            onClick={toggleDarkMode}
            className="bg-black text-yellow-400 border-3 border-black p-2 text-xl shadow-neo hover:bg-yellow-400 hover:text-black transition-all rotate-3 hover:rotate-0"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl border-3 border-black p-1 bg-black text-yellow-400 shadow-neo"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-yellow-400 dark:bg-black border-l-4 border-b-4 border-black absolute right-0 w-64 py-6 px-4 flex flex-col gap-4 shadow-neo-large animate-slide-in">
          <button onClick={toggleDarkMode} className="text-left font-bold flex items-center justify-between border-3 border-black p-2 bg-white dark:bg-gray-800">
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            <span>{darkMode ? '☀️' : '🌙'}</span>
          </button>
          <div className="flex flex-col gap-2 font-bold">
             <p className="text-xs uppercase opacity-60 mt-2">Navigation</p>
             <a href="#about" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>About</a>
             <a href="#projects" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>Projects</a>
             <a href="#contact" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
          <div className="flex flex-col gap-2 font-bold">
             <p className="text-xs uppercase opacity-60 mt-2">Socials</p>
             <a href="https://instagram.com/stern_naufal2712" target="_blank" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800">Instagram</a>
             <a href="https://linkedin.com/naufal-rakha-putra-a0130332a" target="_blank" className="p-2 border-b-2 border-black hover:bg-white dark:hover:bg-gray-800">Linkedin</a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
