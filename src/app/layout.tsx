import type { Metadata } from 'next'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import './globals.css'

interface IProps { 
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Hasan Sattar',
  description: 'Personal Portfolio Website for Hasan Sattar'
}

export default function RootLayout({ children }: IProps) {
  return (
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  )
}
