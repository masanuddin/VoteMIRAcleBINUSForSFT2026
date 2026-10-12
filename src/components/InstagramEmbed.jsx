import { useLanguage } from '../LanguageContext.jsx'
import { INSTAGRAM_URL, INSTAGRAM_SHORTCODE } from '../config.js'

export default function InstagramEmbed() {
  const { t } = useLanguage()

  const embedUrl = `https://www.instagram.com/p/${INSTAGRAM_SHORTCODE}/embed/captioned/`

  return (
    <div className="instagram">
      <div className="embed-frame">
        <iframe
          title={t.step2Title}
          src={embedUrl}
          className="embed-iframe"
          loading="lazy"
          scrolling="no"
          allowTransparency="true"
        />
      </div>
      <div className="embed-fallback">
        <a
          className="btn btn-secondary btn-open"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.openInstagram}
        </a>
        <p className="embed-note">{t.embedNote}</p>
      </div>
    </div>
  )
}
