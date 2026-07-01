import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaArrowUp } from 'react-icons/fa'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer bg-black text-white py-16 px-6 font-mono border-t-5 border-black overflow-hidden relative">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-10 w-1 h-full bg-white/10 hidden md:block" />
      <div className="absolute top-0 right-10 w-1 h-full bg-white/10 hidden md:block" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        
        <div className="text-center md:text-left basis-1/3">
          <h2 className="font-space font-black text-3xl mb-4 bg-yellow-400 text-black px-4 py-2 border-4 border-white inline-block -rotate-2">
            STERNNAUFAL
          </h2>
          <p className="text-sm opacity-60 max-w-xs mt-6 leading-relaxed">
            Membangun masa depan digital melalui kode yang jujur dan desain yang berani. Dibuat dengan React & Tailwind CSS.
          </p>
          <p className="text-xs opacity-40 mt-10">
            © {new Date().getFullYear()} Naufal Rakha Putra. All rights reserved.
          </p>
        </div>

        <div className="basis-1/3 flex flex-col items-center gap-8">
          <div className="flex gap-4">
            {[ 
              { icon: <FaInstagram />, url: "https://instagram.com/stern_naufal2712", name: "Instagram" },
              { icon: <FaGithub />, url: "https://github.com/sternnaufal", name: "Github" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/naufal-rakha-putra-a0130332a", name: "Linkedin" },
              { icon: <FaTwitter />, url: "https://x.com/okebeyos", name: "X (Twitter)" },
              { icon: <FaYoutube />, url: "https://youtube.com/@naufaltechtainment1", name: "Youtube" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" rel="noopener noreferrer" 
                aria-label={social.name}
                className="w-14 h-14 bg-white border-4 border-black text-black text-2xl flex items-center justify-center hover:bg-yellow-400 hover:-translate-y-2 transition-all shadow-neo-mini hover:shadow-neo group"
              >
                <span className="group-hover:scale-125 transition-transform">{social.icon}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm uppercase font-black tracking-widest bg-white text-black p-4 border-4 border-black shadow-neo-mini rotate-1">
             <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
             <a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a>
             <a href="#games" className="hover:text-pink-500 transition-colors">Games</a>
             <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
             <button onClick={scrollToTop} className="flex items-center gap-2 border-l-2 border-black pl-4 hover:text-blue-500 transition-colors">
                Top <FaArrowUp />
             </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Sites Network</p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <a href="https://naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Root</a>
              <a href="https://digital.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Digital</a>
              <a href="https://demo.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Demo Art</a>
              <a href="https://koleksilama.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Koleksi LAMA</a>
              <a href="https://webapps.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">WebApps</a>
              <a href="https://blog.naufalrakha.my.id" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Blog</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-xs mt-2">
              <a href="/about.html" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Tentang</a>
              <a href="/privacy.html" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Privasi</a>
              <a href="/contact.html" className="bg-white/10 hover:bg-yellow-400 hover:text-black px-3 py-1 border border-white/20 rounded transition-all">Kontak</a>
            </div>
          </div>
        </div>

        <div className="basis-1/3 text-center md:text-right hidden lg:block">
           <div className="inline-block p-10 border-10 border-white/20 bg-white/5 backdrop-blur-sm -rotate-3 hover:rotate-0 transition-transform duration-700">
             <p className="font-space font-black text-6xl tracking-tighter opacity-10 leading-none">
               STAY<br/>HUMBLE
             </p>
           </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
