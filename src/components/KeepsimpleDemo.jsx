import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaArrowLeft, FaGithub, FaCopy, FaCheck, FaPalette, FaRocket, FaCss3, FaStar, FaBolt } from 'react-icons/fa'

const TABS = [
  { id: 'demo', label: 'Live Demo', icon: FaPalette },
  { id: 'docs', label: 'Docs', icon: FaCss3 },
  { id: 'start', label: 'Get Started', icon: FaRocket },
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
    <div className="border-3 border-black bg-white dark:bg-gray-900 shadow-neo-mini mb-4">
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

function DemoBox({ label, children, codeStr }) {
  return (
    <div className="border-3 border-black bg-white dark:bg-gray-900 shadow-neo-mini overflow-hidden">
      <div className="p-5">
        {children}
      </div>
      {(label || codeStr) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-t-3 border-black text-xs">
          <code className="font-mono font-bold">{codeStr}</code>
          {label && <span className="text-gray-500">{label}</span>}
        </div>
      )}
    </div>
  )
}

function Section({ title, desc, children }) {
  return (
    <div className="mb-10">
      <h3 className="font-space font-black text-xl uppercase mb-1 dark:text-white">{title}</h3>
      {desc && <p className="font-mono text-xs dark:text-gray-400 mb-4">{desc}</p>}
      {children}
    </div>
  )
}

const DOCS_CODE = {
  buttons: '<a class="btn btn-primary">Primary</a>\n<a class="btn btn-secondary">Secondary</a>\n<a class="btn btn-outline">Outline</a>\n<a class="btn btn-ghost">Ghost</a>\n<a class="btn btn-danger">Danger</a>\n<!-- ukuran: btn-sm / btn-lg -->',
  card: '<div class="card">\n  <h3>Title</h3>\n  <p>Content</p>\n</div>\n<div class="card card-flat">\n  <!-- tanpa shadow -->\n</div>',
  alerts: '<div class="alert alert-success">✓ Success</div>\n<div class="alert alert-error">✗ Error</div>\n<div class="alert alert-info">ℹ Info</div>\n<div class="alert alert-warning">⚠ Warning</div>',
  badges: '<span class="badge badge-primary">Primary</span>\n<span class="badge badge-success">Success</span>',
  forms: '<div class="form-group">\n  <label class="form-label">Email</label>\n  <input class="input" type="email" />\n</div>\n<div class="form-group">\n  <label class="form-label">Kategori</label>\n  <select class="select">\n    <option>Pilih</option>\n  </select>\n</div>\n<div class="form-group">\n  <label class="form-label">Pesan</label>\n  <textarea class="textarea" rows="3"></textarea>\n</div>',
  tables: '<table class="table">\n  <thead><tr><th>Nama</th><th>Status</th></tr></thead>\n  <tbody>\n    <tr><td>Naufal</td><td>Active</td></tr>\n  </tbody>\n</table>\n\n<!-- varian: table-striped, table-bordered -->',
  grid: '<!-- Auto-fit grid -->\n<div class="grid grid-3">...</div>\n\n<!-- Flex row with columns -->\n<div class="row">\n  <div class="col-4">Sidebar</div>\n  <div class="col-8">Content</div>\n</div>',
  spacing: '<div class="m-2 p-3">margin 2, padding 3</div>\n<div class="mt-4 mb-2">margin top 4, bottom 2</div>',
  utils: '<!-- Text -->\ntext-center, text-muted, text-primary, text-success, text-danger\n\n<!-- Font -->\nfont-mono, font-serif, font-gothic\n\n<!-- List -->\nlist-unstyled, list-inline\n\n<!-- Display -->\nskeleton (loading placeholder)\n\n<!-- Images -->\nimg-fluid, img-round, img-shadow, img-bordered',
  spinner: '<div class="spinner"></div>\n<div class="spinner-lg"></div>',
  linkCss: '<link rel="stylesheet" href="keepsimple.css">',
  cdnCss: '<link rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/keepsimple/dist/keepsimple.min.css">',
  template: '<!DOCTYPE html>\n<html lang="id">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Site</title>\n  <link rel="stylesheet" href="keepsimple.css">\n</head>\n<body>\n  <div class="container">\n    <h1>Halo, Dunia!</h1>\n    <a class="btn btn-primary">Mulai</a>\n  </div>\n</body>\n</html>',
}

