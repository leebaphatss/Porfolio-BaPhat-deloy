import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="relative bg-white neobrutal-border neobrutal-shadow-lg max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export function DialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  )
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      {children}
    </div>
  )
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold">{children}</h2>
  )
}

export function DialogClose({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="p-2 hover:bg-gray-100 rounded-md neobrutal-border neobrutal-shadow-sm transition-colors"
      aria-label="Close"
    >
      <X className="w-5 h-5" />
    </button>
  )
}

