import { useLanguage } from '../LanguageContext.jsx'
import { BINUS_LOGO } from '../config.js'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <img
        className="footer-logo"
        src={BINUS_LOGO}
        alt="BINUS University"
        width="400"
        height="283"
      />
      <p className="footer-brand">{t.footerBrand}</p>
      <p className="footer-note">{t.footerNote}</p>
    </footer>
  )
}
