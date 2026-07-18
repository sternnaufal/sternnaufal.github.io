import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCopy, FaCheck } from 'react-icons/fa'

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button onClick={copy} className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-mono">
      {copied ? <FaCheck size={12} /> : <FaCopy size={12} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

function CodeBlock({ code }) {
  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <CopyBtn text={code} />
      </div>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-sm overflow-x-auto font-mono leading-relaxed border border-gray-700">
        <code>{code}</code>
      </pre>
    </div>
  )
}

const examples = [
  {
    title: 'Select Elements',
    code: `// Select by CSS selector
const el = _$('.my-class');
// or shorter:
const el = _('.my-class');

// Select all matching
const all = _$$('div.item');`,
  },
  {
    title: 'Manipulate Classes',
    code: `// Add class
_('.btn').addClass('active');

// Remove class
_('.btn').removeClass('hidden');

// Toggle class
_('.menu').toggleClass('open');`,
  },
  {
    title: 'Toggle Visibility',
    code: `// Hide element
_('.modal').hide();

// Show element
_('.modal').show();

// Toggle visibility
_('.sidebar').toggle();`,
  },
]

const features = [
  { label: 'Lightweight', desc: 'Hanya ~2KB minified. Zero dependencies.' },
  { label: 'Fast', desc: 'Chainable API, vanilla JS under the hood.' },
  { label: 'Browser Support', desc: 'ES6+ modern browser. No legacy bloat.' },
  { label: 'Open Source', desc: 'MIT License. Bebas pakai & kontribusi.' },
]

function AlphascriptDemo() {
  const [demoResult, setDemoResult] = useState('')

  function runExample(type) {
    const el = document.getElementById('alpha-demo-target')
    if (!el) return
    switch (type) {
      case 'highlight':
        el.classList.toggle('bg-yellow-300')
        el.classList.toggle('dark:bg-yellow-600')
        setDemoResult(`toggle highlight → ${el.classList.contains('bg-yellow-300') ? 'ON' : 'OFF'}`)
        break
      case 'hide':
        el.classList.toggle('hidden')
        setDemoResult(`toggle visibility → ${el.classList.contains('hidden') ? 'hidden' : 'visible'}`)
        break
      case 'text':
        el.textContent = el.textContent === 'Alphascript DOM Target' ? '✅ Berhasil diubah!' : 'Alphascript DOM Target'
        setDemoResult(`text → "${el.textContent}"`)
        break
      default: break
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>Alphascript — JavaScript Library Demo | Naufal Rakha Putra</title>
        <meta name="description" content="Alphascript — JavaScript library open-source untuk DOM manipulation cepat & ringan. Demo interaktif, kode contoh, dokumentasi." />
        <meta property="og:title" content="Alphascript — JavaScript Library Demo" />
        <meta property="og:description" content="DOM manipulation library ringan ~2KB, zero dependencies, open source." />
        <meta property="og:image" content="https://naufalrakha.my.id/api/og?title=Alphascript%20%E2%80%94%20JS%20Library" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://naufalrakha.my.id/alphascript-demo" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono font-bold hover:underline mb-10 dark:text-white">
          <FaArrowLeft /> Kembali ke Portfolio
        </Link>

        {/* Hero */}
        <div className="bg-white dark:bg-gray-900 border-4 border-black p-8 md:p-12 shadow-neo-large -rotate-1 mb-8">
          <div className="rotate-1">
            <span className="inline-block font-mono text-xs font-bold bg-black text-white dark:bg-yellow-400 dark:text-black px-3 py-1 mb-4">
              Library · JavaScript · Open Source
            </span>
            <h1 className="font-space text-4xl md:text-5xl font-black uppercase mb-2 dark:text-white">Alphascript</h1>
            <p className="font-mono text-lg dark:text-gray-300 mb-4">JavaScript library untuk DOM manipulation — cepat, ringan, tanpa dependensi.</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/sternnaufal/alphascript" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaGithub /> GitHub
              </a>
              <a href="/projects/alphascript.html"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 dark:text-white font-bold px-5 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaExternalLinkAlt /> Case Study
              </a>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border-2 border-black p-4 shadow-neo-mini text-center">
              <p className="font-space font-black text-lg uppercase dark:text-white">{f.label}</p>
              <p className="font-mono text-xs mt-1 dark:text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Code examples */}
        <div className="grid gap-6 mb-8">
          {examples.map((ex, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border-2 border-black p-4 shadow-neo-mini">
              <h3 className="font-space font-bold text-lg mb-3 uppercase dark:text-white">{ex.title}</h3>
              <CodeBlock code={ex.code} />
            </div>
          ))}
        </div>

        {/* Interactive demo */}
        <div className="bg-yellow-400 border-4 border-black p-6 md:p-8 shadow-neo-large mb-8">
          <h2 className="font-space font-black text-2xl uppercase mb-4">Interactive Demo</h2>
          <p className="font-mono text-sm mb-6">Coba method DOM manipulation langsung di browser.</p>

          <div id="alpha-demo-target" className="bg-white border-2 border-black p-6 text-center font-mono font-bold mb-6 transition-all duration-300">
            Alphascript DOM Target
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <button onClick={() => runExample('highlight')}
              className="bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
              Toggle Highlight
            </button>
            <button onClick={() => runExample('hide')}
              className="bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
              Toggle Visibility
            </button>
            <button onClick={() => runExample('text')}
              className="bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
              Change Text
            </button>
          </div>

          {demoResult && (
            <div className="font-mono text-sm bg-black text-green-400 p-3 border-2 border-black">
              &gt; {demoResult}
            </div>
          )}
        </div>

        {/* Install */}
        <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
          <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">Install</h2>
          <CodeBlock code={`npm install alphascript`} />
          <div className="mt-4">
            <p className="font-mono text-sm dark:text-gray-400 mb-2">Atau via CDN:</p>
            <CodeBlock code={`<script src="https://cdn.jsdelivr.net/npm/alphascript/dist/alphascript.min.js"></script>
<script>
  const el = _$('#app');
  el.addClass('loaded').show();
</script>`} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AlphascriptDemo
