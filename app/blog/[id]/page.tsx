import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-posts"
import { BlogPostContent } from "./BlogPostContent"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, different id)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 5)

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />
}

