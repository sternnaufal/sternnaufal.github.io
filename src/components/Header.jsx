import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

const socialIcons = {
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  youtube: FaYoutube,
  twitter: FaTwitter,
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-neo-yellow dark:bg-black dark:text-white border-b-4 md:border-b-5 border-black p-4 md:p-8 flex flex-col md:flex-row md:justify-between md:items-center relative">
      <h1 className="font-space text-2xl md:text-3xl font-bold">NAUFAL RAKHA PUTRA</h1>
      
      {/* Hamburger Button */}
      <button 
        className="md:hidden absolute right-4 top-4 text-2xl cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Desktop Navigation */}
      <nav className={`flex-col md:flex-row md:flex gap-4 md:gap-8 items-start md:items-center mt-4 md:mt-0 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
        {/* Social Media Dropdown */}
        <div className="group relative">
          <button className="font-space font-bold hover:underline">Social Media</button>
          <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-black text-neo-yellow z-50 border-2 border-yellow-400">
            {portfolioData.socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-white hover:text-black transition-colors"
                >
                  {social.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* My Sites Dropdown */}
        <div className="group relative">
          <button className="font-space font-bold hover:underline">My Sites</button>
          <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-black text-neo-yellow z-50 border-2 border-yellow-400">
            {portfolioData.mySites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                {site.name}
              </a>
            ))}
          </div>
        </div>

        <a href={portfolioData.youtube} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
          Youtube
        </a>
        <a href="#about" className="font-bold hover:underline">About</a>
        <a href="#projects" className="font-bold hover:underline">Projects</a>
        <a href="#contact" className="font-bold hover:underline">Contact</a>
        
        <button
          onClick={toggleTheme}
          className="bg-black text-neo-yellow border-4 border-yellow-400 px-3 py-1 text-xl cursor-pointer shadow-[4px_4px_0_#FFFF00] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}


