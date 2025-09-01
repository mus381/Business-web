// Centralized theme control
const STORAGE_KEY = 'theme' // 'light' | 'dark'

const getSystemPrefersDark = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
}

export function initThemeSwitch() {
  const toggle = document.getElementById('theme-toggle')
  if (!toggle) return

  const saved = localStorage.getItem(STORAGE_KEY)
  const initial = saved ?? (getSystemPrefersDark() ? 'dark' : 'light')

  applyTheme(initial)
  toggle.checked = initial === 'dark'

  // Persist on change
  toggle.addEventListener('change', () => {
    const next = toggle.checked ? 'dark' : 'light'
    applyTheme(next)
    localStorage.setItem(STORAGE_KEY, next)
  })

  // React to OS changes only if user has NOT set a manual preference
  if (!saved && window.matchMedia) {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      const theme = e.matches ? 'dark' : 'light'
      applyTheme(theme)
      toggle.checked = theme === 'dark'
    }
    mql.addEventListener?.('change', onChange)
  }
}
