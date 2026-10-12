export async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // fall through to legacy path
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '0'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  document.body.removeChild(textarea)
  return ok
}

export async function sharePage(data) {
  if (navigator.share) {
    try {
      await navigator.share(data)
      return 'shared'
    } catch (err) {
      if (err && err.name === 'AbortError') return 'cancelled'
      // otherwise fall through to copy-link fallback
    }
  }
  const copied = await copyText(data.url)
  return copied ? 'copied' : 'error'
}
