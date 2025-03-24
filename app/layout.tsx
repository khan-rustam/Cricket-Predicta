import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProviderClient } from "@/components/theme-provider-client"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'] 
})

export const metadata: Metadata = {
  title: "Cricket Predicta",
  description: "Your ultimate destination for cricket predictions and analysis",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Removed the thin font import */}
      </head>
      <body className={inter.className}>
        <ThemeProviderClient attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProviderClient>
      </body>
    </html>
  )
}



import './globals.css'