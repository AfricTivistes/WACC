"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface LegalDialogProps {
  title: string
  trigger: React.ReactNode
  children: React.ReactNode
}

export function LegalDialog({ title, trigger, children }: LegalDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl">
          <DialogHeader className="sticky top-0 bg-white dark:bg-gray-900 z-10 py-2 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{title}</DialogTitle>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
                <span className="sr-only">Fermer</span>
              </Button>
            </div>
          </DialogHeader>
          <div className="text-gray-800 dark:text-gray-200 text-base">{children}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}
