import { Helmet } from 'react-helmet-async'

export default function CvPage() {
  return (
    <>
      <Helmet>
        <title>CV — Naufal Rakha Putra</title>
        <meta name="description" content="Curriculum Vitae Naufal Rakha Putra — Full-Stack Developer, Game Developer, IT Generalist" />
        <meta property="og:title" content="CV — Naufal Rakha Putra" />
        <meta property="og:description" content="Curriculum Vitae Naufal Rakha Putra" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://naufalrakha.my.id/cv" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="font-space font-black text-4xl uppercase">Curriculum Vitae</h2>
            <a
              href="/CV_Naufal Rakha Putra.pdf"
              download
              className="bg-black text-white font-bold px-6 py-3 border-4 border-black shadow-neo hover:bg-yellow-400 hover:text-black transition-all"
            >
              Download PDF
            </a>
          </div>

          <iframe
            src="/CV_Naufal Rakha Putra.pdf"
            className="w-full min-h-[90vh] border-4 border-black shadow-neo bg-white"
            title="Curriculum Vitae Naufal Rakha Putra"
          />
        </div>
      </div>
    </>
  )
}
