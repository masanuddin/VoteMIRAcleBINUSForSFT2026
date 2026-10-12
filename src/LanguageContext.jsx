import { createContext, useContext, useEffect, useState } from 'react'
import { translations, LANGUAGES } from './i18n.js'

const LanguageContext = createContext(null)

function resolveLanguage(stored) {
  if (stored && translations[stored]) return stored
  return 'id'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'id'
    return resolveLanguage(localStorage.getItem('miracle-lang'))
  })

  useEffect(() => {
    localStorage.setItem('miracle-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = {
    lang,
    setLang,
    t: translations[lang],
    languages: LANGUAGES,
  }

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
