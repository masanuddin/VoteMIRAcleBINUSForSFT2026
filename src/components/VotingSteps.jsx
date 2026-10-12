import { useLanguage } from '../LanguageContext.jsx'
import CommentCard from './CommentCard.jsx'
import InstagramEmbed from './InstagramEmbed.jsx'

export default function VotingSteps() {
  const { t } = useLanguage()

  return (
    <section className="journey" aria-labelledby="journey-heading">
      <h2 id="journey-heading" className="journey-title">
        {t.howToTitle}
      </h2>
      <ol className="journey-list">
        <li className="journey-step">
          <span className="step-num" aria-hidden="true">
            1
          </span>
          <div className="step-body">
            <h3 className="step-heading">{t.step1Title}</h3>
            <CommentCard />
          </div>
        </li>
        <li className="journey-step">
          <span className="step-num" aria-hidden="true">
            2
          </span>
          <div className="step-body">
            <h3 className="step-heading">{t.step2Title}</h3>
            <InstagramEmbed />
          </div>
        </li>
        <li className="journey-step journey-step--final">
          <span className="step-num" aria-hidden="true">
            3
          </span>
          <div className="step-body">
            <h3 className="step-heading">{t.step3Title}</h3>
            <p className="step-desc">{t.step3Desc}</p>
          </div>
        </li>
      </ol>
    </section>
  )
}
