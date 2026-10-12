import { LanguageProvider, useLanguage } from './LanguageContext.jsx'
import LanguageSwitcher from './components/LanguageSwitcher.jsx'
import Hero from './components/Hero.jsx'
import VotingSteps from './components/VotingSteps.jsx'
import ShareButtons from './components/ShareButtons.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'

function Page() {
  const { t } = useLanguage()

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <span className="wordmark">{t.brand}</span>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="main">
        <Hero />
        <div className="content">
          <VotingSteps />
          <ShareButtons />
        </div>
      </main>

      <Team />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
