"use client"

import { useState } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import ProjectsSection from '@/components/projects-section'
import InstagramSection from '@/components/instagram-section'
import ContactSection from '@/components/contact-section'
import QuoteSection from '@/components/quote-section'
import Footer from '@/components/footer'
import QuoteModal from '@/components/quote-modal'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  console.log("Home page rendered with all sections including footer")

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <InstagramSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      
      <Toaster />
    </main>
  )
}
