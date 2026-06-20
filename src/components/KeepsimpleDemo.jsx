import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Copy, Check } from 'lucide-react'

const WA = '6283845158177'

const code = (c) => `class="${c}"`

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button onClick={copy} className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

function Section({ title, desc, children, id }) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      {desc && <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">{desc}</p>}
      {children}
    </section>
  )
}

function DemoBox({ label, codeStr, children, bg }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div className={`p-6 ${bg || 'bg-white dark:bg-gray-800'}`}>
        {children}
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <code className="text-xs font-mono text-gray-600 dark:text-gray-400">{codeStr}</code>
        <CopyBtn text={codeStr} />
      </div>
      {label && <div className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500">{label}</div>}
    </div>
  )
}

function Grid({ cols, children }) {
  const colMap = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }
  return <div className={`grid grid-cols-1 ${colMap[cols] || 'md:grid-cols-2'} gap-4`}>{children}</div>
}

export default function KeepsimpleDemo() {
  const [darkDemo, setDarkDemo] = useState(false)

  return (
    <>
      <Helmet>
        <title>KeepSimple CSS Demo — Naufal Rakha Putra</title>
        <link rel="stylesheet" href="/keepsimple/style.css" />
      </Helmet>

      <div className="keepsimple-demo" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: darkDemo ? '#0f172a' : '#f8f9fa', color: darkDemo ? '#f1f5f9' : '#212529', minHeight: '100vh' }}>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-2">
            <div>
              <a href="/keepsimple/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">&larr; Docs</a>
              <h1 className="text-4xl font-bold mt-2">KeepSimple CSS</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Live demo semua class yang tersedia.</p>
            </div>
            <button onClick={() => setDarkDemo(!darkDemo)} className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {darkDemo ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          <hr className="my-8 border-gray-300 dark:border-gray-700" />

          {/* Navigation */}
          <div className="flex flex-wrap gap-2 mb-10 text-sm">
            {[
              ['Typography', '#typo'], ['Buttons', '#buttons'], ['Cards', '#cards'], ['Alerts', '#alerts'],
              ['Forms', '#forms'], ['Tables', '#tables'], ['Badges', '#badges'], ['Grid', '#grid'],
              ['Spacing', '#spacing'], ['Utilities', '#utils'], ['Images', '#images'], ['Spinner', '#spinner'],
            ].map(([l, h]) => (
              <a key={l} href={h} className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors font-medium">{l}</a>
            ))}
          </div>

          <div className={darkDemo ? 'dark' : ''}>
            <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font)', padding: '2rem 0' }}>
              <div className="container" style={{ marginTop: 0 }}>

                {/* Typography */}
                <Section id="typo" title="Typography" desc="Heading, body text, font families.">
                  <DemoBox codeStr={code('h1')} label="Heading 1">
                    <h1 className="p-0 m-0">Heading 1</h1>
                  </DemoBox>
                  <div className="grid gap-4 mt-4">
                    {[2, 3, 4].map((n) => (
                      <DemoBox key={n} codeStr={code(`h${n}`)} label={`Heading ${n}`}>
                        <div className={`h${n}`} style={{ margin: 0 }}>Heading {n}</div>
                      </DemoBox>
                    ))}
                  </div>
                  <Grid cols={3}>
                    <DemoBox codeStr={code('font-mono')} label="Monospace font">
                      <p className="font-mono m-0">Hello Mono</p>
                    </DemoBox>
                    <DemoBox codeStr={code('font-serif')} label="Serif font">
                      <p className="font-serif m-0">Hello Serif</p>
                    </DemoBox>
                    <DemoBox codeStr={code('font-gothic')} label="Gothic font">
                      <p className="font-gothic m-0">Hello Gothic</p>
                    </DemoBox>
                  </Grid>
                </Section>

                <hr />

                {/* Buttons */}
                <Section id="buttons" title="Buttons" desc="Tombol dengan berbagai varian dan ukuran.">
                  <DemoBox codeStr={code('btn btn-primary')}>
                    <div className="flex flex-wrap gap-3">
                      <a className="btn btn-primary">Primary</a>
                      <a className="btn btn-secondary">Secondary</a>
                      <a className="btn btn-outline">Outline</a>
                      <a className="btn btn-ghost">Ghost</a>
                      <a className="btn btn-danger">Danger</a>
                    </div>
                  </DemoBox>
                  <DemoBox codeStr={code('btn btn-sm / btn-lg')} label="Size variants">
                    <div className="flex flex-wrap gap-3 items-center">
                      <a className="btn btn-primary btn-sm">Small</a>
                      <a className="btn btn-primary">Default</a>
                      <a className="btn btn-primary btn-lg">Large</a>
                    </div>
                  </DemoBox>
                </Section>

                <hr />

                {/* Cards */}
                <Section id="cards" title="Cards" desc="Card container dengan shadow dan hover effect.">
                  <Grid cols={2}>
                    <DemoBox codeStr={code('card')} label="Default card with hover lift">
                      <div className="card m-0">
                        <h3 className="m-0 mb-2">Card Title</h3>
                        <p className="m-0 text-sm">Ini adalah card default. Coba hover untuk lihat efek angkat.</p>
                      </div>
                    </DemoBox>
                    <DemoBox codeStr={code('card card-flat')} label="Flat card without shadow">
                      <div className="card card-flat m-0">
                        <h3 className="m-0 mb-2">Flat Card</h3>
                        <p className="m-0 text-sm">Card tanpa shadow dan efek hover.</p>
                      </div>
                    </DemoBox>
                  </Grid>
                </Section>

                <hr />

                {/* Alerts */}
                <Section id="alerts" title="Alerts" desc="Pesan notifikasi dengan warna berbeda.">
                  <DemoBox codeStr={code('alert alert-success')}>
                    <div className="alert alert-success m-0">✓ Data berhasil disimpan!</div>
                  </DemoBox>
                  <div className="grid gap-3 mt-3">
                    {[
                      ['alert-error', '✗ Gagal memuat data.'],
                      ['alert-info', 'ℹ Info: Update tersedia.'],
                      ['alert-warning', '⚠ Perhatian: Kuota hampir habis.'],
                    ].map(([cls, txt]) => (
                      <DemoBox key={cls} codeStr={code(`alert ${cls}`)}>
                        <div className={`alert ${cls} m-0`}>{txt}</div>
                      </DemoBox>
                    ))}
                  </div>
                </Section>

                <hr />

                {/* Forms */}
                <Section id="forms" title="Forms" desc="Input, select, dan textarea.">
                  <DemoBox codeStr={code('form-group / input')}>
                    <div style={{ maxWidth: 400 }}>
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="input" placeholder="nama@email.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Kategori</label>
                        <select className="select">
                          <option>Pilih kategori</option>
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

                <hr />

                {/* Tables */}
                <Section id="tables" title="Tables" desc="Tabel dengan berbagai variasi.">
                  <DemoBox codeStr={code('table')} label="Default table">
                    <table className="table m-0">
                      <thead><tr><th>Nama</th><th>Role</th><th>Status</th></tr></thead>
                      <tbody>
                        <tr><td>Naufal</td><td>Developer</td><td><span className="badge badge-success">Active</span></td></tr>
                        <tr><td>Rakha</td><td>Designer</td><td><span className="badge badge-primary">New</span></td></tr>
                        <tr><td>Putra</td><td>Manager</td><td><span className="badge badge-warning">Pending</span></td></tr>
                      </tbody>
                    </table>
                  </DemoBox>
                  <div className="grid gap-4 mt-4 md:grid-cols-2">
                    <DemoBox codeStr={code('table table-striped')} label="Striped rows">
                      <table className="table table-striped m-0">
                        <thead><tr><th>Item</th><th>Qty</th></tr></thead>
                        <tbody>
                          <tr><td>Beras</td><td>2 kg</td></tr>
                          <tr><td>Gula</td><td>1 kg</td></tr>
                          <tr><td>Minyak</td><td>2 L</td></tr>
                        </tbody>
                      </table>
                    </DemoBox>
                    <DemoBox codeStr={code('table table-bordered')} label="Bordered">
                      <table className="table table-bordered m-0">
                        <thead><tr><th>#</th><th>Nilai</th></tr></thead>
                        <tbody>
                          <tr><td>1</td><td>A</td></tr>
                          <tr><td>2</td><td>B</td></tr>
                          <tr><td>3</td><td>C</td></tr>
                        </tbody>
                      </table>
                    </DemoBox>
                  </div>
                </Section>

                <hr />

                {/* Badges */}
                <Section id="badges" title="Badges" desc="Label kecil untuk status, tag, dll.">
                  <DemoBox codeStr={code('badge badge-primary')}>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-primary">Primary</span>
                      <span className="badge badge-secondary">Secondary</span>
                      <span className="badge badge-success">Success</span>
                      <span className="badge badge-danger">Danger</span>
                      <span className="badge badge-warning">Warning</span>
                    </div>
                  </DemoBox>
                </Section>

                <hr />

                {/* Grid */}
                <Section id="grid" title="Grid Systems" desc="Grid dan row/col layout.">
                  <DemoBox codeStr={code('grid grid-3')} label="Auto-fit grid, 3 columns">
                    <div className="grid grid-3 m-0">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="card card-flat text-center p-4 m-0">
                          <p className="text-lg font-bold m-0">Grid Item {n}</p>
                        </div>
                      ))}
                    </div>
                  </DemoBox>
                  <DemoBox codeStr={code('row > .col-4 / .col-8')} label="Flex row with column fractions">
                    <div className="row m-0">
                      <div className="col-4"><div className="card card-flat text-center p-3 m-0 text-sm">col-4</div></div>
                      <div className="col-8"><div className="card card-flat text-center p-3 m-0 text-sm">col-8</div></div>
                    </div>
                  </DemoBox>
                </Section>

                <hr />

                {/* Spacing */}
                <Section id="spacing" title="Spacing Utilities" desc="Margin & padding helper classes.">
                  <DemoBox codeStr={code('m-2 p-3')} label="Margin & padding">
                    <div className="flex flex-wrap gap-3 items-center">
                      {['m-0', 'm-1', 'm-2', 'm-3', 'm-4'].map((cls) => (
                        <div key={cls} className="card card-flat p-2 m-0 text-center">
                          <code className="text-xs">{cls}</code>
                          <div className={`${cls} bg-blue-100 dark:bg-blue-900 rounded text-xs p-2`}>Box</div>
                        </div>
                      ))}
                    </div>
                  </DemoBox>
                  <DemoBox codeStr={code('mt-2 mb-3')} label="Directional margins">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['mt-1', 'mt-2', 'mb-1', 'mb-2'].map((cls) => (
                        <div key={cls} className="card card-flat p-2 m-0 text-center text-xs">
                          <code>{cls}</code>
                        </div>
                      ))}
                    </div>
                  </DemoBox>
                </Section>

                <hr />

                {/* Utilities */}
                <Section id="utils" title="Utilities" desc="Text, flex, display, dan utility classes lainnya.">
                  <Grid cols={2}>
                    <DemoBox codeStr={code('text-center')}>
                      <p className="text-center p-3 bg-white dark:bg-gray-800 rounded m-0">Center</p>
                    </DemoBox>
                    <DemoBox codeStr={code('text-muted')}>
                      <p className="text-muted m-0">Teks dengan opacity lebih rendah.</p>
                    </DemoBox>
                    <DemoBox codeStr={code('text-primary / text-success / text-danger')}>
                      <div className="flex flex-col gap-1">
                        <p className="text-primary m-0">Primary text</p>
                        <p className="text-success m-0">Success text</p>
                        <p className="text-danger m-0">Danger text</p>
                      </div>
                    </DemoBox>
                    <DemoBox codeStr={code('list-unstyled / list-inline')}>
                      <ul className="list-unstyled m-0 text-sm">
                        <li>Item 1</li>
                        <li>Item 2</li>
                      </ul>
                      <ul className="list-inline m-0 mt-2 text-sm">
                        <li>Inline 1</li>
                        <li>Inline 2</li>
                      </ul>
                    </DemoBox>
                  </Grid>
                  <DemoBox codeStr={code('skeleton')} label="Skeleton loading">
                    <div className="flex flex-col gap-3">
                      <div className="skeleton w-3/4" style={{ height: '1.2rem' }}></div>
                      <div className="skeleton w-1/2" style={{ height: '1rem' }}></div>
                      <div className="skeleton w-full" style={{ height: '3rem' }}></div>
                    </div>
                  </DemoBox>
                </Section>

                <hr />

                {/* Images */}
                <Section id="images" title="Images" desc="Image utility classes.">
                  <Grid cols={3}>
                    <DemoBox codeStr={code('img-fluid img-round')} label="Responsive + rounded">
                      <img src="https://via.placeholder.com/100" alt="" className="img-fluid img-round" style={{ maxWidth: 100 }} />
                    </DemoBox>
                    <DemoBox codeStr={code('img-fluid img-shadow')} label="With shadow">
                      <img src="https://via.placeholder.com/100" alt="" className="img-fluid img-shadow" style={{ maxWidth: 100 }} />
                    </DemoBox>
                    <DemoBox codeStr={code('img-fluid img-bordered')} label="With border">
                      <img src="https://via.placeholder.com/100" alt="" className="img-fluid img-bordered" style={{ maxWidth: 100 }} />
                    </DemoBox>
                  </Grid>
                </Section>

                <hr />

                {/* Spinner */}
                <Section id="spinner" title="Spinner" desc="Loading spinner.">
                  <DemoBox codeStr={code('spinner / spinner-lg')}>
                    <div className="flex items-center gap-6">
                      <div className="spinner"></div>
                      <div className="spinner-lg"></div>
                    </div>
                  </DemoBox>
                </Section>

                <hr />

                {/* Code */}
                <Section title="Code & Pre" desc="Inline code dan code blocks.">
                  <Grid cols={2}>
                    <DemoBox codeStr={code('code')} label="Inline code">
                      <p className="m-0">Gunakan <code className="code">npm install</code> untuk menginstall.</p>
                    </DemoBox>
                    <DemoBox codeStr={code('pre')} label="Code block">
                      <pre className="pre m-0" style={{ fontSize: '.8rem' }}>{`function hello() {\n  console.log("KeepSimple!");\n}`}</pre>
                    </DemoBox>
                  </Grid>
                </Section>

              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl text-center text-sm text-gray-500 dark:text-gray-400">
            KeepSimple CSS v2.0 — by <a href="https://naufalrakha.my.id" className="text-blue-600 dark:text-blue-400 hover:underline">Naufal Rakha Putra</a>
          </div>
        </div>
      </div>
    </>
  )
}
