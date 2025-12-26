"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Code2, Home, BookOpen, FolderKanban } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b neobrutal-border bg-white neobrutal-shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-black hover:text-gray-700 transition-colors flex items-center gap-2">
          <Code2 className="w-6 h-6" />
          <span>Portfolio : Lê Bá Phát</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/">
            <Button
              variant={pathname === "/" ? "default" : "ghost"}
              className={cn(
                pathname === "/" 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-white text-black hover:bg-gray-100"
              )}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant={pathname?.startsWith("/projects") ? "default" : "ghost"}
              className={cn(
                pathname?.startsWith("/projects")
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-black hover:bg-gray-100"
              )}
            >
              <FolderKanban className="w-4 h-4 mr-2" />
              Dự Án
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              variant={pathname?.startsWith("/blog") ? "default" : "ghost"}
              className={cn(
                pathname?.startsWith("/blog")
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-black hover:bg-gray-100"
              )}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

