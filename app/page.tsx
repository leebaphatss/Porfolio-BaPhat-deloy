"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Award, Code2, BookOpen, Coffee, Zap } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { getAssetPath } from "@/lib/paths"

export default function Home() {
  const certificates = [
    "z7365586821228_827490648af8d80c8092d1b9a53fd945.jpg",
    "z7365586843827_153d65bd069baf69ca7df0f1ee74f518.jpg",
    "z7365586795380_580c414d14953d9aaeb3b53ac6627122.jpg",
  ]

  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hoverTimers = useRef<{ [key: number]: NodeJS.Timeout }>({})

  const handleMouseEnter = (index: number) => {
    // Clear any existing timer for this certificate
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index])
    }

    // Set new timer for 1 second
    hoverTimers.current[index] = setTimeout(() => {
      setSelectedCertificate(certificates[index])
      setIsModalOpen(true)
    }, 1000)
  }

  const handleMouseLeave = (index: number) => {
    // Clear timer when mouse leaves
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index])
      delete hoverTimers.current[index]
    }
  }

  useEffect(() => {
    // Cleanup timers on unmount
    return () => {
      Object.values(hoverTimers.current).forEach((timer) => clearTimeout(timer))
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section - Profile & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Image - Left Column */}
          <div className="lg:col-span-1">
            <Card className="neobrutal-shadow-lg bg-white sticky top-24">
              <CardHeader className="text-center bg-gray-50">
                <div className="flex justify-center mb-4">
                  <div className="relative w-48 h-48 neobrutal-border neobrutal-shadow">
                    <Image
                      src={getAssetPath("/assets/img/chandung/lebaphat.jpg")}
                      alt="Lê Bá Phát"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <CardTitle className="text-3xl">Lê Bá Phát</CardTitle>
                <CardDescription className="text-base mt-2">
                  Lập Trình Viên & Blogger
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Chuyên Môn</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 neobrutal-border neobrutal-shadow-sm bg-blue-600 text-white text-sm font-medium flex items-center gap-1">
                        <Coffee className="w-4 h-4" />
                        Java
                      </span>
                      <span className="px-3 py-1 neobrutal-border neobrutal-shadow-sm bg-blue-600 text-white text-sm font-medium flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        JavaScript
                      </span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Sở Thích</h3>
                    <p className="text-sm text-gray-700">
                      Lập trình mạng, Web Development, Chia sẻ kiến thức
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Introduction - Right Column */}
          <div className="lg:col-span-2">
            <Card className="neobrutal-shadow-lg bg-white">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center gap-2">
                  <Code2 className="w-6 h-6" />
                  <CardTitle className="text-3xl">Giới Thiệu</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">
                    Xin chào! Tôi là <strong className="text-blue-600">Lê Bá Phát</strong>, một lập trình viên đam mê với 
                    lập trình mạng và phát triển web. Blog này là nơi tôi chia sẻ những kiến thức, 
                    kinh nghiệm và bài học về lập trình, đặc biệt tập trung vào <strong className="text-blue-600">Java</strong> và 
                    <strong className="text-blue-600"> JavaScript</strong>.
                  </p>
                  <p className="text-base leading-relaxed">
                    Với niềm đam mê học hỏi và chia sẻ, tôi hy vọng những bài viết trong blog này 
                    sẽ giúp ích cho các bạn đang trên hành trình học lập trình. Mỗi bài viết đều 
                    được viết dựa trên kinh nghiệm thực tế và các khóa học mà tôi đã tham gia.
                  </p>
                  <p className="text-base leading-relaxed">
                    Hãy cùng nhau khám phá thế giới lập trình mạng qua những bài viết về Java, 
                    JavaScript và các công nghệ liên quan!
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Về Blog
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Blog này tập trung vào việc chia sẻ kiến thức về lập trình mạng, với các bài viết 
                    chi tiết về Java và JavaScript. Mỗi bài viết được viết bằng tiếng Việt, dễ hiểu 
                    và có ví dụ thực tế để giúp bạn học tập hiệu quả hơn.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certificates Section */}
        <Card className="neobrutal-shadow-lg bg-white">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-3xl text-black flex items-center gap-2">
              <Award className="w-8 h-8" />
              Chứng Nhận
            </CardTitle>
            <CardDescription>
              Các chứng nhận và bằng cấp đã đạt được
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="relative neobrutal-border neobrutal-shadow hover:neobrutal-shadow-lg transition-shadow cursor-pointer bg-white overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="relative w-full h-auto">
                    <Image
                      src={getAssetPath(`/assets/img/chungnhan/${cert}`)}
                      alt={`Chứng nhận ${index + 1}`}
                      width={400}
                      height={533}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certificate Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="p-0 max-h-[75vh] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-3 border-b neobrutal-border">
            <DialogTitle>Chứng Nhận</DialogTitle>
            <DialogClose onClose={() => setIsModalOpen(false)} />
          </div>
          {selectedCertificate && (
            <div className="relative w-full bg-white p-3 flex-1 overflow-hidden flex items-center justify-center">
              <div className="relative w-full mx-auto" style={{ maxWidth: '900px', aspectRatio: '3/4' }}>
                <Image
                  src={getAssetPath(`/assets/img/chungnhan/${selectedCertificate}`)}
                  alt="Chứng nhận"
                  fill
                  className="object-contain"
                  sizes="900px"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

