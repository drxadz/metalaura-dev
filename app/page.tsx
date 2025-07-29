"use client"

import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import ProjectsSection from '@/components/projects-section'
import InstagramSection from '@/components/instagram-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  console.log("Home page rendered with all sections including footer")

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
      
      <Toaster />
    </main>
  )
}
