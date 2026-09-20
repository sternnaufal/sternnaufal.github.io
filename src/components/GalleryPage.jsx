import { useState } from 'react'
import { FaArrowLeft, FaImage } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Helmet } from 'react-helmet-async'

const galleryData = [
  // Foto Pribadi
  { src: '/images/gallery/placeholder.svg', alt: 'Foto Pribadi 1', category: 'Pribadi' },
  { src: '/images/gallery/placeholder.svg', alt: 'Foto Pribadi 2', category: 'Pribadi' },
  { src: '/images/gallery/placeholder.svg', alt: 'Foto Pribadi 3', category: 'Pribadi' },
  // Project Screenshots
  { src: '/images/projects/yuwarajafest.png', alt: 'YuwarajaFest 2026', category: 'Project' },
  { src: '/images/projects/carefund.png', alt: 'CareFund', category: 'Project' },
  { src: '/images/projects/lg-exambot.png', alt: 'LG-Exambot', category: 'Project' },
  { src: '/images/projects/greenevent.png', alt: 'GreenEvent', category: 'Project' },
  { src: '/images/projects/bemvokasi.png', alt: 'BEM Vokasi UB', category: 'Project' },
  { src: '/images/projects/chickenquest.png', alt: 'ChickenQuest', category: 'Project' },
  { src: '/images/projects/flagquiz.png', alt: 'Flag Quiz Master', category: 'Project' },
  { src: '/images/projects/sortiverse.png', alt: 'Sortiverse', category: 'Project' },
]

const categories = ['Semua', 'Pribadi', 'Project']

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [selectedImage, setSelectedImage] = useState(null)

  const filtered = activeCategory === 'Semua'
    ? galleryData
    : galleryData.filter(img => img.category === activeCategory)

  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Gallery — Naufal Rakha Putra</title>
        <meta name="description" content="Galeri foto pribadi dan screenshot proyek oleh Naufal Rakha Putra." />
        <meta property="og:title" content="Gallery — Naufal Rakha Putra" />
        <meta property="og:description" content="Galeri foto pribadi dan screenshot proyek oleh Naufal Rakha Putra." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.naufalrakha.my.id/gallery" />
        <link rel="canonical" href="https://www.naufalrakha.my.id/gallery" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-6 mb-12">
          <a
            href="/"
            className="bg-white text-black border-4 border-black p-3 shadow-neo hover:-translate-y-1 hover:shadow-neo-large transition-all"
          >
            <FaArrowLeft size={20} />
          </a>
          <div>
            <h1 className="font-space text-4xl md:text-5xl font-black uppercase tracking-tighter">
              <span className="bg-yellow-400 px-4 py-1 border-4 border-black inline-block -rotate-1">Gallery</span>
            </h1>
            <p className="font-mono text-sm mt-2 opacity-80">Foto pribadi dan screenshot proyek.</p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs font-bold px-4 py-2 border-3 border-black uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-yellow-400 text-black shadow-neo-mini'
                  : 'bg-white text-black hover:-translate-y-0.5 hover:shadow-neo-mini'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img)}
              className="group relative bg-white border-3 border-black overflow-hidden shadow-neo-mini hover:shadow-neo hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="aspect-square relative">
                <LazyLoadImage
                  src={img.src}
                  alt={img.alt}
                  effect="blur"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="bg-white text-black font-bold px-2 py-1 border-2 border-black text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <FaImage /> Zoom
                  </span>
                </div>
                <div className="absolute top-2 right-2 bg-black text-white font-mono text-[9px] font-bold px-1.5 py-0.5 border border-black uppercase">
                  {img.category}
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-mono text-lg mt-12 opacity-60">Belum ada foto di kategori ini.</p>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-white text-black border-3 border-black w-12 h-12 font-bold text-xl shadow-neo hover:bg-pink-500 hover:text-white transition-colors z-10"
          >
            ✕
          </button>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white border-4 border-black shadow-neo-large overflow-hidden">
              <div className="p-4 border-b-3 border-black bg-yellow-400 flex justify-between items-center">
                <div>
                  <h3 className="font-space font-bold text-lg uppercase">{selectedImage.alt}</h3>
                  <p className="font-mono text-sm">{selectedImage.category}</p>
                </div>
                <span className="font-mono text-xs bg-black text-white px-2 py-1 border-2 border-black">
                  {filtered.indexOf(selectedImage) + 1} / {filtered.length}
                </span>
              </div>
              <div className="bg-gray-100 flex items-center justify-center p-4 max-h-[75vh] overflow-auto">
                <LazyLoadImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full h-auto object-contain border-2 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default GalleryPage
