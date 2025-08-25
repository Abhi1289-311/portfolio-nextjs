import Section from '@/components/Section'
import { projects } from '@/lib/profile'
import { notFound } from 'next/navigation'

type Params = { slug: string }

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default async function ProjectDetail(
  props: { params: Promise<Params> }
) {
  const { slug } = await props.params
  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()

  return (
    <>
      <Section title={project.title}>
        <div className="card space-y-4">
          <p className="muted">{project.summary}</p>
          <div className="text-sm">
            <span className="muted">Tech: {project.tech.join(', ')}</span>
          </div>
        </div>
      </Section>
    </>
  )
}
