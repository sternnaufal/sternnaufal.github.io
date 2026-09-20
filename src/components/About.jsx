import { motion } from 'framer-motion'
import { useState } from 'react'
import { education, experience, organizations, achievements, certificates, analytics } from '../data/portfolioData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AnimatedCounter from './AnimatedCounter'
import { Trophy } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiVite, SiTailwindcss,
  SiNodedotjs, SiLaravel, SiMysql,
  SiJavascript, SiTypescript, SiPhp, SiKotlin, SiPython,
  SiAndroid, SiUnity, SiGodotengine,
  SiCisco, SiMikrotik, SiDebian,
  SiGithub, SiDocker, SiVercel,
} from 'react-icons/si'
import { FaMicrosoft } from 'react-icons/fa'

const skillIcons = {
  SiReact, SiNextdotjs, SiVite, SiTailwindcss,
  SiNodedotjs, SiLaravel, SiMysql,
  SiJavascript, SiTypescript, SiPhp, SiKotlin, SiPython,
  SiAndroid, SiUnity, SiGodotengine,
  SiCisco, SiMikrotik, SiDebian,
  SiGithub, SiDocker, SiVercel,
  FaMicrosoft,
}

const skillRowOne = [
  { name: 'React.js', icon: 'SiReact' },
  { name: 'Next.js', icon: 'SiNextdotjs' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: 'Laravel', icon: 'SiLaravel' },
  { name: 'PHP', icon: 'SiPhp' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'MySQL', icon: 'SiMysql' },
  { name: 'Vite', icon: 'SiVite' },
]

const skillRowTwo = [
  { name: 'Python', icon: 'SiPython' },
  { name: 'Kotlin', icon: 'SiKotlin' },
  { name: 'Android', icon: 'SiAndroid' },
  { name: 'Unity / C#', icon: 'SiUnity' },
  { name: 'Godot', icon: 'SiGodotengine' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'Git/GitHub', icon: 'SiGithub' },
  { name: 'Linux (Debian)', icon: 'SiDebian' },
  { name: 'Cisco', icon: 'SiCisco' },
  { name: 'MikroTik', icon: 'SiMikrotik' },
  { name: 'Vercel', icon: 'SiVercel' },
  { name: 'Azure AI', icon: 'FaMicrosoft' },
]

const bgMap = {
  'yellow-400': 'bg-yellow-400',
  'pink-500': 'bg-pink-500 text-white',
  'blue-500 text-white': 'bg-blue-500 text-white',
}

const SectionHeading = ({ children, colorClass }) => (
  <div className="inline-block mb-10 transform -rotate-2 relative z-10">
    <div className="absolute inset-0 translate-x-3 translate-y-2 bg-black border-4 border-black" />
    <h2 className={`relative z-10 px-8 py-3 ${bgMap[colorClass] || 'bg-yellow-400'} border-4 border-black text-2xl md:text-3xl font-black uppercase tracking-widest`}>
      {children}
    </h2>
  </div>
)

const Card = ({ title, subtitle, duration, children, variant = 'yellow' }) => {
  const bgClass = variant === 'yellow' ? 'bg-white' : variant === 'pink' ? 'bg-pink-100' : 'bg-blue-100'
  const accentClass = variant === 'yellow' ? 'bg-yellow-400' : variant === 'pink' ? 'bg-pink-500' : 'bg-blue-500'

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 12, opacity: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform" />

      <div className={`relative z-10 h-full p-4 border-3 border-black ${bgClass} dark:bg-gray-900 shadow-neo-mini group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex flex-col`}>
        <div className="flex items-start justify-between gap-3 mb-2 border-b-2 border-black pb-2">
          <div className="min-w-0">
            <h3 className="font-space text-base font-bold uppercase leading-tight">{title}</h3>
            {subtitle && <p className="font-mono text-xs font-bold mt-0.5 opacity-70">{subtitle}</p>}
          </div>
          <span className={`font-mono text-[10px] font-bold px-2 py-0.5 border-2 border-black shrink-0 ${accentClass}`}>
            {duration}
          </span>
        </div>
        <div className="font-mono text-xs leading-relaxed dark:text-gray-300">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

const SkillIcon = ({ name, icon }) => {
  const Icon = skillIcons[icon]
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-900 border-3 border-black px-5 py-3 shadow-neo-mini shrink-0 mx-3">
      {Icon && <Icon size={28} className="text-black dark:text-white shrink-0" />}
      <span className="font-space font-bold text-base whitespace-nowrap uppercase">{name}</span>
    </div>
  )
}

