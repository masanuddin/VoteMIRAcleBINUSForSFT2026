import { useState } from 'react'
import { useLanguage } from '../LanguageContext.jsx'
import { copyText } from '../lib/actions.js'
import { VOTE_COMMENT } from '../config.js'

export default function CommentCard() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle')

  async function handleCopy() {
    const ok = await copyText(VOTE_COMMENT)
    setStatus(ok ? 'copied' : 'error')
    window.clearTimeout(handleCopy._t)
    handleCopy._t = window.setTimeout(() => setStatus('idle'), 2200)
  }

  const label =
    status === 'copied' ? t.copied : status === 'error' ? t.copyError : t.copy

  return (
    <div className="comment-card">
      <div className="comment-box">
        <code className="comment-text">{VOTE_COMMENT}</code>
        <button type="button" className="btn btn-primary btn-copy" onClick={handleCopy}>
          {label}
        </button>
      </div>
      <p className="feedback" aria-live="polite">
        {status === 'copied' ? t.copied : status === 'error' ? t.copyError : ''}
      </p>
    </div>
  )
}
