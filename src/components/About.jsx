import { motion } from 'framer-motion'
import { useState } from 'react'
import { education, experience, organizations, achievements, certificates, analytics, skillCategories } from '../data/portfolioData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AnimatedCounter from './AnimatedCounter'
import { Trophy } from 'lucide-react'

const SectionHeading = ({ children, colorClass }) => (
  <div className="inline-block mb-10 transform -rotate-2 relative z-10">
    <div className="absolute inset-0 translate-x-3 translate-y-2 bg-black border-4 border-black" />
    <h2 className={`relative z-10 px-8 py-3 bg-${colorClass} border-4 border-black text-2xl md:text-3xl font-black uppercase tracking-widest`}>
      {children}
    </h2>
  </div>
)

const Card = ({ title, subtitle, duration, children, variant = 'yellow' }) => {
  const bgClass = variant === 'yellow' ? 'bg-white' : variant === 'pink' ? 'bg-pink-100' : 'bg-blue-100'
  const accentClass = variant === 'yellow' ? 'bg-yellow-400' : variant === 'pink' ? 'bg-pink-500' : 'bg-blue-500'

  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -20, opacity: 0 }}
      viewport={{ once: true }}
      className="relative group mb-10 ml-4"
    >
      <div className="absolute top-0 -left-[24px] w-12 h-12 rounded-full border-4 border-black bg-black z-20 flex items-center justify-center">
        <div className={`w-4 h-4 rounded-full ${accentClass}`} />
      </div>

      <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform" />

      <div className={`relative z-10 p-6 border-4 border-black ${bgClass} dark:bg-gray-900 shadow-neo group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b-3 border-black pb-4">
          <div>
            <h3 className="font-space text-2xl font-bold uppercase">{title}</h3>
            <p className="font-mono font-bold mt-1">{subtitle}</p>
          </div>
          <span className="font-mono bg-black text-white px-3 py-1 text-sm border-2 border-black inline-block md:rotate-3 shadow-neo-mini">
            {duration}
          </span>
        </div>
        <div className="font-mono text-sm leading-relaxed dark:text-gray-300">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

const SkillBar = ({ name, level }) => (
  <div className="mb-3">
    <div className="flex justify-between font-mono text-xs font-bold mb-1">
      <span>{name}</span>
      <span className="opacity-60">{level}%</span>
    </div>
    <div className="w-full h-3 bg-white dark:bg-gray-700 border-2 border-black overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="h-full bg-yellow-400 dark:bg-pink-500 border-r-2 border-black"
      />
    </div>
  </div>
)

function About() {
  const [openSkillCat, setOpenSkillCat] = useState(skillCategories[0]?.name || null)

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

            {/* Analytics Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {analytics.map((item, i) => (
                <AnimatedCounter key={i} {...item} />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 translate-x-6 translate-y-6 border-4 border-black dark:border-yellow-400 transition-transform group-hover:translate-x-8 group-hover:translate-y-8" />
              <div className="absolute inset-0 bg-pink-500 translate-x-3 translate-y-3 border-4 border-black dark:border-yellow-400 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
              <div className="relative z-10 border-4 border-black dark:border-yellow-400 bg-white dark:bg-gray-900 p-8 shadow-neo-large overflow-hidden">
                <h3 className="font-space font-black text-3xl uppercase mb-8 flex items-center gap-4">
                  <span className="w-12 h-1 bg-black dark:bg-yellow-400" /> Stats
                </h3>
                <div className="grid grid-cols-3 gap-8 font-mono">
                  <div>
                    <p className="text-4xl font-black text-blue-500">25+</p>
                    <p className="text-sm">Proyek Selesai</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black">16</p>
                    <p className="text-sm">Sertifikat IT</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-green-500">3K+</p>
                    <p className="text-sm">Audience Views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills with Progress Bars */}
        <div className="mb-24">
          <SectionHeading colorClass="yellow-400">Skills</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.name} className="border-4 border-black bg-white dark:bg-gray-900 p-6 shadow-neo-small">
                <button
                  onClick={() => setOpenSkillCat(openSkillCat === cat.name ? null : cat.name)}
                  className="w-full flex justify-between items-center font-space font-black text-lg uppercase mb-4"
                >
                  {cat.name}
                  <span className="text-xl transform transition-transform duration-300" style={{ rotate: openSkillCat === cat.name ? '180deg' : '0deg' }}>▼</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSkillCat === cat.name ? 'max-h-96' : 'max-h-0'}`}>
                  {cat.items.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pendidikan */}
        <div className="mt-32">
          <SectionHeading colorClass="blue-500 text-white">Pendidikan</SectionHeading>
          <div className="border-l-4 border-black border-dashed py-4 relative max-w-3xl">
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
          <div className="border-l-4 border-black border-dashed py-4 relative max-w-3xl">
            {experience.map((exp, i) => (
              <Card
                key={i}
                title={exp.title}
                duration={exp.duration || "WORK"}
                variant="pink"
              >
                <ul className="list-disc ml-5 space-y-2">
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
                <h4 className="font-space font-bold text-xl mb-2 uppercase">{org.title}</h4>
                <p className="font-mono text-sm font-bold mb-1">{org.role}</p>
                <p className="font-mono text-xs opacity-70">{org.year}</p>
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
                  <h4 className="font-space font-black text-xl uppercase tracking-tighter">{ach.title}</h4>
                  <p className="font-mono text-sm uppercase opacity-80">{ach.event} · {ach.year}</p>
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
              <div key={i} className="bg-white dark:bg-gray-900 border-3 border-black p-3 shadow-neo-mini hover:shadow-neo transition-all group overflow-hidden">
                <div className="aspect-[4/3] mb-4 border-2 border-black overflow-hidden bg-gray-100 relative">
                  <LazyLoadImage
                    src={cert.image}
                    alt={cert.title}
                    effect="blur"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-yellow-400/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h5 className="font-space font-bold text-sm uppercase leading-tight line-clamp-2">{cert.title}</h5>
                <p className="font-mono text-[10px] mt-1 opacity-60">{cert.provider} {cert.year ? `· ${cert.year}` : ''}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About