import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/profile'

export const revalidate = 600 // ISR demonstration

export default function ProjectsPage() {
  return (
    <>
      <Section title="Sample Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
        </div>
      </Section>
    </>
  )
}
