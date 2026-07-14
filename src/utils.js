export function formatDate(iso, { month = 'short' } = {}) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('id-ID', { day: 'numeric', month, year: 'numeric' })
}
