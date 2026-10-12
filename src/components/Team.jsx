import { useLanguage } from '../LanguageContext.jsx'
import { TEAM_PHOTO } from '../config.js'

const MEMBERS = [
  'Marcellino Asanuddin',
  'Ignatius Ivan Wijaya',
  'Ricky Rudiansyah',
  'Aflaha Fathinah Fatahillah',
]

const SUPERVISOR = 'Mohammad Faisal Riftiarrasyid, S.Kom., M.Kom.'

export default function Team() {
  const { t } = useLanguage()

  return (
    <section className="team" aria-labelledby="team-heading">
      <div className="team-inner">
        <h2 id="team-heading" className="team-title">
          {t.teamHeading}
        </h2>
        <img
          className="team-photo"
          src={TEAM_PHOTO}
          alt={t.teamAlt}
          width="1400"
          height="788"
          loading="lazy"
        />
        <div className="team-roster">
          <h3 className="team-subheading">{t.teamMembersLabel}</h3>
          <ul className="team-members">
            {MEMBERS.map((name) => (
              <li key={name} className="team-member">
                {name}
              </li>
            ))}
          </ul>
          <div className="team-supervisor">
            <span className="team-supervisor-label">{t.supervisorLabel}</span>
            <span className="team-supervisor-name">{SUPERVISOR}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
