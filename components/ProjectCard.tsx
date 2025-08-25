import Link from 'next/link'
import { Chip } from '@mui/material'

export default function ProjectCard({ title, slug, summary, tech }:
  { title: string; slug: string; summary: string; tech: string[] }) {
  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="h3">{title}</h3>
        <Link className="text-sm" href={`/projects/${slug}`}>View →</Link>
      </div>
      <p className="muted">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => <Chip key={t} label={t} size="small" />)}
      </div>
    </div>
  )
}
