import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-posts"
import { format } from "date-fns"
import { Coffee, Zap, BookOpen, Calendar, Clock, ArrowRight, User, Tag } from "lucide-react"

export default function BlogPage() {
  const javaPosts = blogPosts.filter(post => post.category === "Java")
  const javascriptPosts = blogPosts.filter(post => post.category === "JavaScript")
  const allPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featuredPost = allPosts[0]
  const recentPosts = allPosts.slice(1, 7)

  // Calculate reading time (rough estimate: 200 words per minute)
  const getReadingTime = (content: string) => {
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return minutes
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Chào mừng đến với Blog của tôi!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nơi tôi chia sẻ những kiến thức, kinh nghiệm và bài học về lập trình mạng với <strong className="text-blue-600">Java</strong> và <strong className="text-blue-600">JavaScript</strong>
          </p>
        </div>

        {/* Main Layout: Featured Post + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Post - Large */}
          {featuredPost && (
            <div className="lg:col-span-2">
              <Link href={`/blog/${featuredPost.id}`}>
                <Card className="hover:neobrutal-shadow-lg transition-all duration-300 bg-white group cursor-pointer h-full">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold px-3 py-1.5 neobrutal-border neobrutal-shadow-sm text-white ${
                        featuredPost.category === "Java" ? "bg-orange-500" : "bg-blue-500"
                      }`}>
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(featuredPost.date), "dd MMM yyyy")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{getReadingTime(featuredPost.content)} phút đọc</span>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-600 line-clamp-3 leading-relaxed">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold pt-2">
                      Đọc bài viết đầy đủ
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author Card */}
            <Card className="neobrutal-shadow bg-white">
              <CardHeader className="bg-gray-50 text-center">
                <div className="flex justify-center mb-3">
                  <div className="relative w-20 h-20 neobrutal-border neobrutal-shadow">
                    <Image
                      src="/assets/img/chandung/lebaphat.jpg"
                      alt="Lê Bá Phát"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-lg">Lê Bá Phát</CardTitle>
                <CardDescription>Lập Trình Viên & Blogger</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600 text-center">
                  Chia sẻ kiến thức về Java & JavaScript từ kinh nghiệm thực tế
                </p>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="neobrutal-shadow bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Chủ Đề
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="#java" className="flex items-center justify-between p-3 hover:bg-gray-50 neobrutal-border neobrutal-shadow-sm transition-all group">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">Java</span>
                  </div>
                  <span className="text-sm text-gray-500">{javaPosts.length}</span>
                </Link>
                <Link href="#javascript" className="flex items-center justify-between p-3 hover:bg-gray-50 neobrutal-border neobrutal-shadow-sm transition-all group">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">JavaScript</span>
                  </div>
                  <span className="text-sm text-gray-500">{javascriptPosts.length}</span>
                </Link>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="neobrutal-shadow bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg">Thống Kê</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tổng bài viết</span>
                  <span className="font-bold text-blue-600">{blogPosts.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Java</span>
                  <span className="font-bold text-orange-600">{javaPosts.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">JavaScript</span>
                  <span className="font-bold text-blue-600">{javascriptPosts.length}</span>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Recent Posts */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-2 h-10 bg-blue-600 neobrutal-shadow-sm"></div>
            <h2 className="text-3xl font-bold">Bài Viết Gần Đây</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="hover:neobrutal-shadow-lg transition-all duration-300 bg-white h-full flex flex-col group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 neobrutal-border neobrutal-shadow-sm text-white ${
                        post.category === "Java" ? "bg-orange-500" : "bg-blue-500"
                      }`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{getReadingTime(post.content)} phút</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="line-clamp-3 mb-4 text-gray-600">
                      {post.description}
                    </CardDescription>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{format(new Date(post.date), "dd MMM")}</span>
                      </div>
                      <span className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                        Đọc
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* All Posts by Category */}
        <div className="space-y-12">
          {/* Java Section */}
          <section id="java" className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 neobrutal-border neobrutal-shadow-sm">
                <Coffee className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Tất Cả Bài Viết Java</h2>
                <p className="text-sm text-gray-600 mt-1">{javaPosts.length} bài viết về Java</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {javaPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="hover:neobrutal-shadow-lg transition-all duration-300 bg-white group cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2.5 py-1 neobrutal-border neobrutal-shadow-sm bg-orange-500 text-white">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{format(new Date(post.date), "dd/MM/yyyy")}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{getReadingTime(post.content)} phút</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-base line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2 text-gray-600 mb-2 text-sm">
                        {post.description}
                      </CardDescription>
                      <div className="flex items-center text-orange-600 font-semibold text-xs">
                        Đọc bài viết
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* JavaScript Section */}
          <section id="javascript" className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 neobrutal-border neobrutal-shadow-sm">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Tất Cả Bài Viết JavaScript</h2>
                <p className="text-sm text-gray-600 mt-1">{javascriptPosts.length} bài viết về JavaScript</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {javascriptPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="hover:neobrutal-shadow-lg transition-all duration-300 bg-white group cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2.5 py-1 neobrutal-border neobrutal-shadow-sm bg-blue-500 text-white">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{format(new Date(post.date), "dd/MM/yyyy")}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{getReadingTime(post.content)} phút</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2 text-gray-600 mb-2 text-sm">
                        {post.description}
                      </CardDescription>
                      <div className="flex items-center text-blue-600 font-semibold text-xs">
                        Đọc bài viết
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

