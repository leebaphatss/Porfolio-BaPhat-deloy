import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "Lê Bá Phát - Blog Lập Trình Mạng",
  description: "Blog cá nhân chia sẻ về lập trình mạng, Java & JavaScript",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

