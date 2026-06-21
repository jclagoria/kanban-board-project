import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from '@/components/Providers'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'KanbanFlow',
  description: 'Kanban board multi-vista',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
