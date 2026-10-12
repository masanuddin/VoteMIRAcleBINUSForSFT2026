import { useState } from 'react'
import { useLanguage } from '../LanguageContext.jsx'
import { copyText } from '../lib/actions.js'
import { VOTE_COMMENT, INSTAGRAM_URL } from '../config.js'

export default function Hero() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle')

  async function handleCopy() {
    const ok = await copyText(VOTE_COMMENT)
    setStatus(ok ? 'copied' : 'error')
    window.clearTimeout(handleCopy._t)
    handleCopy._t = window.setTimeout(() => setStatus('idle'), 2200)
  }

  const copyLabel =
    status === 'copied' ? t.copied : status === 'error' ? t.copyError : t.heroCopy

  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="hero-badge">{t.tagline}</span>
        <h1 className="hero-title">{t.heroTitle}</h1>
        <p className="hero-subtitle">{t.heroSubtitle}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={handleCopy}>
            {copyLabel}
          </button>
          <a
            className="btn btn-secondary"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.heroOpen}
          </a>
        </div>
      </div>
    </section>
  )
}