function KeepsimpleDemo() {
  const [tab, setTab] = useState('demo')
  const [darkDemo, setDarkDemo] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <Helmet>
        <title>KeepSimple CSS — Demo & Dokumentasi | Naufal Rakha Putra</title>
        <meta name="description" content="KeepSimple CSS — Framework CSS minimalis, cepat, ringan. Demo live, dokumentasi lengkap, langsung copas!" />
        <link rel="stylesheet" href="/keepsimple/style.css" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Back */}
        <a href="/keepsimple/" className="inline-flex items-center gap-2 text-sm font-mono font-bold hover:underline mb-8 dark:text-white">
          <FaArrowLeft /> Kembali ke Docs
        </a>

        {/* Hero */}
        <div className="bg-white dark:bg-gray-900 border-5 border-black p-8 md:p-12 shadow-neo-large rotate-1 mb-8">
          <div className="-rotate-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold bg-black text-white px-3 py-1">v2.0</span>
              <span className="font-mono text-xs font-bold bg-pink-500 text-white px-3 py-1">Minimal</span>
              <span className="font-mono text-xs font-bold bg-green-500 text-white px-3 py-1">Ringan</span>
              <span className="font-mono text-xs font-bold bg-blue-500 text-white px-3 py-1">CSS Only</span>
            </div>
            <h1 className="font-space text-4xl md:text-6xl font-black uppercase mb-3 dark:text-white tracking-tight">
              KeepSimple CSS
            </h1>
            <p className="font-mono text-base md:text-lg dark:text-gray-300 max-w-2xl">
              CSS framework minimalis. Fokus kecepatan loading, utilitas praktis, dan desain yang bersih. Gas pol!
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button onClick={() => setTab('demo')}
                className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2.5 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaPalette /> Live Demo
              </button>
              <button onClick={() => setTab('docs')}
                className="inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-2.5 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaCss3 /> Dokumentasi
              </button>
              <button onClick={() => setTab('start')}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 dark:text-white font-bold px-5 py-2.5 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaRocket /> Mulai
              </button>
              <a href="https://github.com/sternnaufal/keepsimple" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 dark:text-white font-bold px-5 py-2.5 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { icon: FaBolt, label: 'Ukuran', val: '~8KB', color: 'bg-yellow-400' },
            { icon: FaStar, label: 'Komponen', val: '30+', color: 'bg-pink-500' },
            { icon: FaCss3, label: 'Class', val: '100+', color: 'bg-blue-500' },
            { icon: FaRocket, label: 'Dependensi', val: '0', color: 'bg-green-500' },
          ].map((s, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border-3 border-black p-4 shadow-neo-mini text-center">
              <s.icon className="text-xl mb-1 mx-auto" />
              <p className="font-space font-black text-2xl dark:text-white">{s.val}</p>
              <p className="font-mono text-xs dark:text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b-3 border-black mb-8 overflow-x-auto">
          {TABS.map(t => {
            const Icon = t.icon
            return (
              <button key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 font-space font-bold text-sm uppercase px-5 py-3 border-t-3 border-l-3 border-r-3 border-black -mb-[2px] transition-all shrink-0 ${
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
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-space font-black text-2xl uppercase dark:text-white">🎨 Live Demo</h2>
              <button onClick={() => setDarkDemo(!darkDemo)}
                className="px-4 py-2 text-sm font-bold border-3 border-black bg-white dark:bg-gray-800 dark:text-white hover:bg-yellow-400 transition-colors shadow-neo-mini">
                {darkDemo ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>

            <div className={`p-6 border-4 border-black shadow-neo-large ${darkDemo ? 'bg-slate-900 dark' : 'bg-gray-100'}`}>
              <div className={darkDemo ? 'dark' : ''}>
                <div className="space-y-8" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

                  {/* Buttons */}
                  <Section title="Buttons" desc="Tombol dengan berbagai varian dan ukuran.">
                    <DemoBox codeStr="btn btn-primary / btn-secondary / btn-outline / btn-ghost / btn-danger">
                      <div className="flex flex-wrap gap-3">
                        <a className="btn btn-primary">Primary</a>
                        <a className="btn btn-secondary">Secondary</a>
                        <a className="btn btn-outline">Outline</a>
                        <a className="btn btn-ghost">Ghost</a>
                        <a className="btn btn-danger">Danger</a>
                      </div>
                    </DemoBox>
                    <DemoBox codeStr="btn btn-sm / btn-lg" label="Size variants">
                      <div className="flex flex-wrap gap-3 items-center">
                        <a className="btn btn-primary btn-sm">Small</a>
                        <a className="btn btn-primary">Default</a>
                        <a className="btn btn-primary btn-lg">Large</a>
                      </div>
                    </DemoBox>
                  </Section>

                  {/* Cards */}
                  <Section title="Cards" desc="Card dengan shadow dan hover effect.">
                    <div className="grid md:grid-cols-2 gap-4">
                      <DemoBox codeStr="card" label="Default card">
                        <div className="card m-0">
                          <h3 className="m-0 mb-2">Card Title</h3>
                          <p className="m-0 text-sm">Ini card default. Coba hover buat liat efek angkat.</p>
                        </div>
                      </DemoBox>
                      <DemoBox codeStr="card card-flat" label="Flat card">
                        <div className="card card-flat m-0">
                          <h3 className="m-0 mb-2">Flat Card</h3>
                          <p className="m-0 text-sm">Card tanpa shadow, simpel & clean.</p>
                        </div>
                      </DemoBox>
                    </div>
                  </Section>

                  {/* Alerts */}
                  <Section title="Alerts" desc="Pesan notifikasi buat feedback user.">
                    {[
                      ['alert-success', '✓ Data berhasil disimpan!'],
                      ['alert-error', '✗ Gagal memuat data. Coba lagi.'],
                      ['alert-info', 'ℹ Update tersedia. Klik untuk detail.'],
                      ['alert-warning', '⚠ Kuota hampir habis!'],
                    ].map(([cls, txt]) => (
                      <div key={cls} className={`alert ${cls} m-0 mb-2`}>{txt}</div>
                    ))}
                  </Section>

                  {/* Badges */}
                  <Section title="Badges" desc="Label kecil buat status atau tag.">
                    <DemoBox codeStr="badge badge-*">
                      <div className="flex flex-wrap gap-2">
                        <span className="badge badge-primary">Primary</span>
                        <span className="badge badge-secondary">Secondary</span>
                        <span className="badge badge-success">Success</span>
                        <span className="badge badge-danger">Danger</span>
                        <span className="badge badge-warning">Warning</span>
                      </div>
                    </DemoBox>
                  </Section>

                  {/* Forms */}
                  <Section title="Forms" desc="Input, select, textarea.">
                    <DemoBox codeStr="form-group / input / select / textarea">
                      <div className="max-w-md">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input type="email" className="input" placeholder="nama@email.com" />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Kategori</label>
                          <select className="select">
                            <option>Pilih</option>
                            <option>Web</option>
                            <option>Mobile</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Pesan</label>
                          <textarea className="textarea" placeholder="Tulis pesan..." rows={3}></textarea>
                        </div>
                      </div>
                    </DemoBox>
                  </Section>

                  {/* Tables */}
                  <Section title="Tables" desc="Tabel responsive.">
                    <div className="grid md:grid-cols-2 gap-4">
                      <DemoBox codeStr="table" label="Default">
                        <table className="table m-0">
                          <thead><tr><th>Nama</th><th>Role</th><th>Status</th></tr></thead>
                          <tbody>
                            <tr><td>Naufal</td><td>Dev</td><td><span className="badge badge-success">Active</span></td></tr>
                            <tr><td>Rakha</td><td>Design</td><td><span className="badge badge-primary">New</span></td></tr>
                          </tbody>
                        </table>
                      </DemoBox>
                      <DemoBox codeStr="table table-striped" label="Striped">
                        <table className="table table-striped m-0">
                          <thead><tr><th>Item</th><th>Qty</th></tr></thead>
                          <tbody>
                            <tr><td>Beras</td><td>2 kg</td></tr>
                            <tr><td>Gula</td><td>1 kg</td></tr>
                          </tbody>
                        </table>
                      </DemoBox>
                    </div>
                  </Section>

                  {/* Grid & Spacing */}
                  <Section title="Grid & Spacing" desc="Layout grid dan utility spacing.">
                    <DemoBox codeStr="grid grid-3">
                      <div className="grid grid-3 m-0">
                        {[1, 2, 3].map((n) => (
                          <div key={n} className="card card-flat text-center p-4 m-0">
                            <p className="font-bold m-0">Item {n}</p>
                          </div>
                        ))}
                      </div>
                    </DemoBox>
                    <DemoBox codeStr="row > col-*">
                      <div className="row m-0">
                        <div className="col-4"><div className="card card-flat p-3 text-center text-sm m-0">col-4</div></div>
                        <div className="col-8"><div className="card card-flat p-3 text-center text-sm m-0">col-8</div></div>
                      </div>
                    </DemoBox>
                  </Section>

                  {/* Spinner */}
                  <Section title="Spinner" desc="Loading spinner.">
                    <DemoBox codeStr="spinner / spinner-lg">
                      <div className="flex items-center gap-6">
                        <div className="spinner"></div>
                        <div className="spinner-lg"></div>
                        <span className="text-sm">Loading...</span>
                      </div>
                    </DemoBox>
                  </Section>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Docs */}
        {tab === 'docs' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
              <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">📖 Dokumentasi Lengkap</h2>
              <p className="font-mono text-sm dark:text-gray-400 mb-6">Referensi lengkap semua komponen dan utility class KeepSimple CSS.</p>

              <div className="space-y-6">
                <Section title="🔘 Buttons" desc="Kelas tombol: btn + varian (primary, secondary, outline, ghost, danger).">
                  <CodeBlock title="Button classes" code={DOCS_CODE.buttons} />
                </Section>

                <Section title="🃏 Cards" desc="Kelas card: card (default) dan card-flat.">
                  <CodeBlock title="Card classes" code={DOCS_CODE.card} />
                </Section>

                <Section title="⚠️ Alerts" desc="Kelas alert: alert-success, alert-error, alert-info, alert-warning.">
                  <CodeBlock title="Alert classes" code={DOCS_CODE.alerts} />
                </Section>

                <Section title="🏷️ Badges" desc="Kelas badge: badge-primary, badge-secondary, badge-success, badge-danger, badge-warning.">
                  <CodeBlock title="Badge classes" code={DOCS_CODE.badges} />
                </Section>

                <Section title="📝 Forms" desc="Kelas form: form-group, form-label, input, select, textarea.">
                  <CodeBlock title="Form classes" code={DOCS_CODE.forms} />
                </Section>

                <Section title="📊 Tables" desc="Kelas table: table, table-striped, table-bordered.">
                  <CodeBlock title="Table classes" code={DOCS_CODE.tables} />
                </Section>

                <Section title="📐 Grid" desc="Grid system: grid grid-{n}, row > col-{n}.">
                  <CodeBlock title="Grid classes" code={DOCS_CODE.grid} />
                </Section>

                <Section title="📏 Spacing" desc="Margin & padding: m-{0-4}, p-{0-4}, mt-, mb-, pt-, pb-, dll.">
                  <CodeBlock title="Spacing utilities" code={DOCS_CODE.spacing} />
                </Section>

                <Section title="🎨 Utilities" desc="Text, display, flex, dan utility lainnya.">
                  <CodeBlock title="Utility classes" code={DOCS_CODE.utils} />
                </Section>

                <Section title="⏳ Spinner" desc="Loading spinner.">
                  <CodeBlock title="Spinner classes" code={'<div class="spinner"></div>\n<div class="spinner-lg"></div>'} />
                </Section>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Get Started */}
        {tab === 'start' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border-4 border-black p-6 md:p-8 shadow-neo-large">
              <h2 className="font-space font-black text-2xl uppercase mb-4 dark:text-white">🚀 Mulai Cepat</h2>
              <p className="font-mono text-sm dark:text-gray-400 mb-6">Tambahin KeepSimple ke project lo dalam 2 cara:</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-3 border-black p-5 bg-yellow-50 dark:bg-gray-800">
                  <h3 className="font-space font-bold text-lg uppercase mb-2 dark:text-white">📦 Download CSS</h3>
                  <p className="font-mono text-sm dark:text-gray-400 mb-3">Download file CSS dan include manual.</p>
                  <CodeBlock code={DOCS_CODE.linkCss} />
                  <a href="/keepsimple/style.css" download
                    className="inline-block mt-2 bg-black text-white font-bold px-4 py-2 border-2 border-black text-sm hover:bg-yellow-400 hover:text-black transition-colors">
                    ↓ Download keepsimple.css
                  </a>
                </div>
                <div className="border-3 border-black p-5 bg-green-50 dark:bg-gray-800">
                  <h3 className="font-space font-bold text-lg uppercase mb-2 dark:text-white">🌐 CDN</h3>
                  <p className="font-mono text-sm dark:text-gray-400 mb-3">Langsung dari CDN, gak perlu download.</p>
                  <CodeBlock code={DOCS_CODE.cdnCss} />
                </div>
              </div>

              <div className="border-3 border-black p-5 bg-blue-50 dark:bg-gray-800">
                <h3 className="font-space font-bold text-lg uppercase mb-2 dark:text-white">📄 Template HTML</h3>
                <p className="font-mono text-sm dark:text-gray-400 mb-3">Copy-paste template ini buat mulai:</p>
                <CodeBlock code={DOCS_CODE.template} />
              </div>
            </div>

            <div className="bg-yellow-400 border-4 border-black p-6 md:p-8 shadow-neo-large text-center">
              <p className="font-space font-black text-2xl uppercase mb-2">Mudah kan? 😎</p>
              <p className="font-mono text-sm mb-4">Tinggal tambahin class, beres. Gak perlu setup ribet.</p>
              <a href="/keepsimple/" className="inline-block bg-black text-white font-bold px-6 py-3 border-3 border-black shadow-neo-mini hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-sm">
                📖 Baca Dokumentasi Lengkap →
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 p-6 bg-black border-4 border-black shadow-neo-large text-center">
          <p className="font-space font-bold text-lg text-yellow-400">KeepSimple CSS v2.0</p>
          <p className="font-mono text-xs text-gray-400 mt-2">
            by <a href="https://www.naufalrakha.my.id" className="text-yellow-400 hover:underline">Naufal Rakha Putra</a>
            {' · '}
            <a href="https://github.com/sternnaufal/keepsimple" className="text-yellow-400 hover:underline" target="_blank">GitHub</a>
            {' · '} MIT License
          </p>
        </div>
      </div>
    </main>
  )
}

export default KeepsimpleDemo
