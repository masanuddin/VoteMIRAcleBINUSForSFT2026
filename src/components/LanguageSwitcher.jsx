import { useLanguage } from '../LanguageContext.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label="Language / Bahasa">
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn${lang === l.code ? ' active' : ''}`}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
