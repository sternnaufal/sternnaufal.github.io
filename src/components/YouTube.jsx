import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaYoutube, FaPlay, FaEye, FaArrowRight } from 'react-icons/fa'

const CHANNEL_URL = 'https://www.youtube.com/@naufaltechtainment1'
const CHANNEL_NAME = 'Naufal Techtainment'

const FALLBACK = [
  {
    videoId: 'ShWZbfOXKb4',
    title: 'Konfigurasi Routing 2 LAN | Tutorial Cisco Packet Tracer Eps.06',
    url: 'https://www.youtube.com/watch?v=ShWZbfOXKb4',
    thumbnail: 'https://i4.ytimg.com/vi/ShWZbfOXKb4/hqdefault.jpg',
    published: '2025-12-25T18:33:37+00:00',
    views: 10,
  },
  {
    videoId: 'tjmiN_rdEfo',
    title: 'Konfigurasi Client-Server | Tutorial Cisco Packet Tracer Eps.5',
    url: 'https://www.youtube.com/watch?v=tjmiN_rdEfo',
    thumbnail: 'https://i1.ytimg.com/vi/tjmiN_rdEfo/hqdefault.jpg',
    published: '2025-11-16T17:01:26+00:00',
    views: 36,
  },
]

const fmtDate = (iso) => {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return ''
  }
}

function VideoCard({ video, featured = false }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={`group relative ${featured ? 'sm:col-span-2' : ''}`}>
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />

      <div className="relative z-10 bg-white dark:bg-gray-900 border-3 border-black h-full flex flex-col overflow-hidden">
        <div className={`relative bg-black ${featured ? 'aspect-video' : 'aspect-video'}`}>
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer"
              aria-label={`Putar video: ${video.title}`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <span className="w-14 h-14 md:w-16 md:h-16 bg-red-600 border-3 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-neo-mini">
                  <FaPlay className="text-white text-xl md:text-2xl ml-1" />
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className={`font-space font-bold uppercase leading-tight mb-2 line-clamp-2 ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
            {video.title}
          </h3>
          <div className="mt-auto flex items-center gap-4 font-mono text-[10px] font-bold opacity-60 uppercase">
            <span>{fmtDate(video.published)}</span>
            {video.views != null && (
              <span className="inline-flex items-center gap-1">
                <FaEye /> {video.views.toLocaleString('id-ID')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function YouTube() {
  const [videos, setVideos] = useState(FALLBACK)

  useEffect(() => {
    fetch('/youtube-videos.json')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (Array.isArray(data) && data.length) setVideos(data)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="youtube" className="youtube py-24 bg-red-600 dark:bg-gray-950 border-b-5 border-black px-6 md:px-12 overflow-hidden relative scroll-mt-24">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div>
            <div className="inline-block mb-6 relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black border-4 border-black" />
              <h2 className="relative z-10 px-8 py-3 bg-white text-black border-4 border-black text-2xl md:text-3xl font-black uppercase tracking-widest flex items-center gap-3">
                <FaYoutube className="text-red-600 text-3xl" /> YouTube
              </h2>
            </div>
            <h3 className="font-space text-3xl md:text-5xl font-black uppercase tracking-tight mb-3 -rotate-1 text-white">
              {CHANNEL_NAME}
            </h3>
            <p className="font-mono text-base md:text-lg max-w-2xl text-white/90">
              Tutorial jaringan, Cisco, pemrograman, dan konten teknologi. 700+ subscriber.
            </p>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank" rel="noopener noreferrer"
            className="bg-black text-white font-space font-bold px-8 py-4 border-4 border-white shadow-neo-large hover:-translate-x-1 hover:-translate-y-1 transition-all text-lg uppercase flex items-center gap-3 shrink-0"
          >
            <FaYoutube className="text-red-500 text-2xl" />
            Subscribe
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.videoId}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <VideoCard video={v} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href={`${CHANNEL_URL}/videos`}
            target="_blank" rel="noopener noreferrer"
            className="bg-white text-black font-space font-bold px-8 py-3.5 border-4 border-black shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all text-base uppercase flex items-center gap-3"
          >
            Lihat Semua Video <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default YouTube
