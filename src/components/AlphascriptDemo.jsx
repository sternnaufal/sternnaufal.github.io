import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaGithub, FaCopy, FaCheck, FaRocket, FaTerminal, FaBook, FaFlask, FaStar, FaBolt, FaCode } from 'react-icons/fa'

const TABS = [
  { id: 'demo', label: 'Demo', icon: FaFlask },
  { id: 'docs', label: 'Docs', icon: FaBook },
  { id: 'api', label: 'API Ref', icon: FaCode },
]

const methods = [
  { name: '_$(selector)', desc: 'Select single element (alias: _)', example: "_$('.btn')" },
  { name: '_$$(selector)', desc: 'Select all matching elements', example: "_$$('div.item')" },
  { name: '.addClass(name)', desc: 'Add CSS class', example: "_('.btn').addClass('active')" },
  { name: '.removeClass(name)', desc: 'Remove CSS class', example: "_('.btn').removeClass('hidden')" },
  { name: '.toggleClass(name)', desc: 'Toggle CSS class', example: "_('.menu').toggleClass('open')" },
  { name: '.hasClass(name)', desc: 'Check if has class', example: "_('.btn').hasClass('active')" },
  { name: '.hide()', desc: 'Hide element (display:none)', example: "_('.modal').hide()" },
  { name: '.show()', desc: 'Show element', example: "_('.modal').show()" },
  { name: '.toggle()', desc: 'Toggle visibility', example: "_('.sidebar').toggle()" },
  { name: '.css(prop, val)', desc: 'Set CSS property', example: "_('.box').css('color', 'red')" },
  { name: '.attr(name, val)', desc: 'Set attribute', example: "_('img').attr('alt', 'Foto')" },
  { name: '.html(content)', desc: 'Set innerHTML', example: "_('#app').html('<p>Halo</p>')" },
]

