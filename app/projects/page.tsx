import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/projects"
import { format } from "date-fns"
import { Calendar, Code2, ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold neobrutal-shadow-sm inline-block px-8 py-4 neobrutal-border bg-blue-600 text-white">
            Dự Án Cá Nhân
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Các dự án nổi bật mà tôi đã phát triển trong quá trình học tập và làm việc
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="block h-full">
              <Card className="hover:neobrutal-shadow-lg transition-all duration-300 bg-white h-full flex flex-col group cursor-pointer">
                <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-3 py-1.5 neobrutal-border neobrutal-shadow-sm bg-blue-600 text-white">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{format(new Date(project.date), "MMM yyyy")}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="line-clamp-3 mb-4 text-gray-600">
                    {project.description}
                  </CardDescription>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 neobrutal-border neobrutal-shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 neobrutal-border neobrutal-shadow-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold text-sm mt-auto pt-3 border-t">
                    Xem chi tiết
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

