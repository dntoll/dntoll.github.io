/**
 * Simple EN/SV language switch for Curious Engineer Studio pages.
 * URL ?lang=en|sv wins (shareable). Else localStorage, else data-default-lang on <html>.
 * Clicking EN/SV updates the address bar so the URL can be copied.
 */
(function () {
  const STORAGE_KEY = 'ces-lang'
  const root = document.documentElement
  const pageDefault = root.getAttribute('data-default-lang') === 'sv' ? 'sv' : 'en'

  function langFromUrl() {
    const value = new URLSearchParams(location.search).get('lang')
    return value === 'en' || value === 'sv' ? value : null
  }

  function resolveLang() {
    const fromUrl = langFromUrl()
    if (fromUrl) return fromUrl
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'sv') return saved
    return pageDefault
  }

  function langHref(lang) {
    const url = new URL(location.href)
    url.searchParams.set('lang', lang)
    return url.pathname + url.search + url.hash
  }

  function syncUrl(lang) {
    const next = langHref(lang)
    const current = location.pathname + location.search + location.hash
    if (current === next) return
    history.replaceState(null, '', next)
  }

  function refreshLangHrefs() {
    document.querySelectorAll('[data-set-lang]').forEach(function (el) {
      const lang = el.getAttribute('data-set-lang')
      if (lang !== 'en' && lang !== 'sv') return
      if (el.tagName === 'A') el.setAttribute('href', langHref(lang))
    })
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

    document.querySelectorAll('.lang-switch [data-set-lang]').forEach(function (el) {
      const active = el.getAttribute('data-set-lang') === lang
      el.setAttribute('aria-pressed', active ? 'true' : 'false')
      el.classList.toggle('is-active', active)
    })

    localStorage.setItem(STORAGE_KEY, lang)
    syncUrl(lang)
    refreshLangHrefs()
  }

  document.addEventListener('click', function (event) {
    const el = event.target.closest('[data-set-lang]')
    if (!el) return
    const lang = el.getAttribute('data-set-lang')
    if (lang !== 'en' && lang !== 'sv') return
    event.preventDefault()
    applyLang(lang)
  })

  applyLang(resolveLang())
})()
