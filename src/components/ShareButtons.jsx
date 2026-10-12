import { useState } from 'react'
import { useLanguage } from '../LanguageContext.jsx'
import { sharePage } from '../lib/actions.js'
import { SITE_TITLE } from '../config.js'

function ShareIcon() {
  return (
    <svg
      className="share-icon"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M22 3 11 14M22 3l-7 18-4-7-7-4L22 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ShareButtons() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle')

  async function handleShare() {
    const url = window.location.href
    const result = await sharePage({
      title: SITE_TITLE,
      text: t.heroSubtitle,
      url,
    })
    setStatus(result === 'copied' ? 'copied' : result === 'error' ? 'error' : 'idle')
    window.clearTimeout(handleShare._t)
    handleShare._t = window.setTimeout(() => setStatus('idle'), 2200)
  }

  return (
    <section className="share" aria-labelledby="share-heading">
      <h2 id="share-heading" className="share-title">
        {t.shareTitle}
      </h2>
      <p className="share-desc">{t.shareDesc}</p>
      <button type="button" className="btn btn-primary btn-share" onClick={handleShare}>
        <ShareIcon />
        {t.share}
      </button>
      <p className="feedback" aria-live="polite">
        {status === 'copied' ? t.linkCopied : ''}
      </p>
    </section>
  )
}
