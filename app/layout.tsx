import type React from "react"
import "./globals.css"
import { Playfair_Display, Poppins } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" })

export const metadata = {
  title: "MK Travel - Luxury Airport Transfers",
  description: "Premium airport taxi service for business travelers and high-end customers.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans bg-primary text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'