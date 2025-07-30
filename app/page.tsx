"use client"

import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import StaircaseTypesSection from '@/components/staircase-types-section'
import MaterialsSection from '@/components/materials-section'
import GallerySection from '@/components/gallery-section'
import FinalCTASection from '@/components/final-cta-section'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StaircaseTypesSection />
      <MaterialsSection />
      <GallerySection />
      <FinalCTASection />
      <Footer />
      
      <Toaster />
    </main>
  )
}
