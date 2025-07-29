"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const handleGetQuote = () => {
    console.log("Get Quote CTA clicked - scrolling to quote section")
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Image */}
      <div className="absolute inset-0">
        <div className="hero-3d-bg w-full h-full" />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm text-gray-300 mb-8 hero-text-glow"
        >
          Premium Aluminum Fabrication Since 2010
        </motion.div>

        {/* Minimal Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-light text-white mb-6 hero-text-glow"
        >
          METALAURA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 font-light hero-text-glow"
        >
          Crafting Excellence in Aluminum
        </motion.h2>

        {/* Minimal Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed hero-text-glow"
        >
          Transform your vision into reality with our premium aluminum fabrication services. 
          From custom designs to precision engineering, we deliver unmatched quality.
        </motion.p>

        {/* Minimal CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleGetQuote}
            className="bg-white text-gray-900 px-8 py-4 text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Your Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            className="border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => {
              console.log("View Projects button clicked")
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}