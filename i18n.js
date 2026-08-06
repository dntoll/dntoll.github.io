/**
 * Simple EN/SV language switch for Curious Engineer Studio pages.
 * Set data-default-lang="en"|"sv" on <html>. Saved choice in localStorage wins.
 */
(function () {
  const STORAGE_KEY = 'ces-lang'
  const root = document.documentElement
  const pageDefault = root.getAttribute('data-default-lang') === 'sv' ? 'sv' : 'en'

  function resolveLang() {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'sv') return saved
    return pageDefault
  }

  function applyLang(lang) {
    root.lang = lang
    root.dataset.lang = lang

    document.querySelectorAll('[data-lang]').forEach(function (el) {
      const match = el.getAttribute('data-lang') === lang
      el.hidden = !match
      el.setAttribute('aria-hidden', match ? 'false' : 'true')
    })

    document.querySelectorAll('[data-i18n-meta]').forEach(function (el) {
      const value = el.getAttribute('data-i18n-' + lang)
      if (!value) return
      const attr = el.getAttribute('data-i18n-meta')
      if (attr === 'content') el.setAttribute('content', value)
      else if (attr === 'text') el.textContent = value
    })

    document.querySelectorAll('.lang-switch [data-set-lang]').forEach(function (btn) {
      const active = btn.getAttribute('data-set-lang') === lang
      btn.setAttribute('aria-pressed', active ? 'true' : 'false')
      btn.classList.toggle('is-active', active)
    })

    localStorage.setItem(STORAGE_KEY, lang)
  }

  document.addEventListener('click', function (event) {
    const btn = event.target.closest('[data-set-lang]')
    if (!btn) return
    event.preventDefault()
    applyLang(btn.getAttribute('data-set-lang'))
  })

  applyLang(resolveLang())
})()
