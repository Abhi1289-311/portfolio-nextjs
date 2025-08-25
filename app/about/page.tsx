import Section from '@/components/Section'
import { profile } from '@/lib/profile'

export default function AboutPage() {
  const { summary, skills, education, certifications, email, links } = profile
  return (
    <>
      <Section title="About">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card space-y-3">
            <p className="muted">{summary}</p>
            <div className="text-sm space-y-1">
              {email && <div>Email: <a href={`mailto:${email}`}>{email}</a></div>}
              {links.linkedin && <div>LinkedIn: <a href={links.linkedin} target="_blank">{links.linkedin}</a></div>}
              {links.github && <div>GitHub: <a href={links.github} target="_blank">{links.github}</a></div>}
            </div>
          </div>
          <div className="card">
            <h3 className="h3 mb-2">Skills</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {skills.map((s,i) => <li key={i} className="muted">{s}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Education & Certifications">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="h3 mb-2">Education</h3>
            <p className="muted">{education}</p>
          </div>
          <div className="card">
            <h3 className="h3 mb-2">Certifications</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {certifications.map((c,i) => <li key={i} className="muted">{c}</li>)}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
