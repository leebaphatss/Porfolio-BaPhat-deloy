"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { ArrowLeft, Calendar, Code2, ExternalLink, Github, Tag, FolderKanban, Star, GitBranch, Download, ImageIcon, BookOpen, Settings, Rocket, FileCode } from "lucide-react"
import { Project } from "@/lib/projects"

interface ProjectContentProps {
  project: Project
  relatedProjects: Project[]
}

export function ProjectContent({ project, relatedProjects }: ProjectContentProps) {
  // Parse markdown-like content
  const renderContent = (content: string) => {
    const lines = content.split("\n")
    const elements: JSX.Element[] = []
    let currentParagraph: string[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ")
        if (text.trim()) {
          elements.push(
            <p 
              key={`p-${elements.length}`} 
              className="mb-4 leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: text }} 
            />
          )
        }
        currentParagraph = []
      }
    }

    lines.forEach((line) => {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          flushParagraph()
          elements.push(
            <pre
              key={`pre-${elements.length}`}
              className="bg-muted p-4 rounded-md overflow-x-auto mb-4 neobrutal-border neobrutal-shadow-sm"
            >
              <code className="text-sm whitespace-pre">{codeBlockContent.join("\n")}</code>
            </pre>
          )
          codeBlockContent = []
          inCodeBlock = false
        } else {
          flushParagraph()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      if (line.startsWith("# ")) {
        flushParagraph()
        elements.push(
          <h1 key={`h1-${elements.length}`} className="text-4xl font-bold mb-4 mt-8">
            {line.substring(2)}
          </h1>
        )
      } else if (line.startsWith("## ")) {
        flushParagraph()
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-3xl font-bold mb-3 mt-6">
            {line.substring(3)}
          </h2>
        )
      } else if (line.startsWith("### ")) {
        flushParagraph()
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-2xl font-semibold mb-2 mt-4">
            {line.substring(4)}
          </h3>
        )
      } else if (line.startsWith("- ")) {
        flushParagraph()
        const text = line.substring(2)
        elements.push(
          <li key={`li-${elements.length}`} className="ml-4 mb-2 list-disc">
            {text}
          </li>
        )
      } else if (line.trim() === "") {
        flushParagraph()
      } else {
        const processedLine = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/`(.*?)`/g, "<code class='bg-muted px-1 py-0.5 rounded'>$1</code>")
        currentParagraph.push(processedLine)
      }
    })

    flushParagraph()

    return elements
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/projects" className="inline-block mb-6">
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100 border-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay Lại Dự Án
          </Button>
        </Link>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Related Projects */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <Card className="neobrutal-shadow bg-white sticky top-24">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FolderKanban className="w-5 h-5" />
                  Dự Án Liên Quan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedProjects.length > 0 ? (
                  relatedProjects.map((relatedProject) => (
                    <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                      <div className="p-3 hover:bg-gray-50 neobrutal-border neobrutal-shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-2 mb-2">
                          <Code2 className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold px-2 py-0.5 neobrutal-border bg-blue-600 text-white">
                            {relatedProject.category}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Chưa có dự án liên quan</p>
                )}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - README Style */}
          <main className="lg:col-span-6 order-1 lg:order-2">
            <Card className="neobrutal-shadow-lg bg-white">
              <CardContent className="p-0">
                {/* README Header */}
                <div className="bg-gray-50 p-6 border-b neobrutal-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
                      <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <span className="text-sm font-bold px-3 py-1.5 neobrutal-border neobrutal-shadow-sm bg-blue-600 text-white">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 neobrutal-border-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(project.date), "dd MMM yyyy")}</span>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-gray-900 text-white px-3 py-1.5 neobrutal-border neobrutal-shadow-sm hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm bg-green-600 text-white px-3 py-1.5 neobrutal-border neobrutal-shadow-sm hover:bg-green-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Screenshots Section */}
                {project.images && project.images.length > 0 && (
                  <div className="p-6 border-b neobrutal-border bg-white">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <ImageIcon className="w-6 h-6 text-blue-600" />
                      Screenshots
                    </h2>
                    <div className="space-y-4">
                      {project.images.map((imageUrl, index) => (
                        <div
                          key={index}
                          className="relative w-full aspect-video neobrutal-border neobrutal-shadow-sm overflow-hidden bg-gray-100"
                        >
                          <Image
                            src={imageUrl}
                            alt={`${project.title} - Screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features Section */}
                <div className="p-6 border-b neobrutal-border bg-white">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 neobrutal-border-sm">
                        <span className="text-blue-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Section */}
                <div className="p-6 border-b neobrutal-border bg-white">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-blue-600" />
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-sm px-4 py-2 bg-blue-50 text-blue-700 neobrutal-border neobrutal-shadow-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Content - Render all sections */}
                <div className="p-6 bg-white">
                  <div className="project-content space-y-6 prose prose-lg max-w-none">
                    {renderContent(project.longDescription)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Right Sidebar - Project Info */}
          <aside className="lg:col-span-3 order-3">
            <div className="sticky top-24 space-y-6">
              {/* Technologies */}
              <Card className="neobrutal-shadow bg-white">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Công Nghệ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-sm px-3 py-1.5 bg-blue-50 text-blue-700 neobrutal-border neobrutal-shadow-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="neobrutal-shadow bg-white">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-lg">Tính Năng</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Links */}
              {(project.githubUrl || project.demoUrl) && (
                <Card className="neobrutal-shadow bg-white">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-lg">Liên Kết</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 neobrutal-border neobrutal-shadow-sm transition-all cursor-pointer group"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">GitHub Repository</span>
                        <ExternalLink className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 neobrutal-border neobrutal-shadow-sm transition-all cursor-pointer group"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                        <ExternalLink className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

