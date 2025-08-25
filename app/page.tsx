import Link from 'next/link'
import Section from '@/components/Section'
import { profile, projects } from '@/lib/profile'

export default function HomePage() {
  const { name, summary, links } = profile
  return (
    <>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-1 md:items-center">
          <div className="space-y-4">
            <h1 className="h1">{name}</h1>
            <p className="muted">{summary}</p>
            <div className="flex gap-4">
              {links.linkedin && <a href={links.linkedin} target="_blank">LinkedIn</a>}
              {links.github && <a href={links.github} target="_blank">GitHub</a>}
            </div>
          </div>
        </div>
      </section>

      <Section title="Featured Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.slug} className="card">
              <div className="flex items-center justify-between">
                <h3 className="h3">{p.title}</h3>
                <Link href={`/projects/${p.slug}`}>View →</Link>
              </div>
              <p className="muted">{p.summary}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
