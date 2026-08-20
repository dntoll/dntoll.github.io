(function () {
  function fallbackCopy(text) {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    textarea.style.pointerEvents = 'none'
    document.body.appendChild(textarea)
    textarea.select()

    let copied = false
    try {
      copied = typeof document.execCommand === 'function' && document.execCommand('copy')
    } finally {
      textarea.remove()
    }
    return copied
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (_error) {
        return fallbackCopy(text)
      }
    }
    return fallbackCopy(text)
  }

  document.addEventListener('click', async function (event) {
    const button = event.target.closest('[data-copy-target]')
    if (!button) return

    const target = document.getElementById(button.getAttribute('data-copy-target'))
    const status = button.parentElement.querySelector('.copy-status')
    if (!target || !status) return

    const sourceText = typeof target.innerText === 'string' ? target.innerText : target.textContent
    const copied = await copyText(sourceText.trim())
    status.textContent = copied
      ? button.getAttribute('data-copy-success')
      : button.getAttribute('data-copy-failure')

    window.clearTimeout(button.copyStatusTimer)
    button.copyStatusTimer = window.setTimeout(function () {
      status.textContent = ''
    }, 3000)
  })
})()
