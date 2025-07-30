"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle, Mail } from 'lucide-react'

export default function FinalCTASection() {
  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your aluminium staircase services."
    const whatsappUrl = `https://wa.me/919995282885?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = () => {
    window.open('mailto:contact@metalaura.in', '_blank')
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg-5.jpeg')`,
          filter: 'brightness(0.2) contrast(1.4) saturate(0.6)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Main Heading with Soft Motion */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-12 leading-tight tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="block"
          >
            Let's Build
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.3 }}
            className="block text-white/90"
          >
            Your
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.6 }}
            className="block text-white/80"
          >
            Vision
          </motion.span>
        </motion.h2>
        
        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/70 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Ready to transform your space with a custom aluminium staircase? 
          Let's discuss your vision and bring it to life.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center"
        >
          <Button
            onClick={handleWhatsApp}
            className="group bg-white text-black px-12 py-6 text-xl font-light hover:bg-white/90 transition-all duration-500 hover:scale-105"
          >
            <MessageCircle className="mr-4 w-6 h-6" />
            Chat on WhatsApp
            <div className="inline-block ml-4 w-6 h-6 border-2 border-black rounded-full group-hover:scale-110 transition-transform" />
          </Button>
          
          <Button
            onClick={handleEmail}
            variant="outline"
            className="border-white/30 text-white px-12 py-6 text-xl font-light hover:bg-white/10 transition-all duration-500 hover:scale-105"
          >
            <Mail className="mr-4 w-6 h-6" />
            Send Email
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-20 text-white/60 font-light"
        >
          <p className="text-xl mb-3">contact@metalaura.in</p>
          <p className="text-xl">+91 99952 82885</p>
          <p className="text-xl mt-3">Calicut, Kerala</p>
        </motion.div>
      </motion.div>
    </section>
  )
} 