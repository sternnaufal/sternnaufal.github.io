import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { projects, projectCategories } from '../data/portfolioData'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa'

const slugs = projects.map(p =>
  p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
)

const appCategoryMap = {
  'Web App': 'WebApplication',
  'AI': 'AIApplication',
  'Game': 'GameApplication',
  'Mobile': 'MobileApplication',
  'Library': 'SoftwareApplication',
  'Backend': 'WebAPI',
  'Tools': 'SoftwareApplication',
}

function ProjectCase() {
  const { slug } = useParams()
  const idx = slugs.indexOf(slug)
  const project = idx !== -1 ? projects[idx] : null

  if (!project) {
    return (
      <main className="min-h-screen bg-pink-500 text-black flex items-center justify-center p-8">
        <div className="bg-white border-4 border-black p-12 shadow-neo-large max-w-lg text-center">
          <p className="font-space text-6xl font-black mb-4">404</p>
          <p className="font-mono text-lg mb-6">Proyek tidak ditemukan</p>
          <Link to="/" className="inline-block bg-black text-white font-bold px-6 py-3 border-4 border-black shadow-neo hover:bg-yellow-400 hover:text-black transition-all">Kembali</Link>
        </div>
      </main>
    )
  }

  const siteUrl = 'https://naufalrakha.my.id'
  const pageUrl = `${siteUrl}/case-study/${slug}`

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>{project.title} — Case Study | Naufal Rakha Putra</title>
        <meta name="description" content={`Case Study ${project.title} — ${project.description.substring(0, 160)}`} />
        <meta property="og:title" content={`${project.title} — Case Study | Naufal Rakha Putra`} />
        <meta property="og:description" content={project.description.substring(0, 200)} />
        <meta property="og:image" content={`${siteUrl}${project.image || '/ku.png'}`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": appCategoryMap[project.category] || "SoftwareApplication",
            "name": project.title,
            "description": project.description,
            "url": project.live || project.github || pageUrl,
            "applicationCategory": project.category,
            "operatingSystem": project.category === 'Mobile' ? 'Android' : 'All',
            "author": {
              "@type": "Person",
              "name": "Naufal Rakha Putra",
              "url": siteUrl
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "IDR"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono font-bold hover:underline mb-10 dark:text-white">
          <FaArrowLeft /> Kembali ke Portfolio
        </Link>

        <div className="bg-white dark:bg-gray-900 border-4 border-black p-8 md:p-12 shadow-neo-large -rotate-1 mb-8">
          <div className="rotate-1">
            <span className="inline-block font-mono text-xs font-bold bg-black text-white px-3 py-1 mb-4">
              {project.category}
            </span>
            <h1 className="font-space text-4xl md:text-5xl font-black uppercase mb-4 dark:text-white">
              {project.title}
            </h1>
            <p className="font-mono text-base md:text-lg leading-relaxed dark:text-gray-300">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="font-mono text-xs font-bold bg-black text-white px-3 py-1 border-2 border-black dark:bg-yellow-400 dark:text-black">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 border-4 border-black shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 dark:text-white font-bold px-6 py-3 border-4 border-black shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all">
              <FaGithub /> Source Code
            </a>
          )}
        </div>

        {/* Link to full case study */}
        {project.caseStudy && (
          <a href={project.caseStudy}
            className="group block bg-yellow-400 border-4 border-black p-6 shadow-neo hover:-translate-x-1 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs font-bold mb-1">BACA SELENGKAPNYA</p>
                <p className="font-space text-xl font-black uppercase">Case Study Lengkap (STAR Method) <FaArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" /></p>
              </div>
            </div>
          </a>
        )}
      </div>
    </main>
  )
}

export default ProjectCase
