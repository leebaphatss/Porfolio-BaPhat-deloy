import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import { ProjectContent } from "./ProjectContent"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  // Get related projects (same category, different id)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <ProjectContent 
      project={project} 
      relatedProjects={relatedProjects}
    />
  )
}