const SkillMarquee = ({ items, reverse = false }) => {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-group overflow-hidden border-y-3 border-black py-4 bg-lime-100 dark:bg-gray-950">
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ '--marquee-duration': `${items.length * 4}s` }}>
        {doubled.map((skill, i) => (
          <SkillIcon key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  )
}

function About() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="about" className="about py-24 bg-gray-50 dark:bg-black border-b-5 border-black px-6 md:px-12 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* About Me + Analytics Counters */}
        <div className="mb-24 flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <SectionHeading colorClass="yellow-400">About Me</SectionHeading>
            <p className="font-mono text-xl leading-relaxed mb-8 bg-white dark:bg-gray-800 p-8 border-4 border-black shadow-neo-large relative z-10">
              Mahasiswa Teknologi Informasi <span className="bg-pink-500 px-1 border-2 border-black">Universitas Brawijaya</span> dengan rekam jejak kuat dalam Full-Stack Web Development, Game Development, serta Network & Cyber Security. Menguasai ekosistem JavaScript modern (React.js, Next.js, Node.js) dan PHP (Laravel), serta integrasi model AI komersial (Azure OpenAI, Gemini, DeepSeek). Berpengalaman mengelola core system organisasi kampus, mengaudit infrastruktur server internal, menginisiasi studio game independen, serta menangani puluhan tiket gangguan jaringan harian di PT Telkom Akses. Tipe generalist yang berorientasi pada eksekusi produk nyata (end-to-end product delivery) dengan kemampuan problem-solving yang adaptif.
            </p>

            <div className="mt-12 h-1 w-full bg-black shadow-neo-mini mb-12" />
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 translate-x-6 translate-y-6 border-4 border-black dark:border-yellow-400 transition-transform group-hover:translate-x-8 group-hover:translate-y-8" />
              <div className="absolute inset-0 bg-pink-500 translate-x-3 translate-y-3 border-4 border-black dark:border-yellow-400 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
              <div className="relative z-10 border-4 border-black dark:border-yellow-400 bg-white dark:bg-gray-900 p-8 shadow-neo-large overflow-hidden">
                <h3 className="font-space font-black text-3xl uppercase mb-8 flex items-center gap-4">
                  <span className="w-12 h-1 bg-black dark:bg-yellow-400" /> Stats
                </h3>

                {/* Plain stats */}
                <div className="grid grid-cols-3 gap-8 font-mono mb-10">
                  {analytics.filter(a => a.plain).map((item, i) => (
                    <div key={i}>
                      <p className={`text-4xl font-black ${item.color || ''}`}>
                        {item.value >= 1000 ? `${(item.value / 1000).toFixed(0)}K` : item.value}{item.suffix}
                      </p>
                      <p className="text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* Animated counters */}
                <div className="grid grid-cols-2 gap-4">
                  {analytics.filter(a => !a.plain).map((item, i) => (
                    <AnimatedCounter key={i} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mb-24">
          <SectionHeading colorClass="yellow-400">Skills</SectionHeading>
          <div className="border-4 border-black shadow-neo overflow-hidden divide-y-3 divide-black">
            <SkillMarquee items={skillRowOne} />
            <SkillMarquee items={skillRowTwo} reverse />
          </div>
        </div>

        {/* Pendidikan */}
        <div className="mt-32">
          <SectionHeading colorClass="blue-500 text-white">Pendidikan</SectionHeading>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <Card
                key={i}
                title={edu.title}
                subtitle={edu.major}
                duration={edu.year}
                variant="blue"
              >
                <p>{edu.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Pengalaman */}
        <div className="mt-32">
          <SectionHeading colorClass="pink-500">Pengalaman</SectionHeading>
          <div className="grid md:grid-cols-2 gap-4">
            {experience.map((exp, i) => (
              <Card
                key={i}
                title={exp.title}
                duration={exp.duration || "WORK"}
                variant="pink"
              >
                <ul className="list-disc ml-4 space-y-1">
                  {exp.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizations Section */}
        <div className="mt-32">
          <SectionHeading colorClass="yellow-400">Organisasi</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((org, i) => (
              <div key={i} className="border-4 border-black bg-white dark:bg-gray-900 p-6 shadow-neo-small hover:shadow-neo hover:-translate-y-2 transition-all">
                <h3 className="font-space font-bold text-xl mb-2 uppercase">{org.title}</h3>
                <p className="font-mono text-sm font-bold mb-1">{org.role}</p>
                <p className="font-mono text-xs opacity-80">{org.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-32">
          <SectionHeading colorClass="blue-500 text-white">Prestasi</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((ach, i) => (
              <div key={i} className="flex items-center gap-6 bg-black text-white p-6 border-4 border-yellow-400 shadow-neo group hover:bg-yellow-400 hover:text-black transition-colors rotate-1 hover:rotate-0">
                <div className="scale-125 group-hover:scale-150 transition-transform"><Trophy size={36} strokeWidth={2.5} /></div>
                <div>
                  <h3 className="font-space font-black text-xl uppercase tracking-tighter">{ach.title}</h3>
                  <p className="font-mono text-sm uppercase opacity-90">{ach.event} · {ach.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-32">
          <SectionHeading colorClass="pink-500">Sertifikat</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certificates.map((cert, i) => (
              <button
                key={i}
                onClick={() => setSelectedCert(cert)}
                className="bg-white dark:bg-gray-900 border-3 border-black p-3 shadow-neo-mini hover:shadow-neo transition-all group overflow-hidden text-left cursor-pointer"
              >
                <div className="aspect-[4/3] mb-4 border-2 border-black overflow-hidden bg-gray-100 relative">
                  <LazyLoadImage
                    src={cert.image}
                    alt={cert.title}
                    effect="blur"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-yellow-400/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="font-space font-bold text-sm uppercase leading-tight line-clamp-2">{cert.title}</h3>
                <p className="font-mono text-[10px] mt-1 opacity-60">{cert.provider} {cert.year ? `· ${cert.year}` : ''}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Lightbox */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 bg-white text-black border-3 border-black w-10 h-10 font-bold text-xl shadow-neo hover:bg-pink-500 hover:text-white transition-colors z-10"
            >
              ✕
            </button>
            <div
              className="relative max-w-4xl w-full bg-white border-4 border-black shadow-neo-large overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b-3 border-black bg-yellow-400">
                <h3 className="font-space font-bold text-lg uppercase">{selectedCert.title}</h3>
                <p className="font-mono text-sm">{selectedCert.provider} · {selectedCert.year}</p>
              </div>
              <div className="bg-gray-100 flex items-center justify-center p-2 max-h-[70vh] overflow-auto">
                <LazyLoadImage
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default About