const snippets = [
  { title: 'Hide & Show', code: `// Hide all modals
_$$('.modal').forEach(m => m.hide());

// Show first modal
_('.modal').show();` },
  { title: 'Bulk Class Toggle', code: `// Toggle dark mode on all cards
_$$('.card').forEach(c =>
  c.toggleClass('dark')
);` },
  { title: 'Chaining', code: `_('.btn')
  .addClass('loading')
  .css('opacity', '0.5')
  .html('Memuat...');` },
]

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button onClick={copy} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 border-2 border-black bg-white hover:bg-yellow-400 transition-colors">
      {copied ? <FaCheck size={11} /> : <FaCopy size={11} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

function CodeBlock({ code, title }) {
  return (
    <div className="border-3 border-black bg-white dark:bg-gray-900 shadow-neo-mini">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-black text-white font-mono text-xs font-bold">
          <span>{title}</span>
          <CopyBtn text={code} />
        </div>
      )}
      <pre className="bg-gray-900 text-green-400 p-4 text-sm overflow-x-auto font-mono leading-relaxed m-0">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function AlphascriptDemo() {
  const [tab, setTab] = useState('demo')
  const [demoResult, setDemoResult] = useState('')
  const [demoLog, setDemoLog] = useState([])

  function runExample(type) {
    const el = document.getElementById('alpha-demo-target')
    if (!el) return
    const log = []
    switch (type) {
      case 'highlight':
        el.classList.toggle('bg-yellow-300')
        el.classList.toggle('dark:bg-yellow-600')
        const isOn = el.classList.contains('bg-yellow-300')
        log.push(`addClass/removeClass → highlight ${isOn ? 'ON' : 'OFF'}`)
        break
      case 'hide':
        el.classList.toggle('hidden')
        log.push(`hide/show → ${el.classList.contains('hidden') ? 'hidden' : 'visible'}`)
        break
      case 'text':
        const newText = el.textContent === 'Alphascript DOM Target' ? '✅ Berhasil diubah!' : 'Alphascript DOM Target'
        el.textContent = newText
        log.push(`html → "${newText}"`)
        break
      case 'reset':
        el.className = 'p-6 text-center font-mono font-bold transition-all duration-300 border-2 border-black'
        el.classList.add('bg-white')
        el.textContent = 'Alphascript DOM Target'
        log.push('reset → kembali ke default')
        break
      default: break
    }
    setDemoLog(prev => [log[0] || `Running: ${type}`, ...prev].slice(0, 5))
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>Alphascript — JavaScript Library Demo & Docs | Naufal Rakha Putra</title>
        <meta name="description" content="Alphascript — JavaScript library open-source untuk DOM manipulation cepat & ringan. Demo interaktif, dokumentasi lengkap, API reference." />
        <meta property="og:title" content="Alphascript — JavaScript Library Demo & Docs" />
        <meta property="og:description" content="DOM manipulation library ringan ~2KB, zero dependencies, open source. Coba demo interaktif!" />
        <meta property="og:image" content="https://naufalrakha.my.id/api/og?title=Alphascript%20%E2%80%94%20JS%20Library" />
        <meta property="og:url" content="https://naufalrakha.my.id/alphascript-demo" />
        <link rel="canonical" href="https://naufalrakha.my.id/alphascript-demo" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono font-bold hover:underline mb-8 dark:text-white">
          <FaArrowLeft /> Kembali ke Portfolio
        </Link>

        {/* Hero */}
        <div className="bg-white dark:bg-gray-900 border-5 border-black p-8 md:p-12 shadow-neo-large -rotate-1 mb-8">
          <div className="rotate-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold bg-black text-white px-3 py-1">v1.0.0</span>
              <span className="font-mono text-xs font-bold bg-pink-500 text-white px-3 py-1">~2KB</span>
              <span className="font-mono text-xs font-bold bg-green-500 text-white px-3 py-1">MIT License</span>
              <span className="font-mono text-xs font-bold bg-blue-500 text-white px-3 py-1">Zero Deps</span>
            </div>
            <h1 className="font-space text-4xl md:text-6xl font-black uppercase mb-3 dark:text-white tracking-tight">
              Alphascript
            </h1>
            <p className="font-mono text-base md:text-lg dark:text-gray-300 mb-4 max-w-2xl">
              JavaScript library untuk DOM manipulation. Cepat, ringan, tanpa dependensi — tinggal <code className="bg-yellow-300 dark:bg-yellow-500 px-1.5 py-0.5 text-sm font-bold">{`<script>`}</code> langsung jalan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/sternnaufal/alphascript" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-2.5 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaGithub /> GitHub
              </a>
              <button onClick={() => setTab('demo')}
                className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2.5 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaFlask /> Coba Demo
              </button>
              <button onClick={() => setTab('docs')}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 dark:text-white font-bold px-5 py-2.5 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaBook /> Dokumentasi
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { icon: FaBolt, label: 'Ukuran', val: '~2KB', color: 'bg-yellow-400' },
            { icon: FaStar, label: 'Dependensi', val: '0', color: 'bg-pink-500' },
            { icon: FaRocket, label: 'Method', val: '12+', color: 'bg-blue-500' },
            { icon: FaTerminal, label: 'Chainable', val: 'Yes', color: 'bg-green-500' },
          ].map((s, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border-3 border-black p-4 shadow-neo-mini text-center">
              <s.icon className="text-xl mb-1 mx-auto" />
              <p className="font-space font-black text-2xl dark:text-white">{s.val}</p>
              <p className="font-mono text-xs dark:text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b-3 border-black mb-8">
          {TABS.map(t => {
            const Icon = t.icon
            return (
              <button key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 font-space font-bold text-sm uppercase px-5 py-3 border-t-3 border-l-3 border-r-3 border-black -mb-[2px] transition-all ${
                  tab === t.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon /> {t.label}
              </button>
            )
          })}
        </div>

        {/* Tab: Demo */}
        {tab === 'demo' && (
          <div className="space-y-6">
            <div className="bg-yellow-400 border-4 border-black p-6 md:p-8 shadow-neo-large rotate-1">
              <div className="-rotate-1">
                <h2 className="font-space font-black text-2xl uppercase mb-2">Demo Interaktif</h2>
                <p className="font-mono text-sm mb-6">Coba method DOM manipulation langsung di browser. Klik tombol, lihat hasilnya real-time.</p>

                <div id="alpha-demo-target" className="bg-white border-4 border-black p-8 text-center font-mono font-bold text-lg mb-6 transition-all duration-300 shadow-neo-mini">
                  Alphascript DOM Target
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <button onClick={() => runExample('highlight')}
                    className="bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                    🎨 Toggle Highlight
                  </button>
                  <button onClick={() => runExample('hide')}
                    className="bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                    👁 Toggle Visibility
                  </button>
                  <button onClick={() => runExample('text')}
                    className="bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                    ✏️ Change Text
                  </button>
                  <button onClick={() => runExample('reset')}
                    className="bg-white text-black font-bold px-4 py-2 border-2 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                    🔄 Reset
                  </button>
                </div>

                {/* Console log */}
                {demoLog.length > 0 && (
                  <div className="bg-black text-green-400 p-3 border-3 border-black font-mono text-xs space-y-1 max-h-32 overflow-y-auto">
                    {demoLog.map((log, i) => (
                      <div key={i} className="opacity-80">&gt; {log}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Code snippets */}
            <h2 className="font-space font-black text-xl uppercase dark:text-white mt-8 mb-4">⚡ Contoh Cepat</h2>
            <div className="grid gap-4">
              {snippets.map((s, i) => (
                <CodeBlock key={i} code={s.code} title={s.title} />
              ))}
            </div>
          </div>
        )}

        {/* Tab: Docs */}
        {tab === 'docs' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
              <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">📦 Instalasi</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-sm font-bold mb-2 dark:text-gray-300">NPM</p>
                  <CodeBlock code="npm install alphascript" />
                </div>
                <div>
                  <p className="font-mono text-sm font-bold mb-2 dark:text-gray-300">CDN</p>
                  <CodeBlock code={`<script src="https://cdn.jsdelivr.net/npm/alphascript/dist/alphascript.min.js"></script>
<script>
  const el = _$('#app');
  el.addClass('loaded').show();
</script>`} />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
              <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">🚀 Mulai Cepat</h2>
              <div className="space-y-4">
                <p className="font-mono text-sm dark:text-gray-400">Import atau include via CDN, lalu panggil method Alphascript:</p>
                <CodeBlock code={`// Select + Manipulate
_('.btn')
  .addClass('active')
  .css('background', '#fde047')
  .html('Klik!');

// Bulk operation
_$$('.card').forEach(card => {
  card.addClass('loaded');
  card.show();
});`} />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
              <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">📖 API Reference</h2>
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm border-collapse">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="text-left p-3 border-2 border-black">Method</th>
                      <th className="text-left p-3 border-2 border-black">Description</th>
                      <th className="text-left p-3 border-2 border-black hidden md:table-cell">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {methods.map((m, i) => (
                      <tr key={i} className="border-b-2 border-black dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-800 transition-colors">
                        <td className="p-3 border-r-2 border-black font-bold"><code>{m.name}</code></td>
                        <td className="p-3 border-r-2 border-black text-xs">{m.desc}</td>
                        <td className="p-3 hidden md:table-cell"><code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5">{m.example}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab: API */}
        {tab === 'api' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
              <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">⚙️ Selector API</h2>
              <div className="space-y-4">
                <div className="border-2 border-black p-4">
                  <p className="font-space font-bold text-lg mb-2 dark:text-white">_$(selector)</p>
                  <p className="font-mono text-sm dark:text-gray-400 mb-2">Select single element. Returns wrapped element with Alphascript methods.</p>
                  <CodeBlock code={`_$('.my-class');   // with $ prefix
_('.my-class');     // short alias — same thing`} />
                </div>
                <div className="border-2 border-black p-4">
                  <p className="font-space font-bold text-lg mb-2 dark:text-white">_$$(selector)</p>
                  <p className="font-mono text-sm dark:text-gray-400 mb-2">Select all matching elements. Returns array of wrapped elements.</p>
                  <CodeBlock code={`const cards = _$$('.card');
cards.forEach(c => c.addClass('visible'));`} />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
              <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">🔧 Method API</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {methods.map((m, i) => (
                  <div key={i} className="border-2 border-black p-4 hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors">
                    <p className="font-space font-bold text-sm dark:text-white">{m.name}</p>
                    <p className="font-mono text-xs dark:text-gray-400 mt-1">{m.desc}</p>
                    <code className="text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 mt-2 inline-block">{m.example}</code>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pink-500 border-4 border-black p-6 shadow-neo-large text-center">
              <p className="font-space font-black text-xl uppercase text-white">Semua method chainable 🔗</p>
              <p className="font-mono text-sm text-white mt-2">Gabungin multiple method dalam satu baris. Simple & ekspresif.</p>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="bg-black border-4 border-black p-6 md:p-8 shadow-neo-large mt-8 text-center" style={{ backgroundColor: '#111' }}>
          <p className="font-space font-black text-xl uppercase text-yellow-400 mb-3">Siap Nyobain?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://github.com/sternnaufal/alphascript" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-6 py-3 border-3 border-yellow-400 shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
              <FaGithub /> Star on GitHub
            </a>
            <a href="/"
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 border-3 border-white shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
              ← Kembali
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AlphascriptDemo
