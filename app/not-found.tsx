import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="neobrutal-shadow-lg text-center">
          <CardHeader>
            <CardTitle className="text-6xl font-bold mb-4">404</CardTitle>
            <p className="text-xl text-muted-foreground">
              Trang không tồn tại
            </p>
          </CardHeader>
          <CardContent>
            <Link href="/">
              <Button size="lg">Về Trang Chủ</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

