"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { ArrowLeft, Clock, Calendar, BookOpen, Coffee, Zap } from "lucide-react"
import { BlogPost } from "@/lib/blog-posts"

interface BlogPostContentProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeHeading, setActiveHeading] = useState<string>("")

  // Parse markdown-like content (simple version)
  const renderContent = (content: string) => {
    const lines = content.split("\n")
    const elements: JSX.Element[] = []
    let currentParagraph: string[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    let headingIndex = 0

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
          // End code block
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
          // Start code block
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
        const text = line.substring(2)
        const id = `heading-${headingIndex}`
        headingIndex++
        elements.push(
          <h1 key={`h1-${elements.length}`} id={id} className="text-4xl font-bold mb-4 mt-8 scroll-mt-20">
            {text}
          </h1>
        )
      } else if (line.startsWith("## ")) {
        flushParagraph()
        const text = line.substring(3)
        const id = `heading-${headingIndex}`
        headingIndex++
        elements.push(
          <h2 key={`h2-${elements.length}`} id={id} className="text-3xl font-bold mb-3 mt-6 scroll-mt-20">
            {text}
          </h2>
        )
      } else if (line.startsWith("### ")) {
        flushParagraph()
        const text = line.substring(4)
        const id = `heading-${headingIndex}`
        headingIndex++
        elements.push(
          <h3 key={`h3-${elements.length}`} id={id} className="text-2xl font-semibold mb-2 mt-4 scroll-mt-20">
            {text}
          </h3>
        )
      } else if (line.trim() === "") {
        flushParagraph()
      } else {
        // Regular text - handle inline formatting
        const processedLine = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/`(.*?)`/g, "<code class='bg-muted px-1 py-0.5 rounded'>$1</code>")
        currentParagraph.push(processedLine)
      }
    })

    flushParagraph()

    return elements
  }

  // Extract headings from content for TOC
  useEffect(() => {
    const extractHeadings = () => {
      const lines = post.content.split("\n")
      const extracted: { id: string; text: string; level: number }[] = []
      let headingIndex = 0
      
      lines.forEach((line) => {
        if (line.startsWith("## ") && !line.startsWith("### ")) {
          const text = line.substring(3).trim()
          const id = `heading-${headingIndex}`
          headingIndex++
          extracted.push({ id, text, level: 2 })
        } else if (line.startsWith("### ")) {
          const text = line.substring(4).trim()
          const id = `heading-${headingIndex}`
          headingIndex++
          extracted.push({ id, text, level: 3 })
        }
      })
      
      setHeadings(extracted)
    }
    
    extractHeadings()
  }, [post.content])

  // Calculate reading progress and detect active heading
  useEffect(() => {
    if (headings.length === 0) return

    const calculateProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))

      // Detect active heading
      const offset = 120 // Offset from top
      let currentActive = ""

      // Check each heading from bottom to top
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        const element = document.getElementById(heading.id)
        
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.pageYOffset
          
          // If heading is above the viewport offset, it's the active one
          if (elementTop <= scrollTop + offset) {
            currentActive = heading.id
            break
          }
        }
      }

      // If no heading found and we're at the top, select first heading
      if (!currentActive && scrollTop < 200) {
        currentActive = headings[0]?.id || ""
      }

      setActiveHeading(currentActive)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial calculation
    calculateProgress()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [headings])

  // Calculate reading time
  const getReadingTime = (content: string) => {
    const words = content.split(/\s+/).length
    return Math.ceil(words / 200)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/blog" className="inline-block mb-6">
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100 border-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay Lại Blog
          </Button>
        </Link>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Related Posts */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <Card className="neobrutal-shadow bg-white sticky top-24">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Bài Viết Liên Quan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <div className="p-3 hover:bg-gray-50 neobrutal-border neobrutal-shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-2 mb-2">
                          {relatedPost.category === "Java" ? (
                            <Coffee className="w-4 h-4 text-orange-600" />
                          ) : (
                            <Zap className="w-4 h-4 text-blue-600" />
                          )}
                          <span className={`text-xs font-bold px-2 py-0.5 neobrutal-border text-white ${
                            relatedPost.category === "Java" ? "bg-orange-500" : "bg-blue-500"
                          }`}>
                            {relatedPost.category}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {relatedPost.description}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Chưa có bài viết liên quan</p>
                )}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-6 order-1 lg:order-2">
            <Card className="neobrutal-shadow-lg bg-white">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-semibold px-3 py-1 neobrutal-border neobrutal-shadow-sm text-white ${
                    post.category === "Java" ? "bg-orange-500" : "bg-blue-500"
                  }`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(post.date), "dd MMM yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{getReadingTime(post.content)} phút đọc</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-4xl">{post.title}</CardTitle>
                <p className="text-lg text-muted-foreground mt-2">{post.description}</p>
              </CardHeader>
              <Separator />
              <CardContent className="prose prose-lg max-w-none mt-6">
                <div className="blog-content space-y-4">
                  {renderContent(post.content)}
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Right Sidebar - Reading Progress & TOC */}
          <aside className="lg:col-span-3 order-3">
            <div className="sticky top-24 space-y-6">
              {/* Reading Progress */}
              <Card className="neobrutal-shadow bg-white">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-lg">Tiến Độ Đọc</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 h-3 neobrutal-border neobrutal-shadow-sm overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${readingProgress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      {Math.round(readingProgress)}% đã đọc
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              {headings.length > 0 && (
                <Card className="neobrutal-shadow bg-white">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-lg">Mục Lục</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      {headings.map((heading, index) => {
                        const isActive = activeHeading === heading.id
                        return (
                          <a
                            key={index}
                            href={`#${heading.id}`}
                            onClick={(e) => {
                              e.preventDefault()
                              const element = document.getElementById(heading.id)
                              if (element) {
                                const offset = 80
                                const elementPosition = element.getBoundingClientRect().top
                                const offsetPosition = elementPosition + window.pageYOffset - offset
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: "smooth"
                                })
                              }
                            }}
                            className={`block text-sm transition-all ${
                              isActive
                                ? "text-blue-600 font-semibold bg-blue-50 px-2 py-1 neobrutal-border neobrutal-shadow-sm"
                                : heading.level === 3
                                ? "pl-4 text-gray-600 hover:text-blue-600"
                                : "font-semibold hover:text-blue-600"
                            }`}
                          >
                            {heading.text}
                          </a>
                        )
                      })}
                    </nav>
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

