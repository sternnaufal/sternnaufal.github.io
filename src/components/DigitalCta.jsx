import { motion } from 'framer-motion'
import { FaArrowRight, FaGlobe, FaNetworkWired, FaRobot, FaSearch } from 'react-icons/fa'

const services = [
  { icon: FaGlobe, label: 'Website & Web App' },
  { icon: FaSearch, label: 'SEO' },
  { icon: FaNetworkWired, label: 'Jaringan MikroTik' },
  { icon: FaRobot, label: 'Bot Automation' },
]

function DigitalCta() {
  return (
    <section className="py-20 px-6 md:px-12 bg-blue-500 dark:bg-blue-900 border-b-5 border-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px'
      }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 border-4 border-black" />

          <div className="relative z-10 bg-white dark:bg-gray-900 border-4 border-black p-8 md:p-12 shadow-neo-large">
            <span className="font-mono text-[10px] font-bold bg-black text-white px-2 py-1 border-2 border-black uppercase tracking-widest inline-block mb-4 -rotate-1">
              Butuh Jasa IT?
            </span>

            <h2 className="font-space text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Naufal Rakha <span className="text-blue-500 dark:text-yellow-400">IT Solutions</span>
            </h2>

            <p className="font-mono text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              Satu tempat untuk kebutuhan digital kamu — website, SEO, jaringan MikroTik, bot automation, hingga top-up game. Konsultasi gratis, pengerjaan cepat.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {services.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-2 font-mono text-xs font-bold bg-gray-100 dark:bg-gray-800 px-3 py-1.5 border-2 border-black">
                  <s.icon className="text-blue-500 dark:text-yellow-400" /> {s.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://digital.naufalrakha.my.id"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black font-space font-bold px-6 py-3 border-4 border-black shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all uppercase text-sm"
              >
                Lihat Layanan <FaArrowRight />
              </a>
              <a
                href="https://wa.me/6283845158177"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 font-space font-bold px-6 py-3 border-4 border-black shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all uppercase text-sm"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DigitalCta
