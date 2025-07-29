"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'

// Background images for slideshow
const backgroundImages = [
  '/images/hero-bg-1.jpeg',
  '/images/hero-bg-2.jpeg',
  '/images/hero-bg-3.jpeg',
 
]

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 3D Aluminum Structure Animation
    let animationId: number
    let time = 0

    const drawAluminumStructure = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Create multiple floating aluminum pieces
      for (let i = 0; i < 5; i++) {
        const angle = time * 0.001 + i * (Math.PI * 2) / 5
        const radius = 100 + Math.sin(time * 0.002 + i) * 50
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(time * 0.003 + i)
        
        // Create metallic gradient
        const gradient = ctx.createLinearGradient(-30, -30, 30, 30)
        gradient.addColorStop(0, '#E8E8E8')
        gradient.addColorStop(0.5, '#F5F5F5')
        gradient.addColorStop(1, '#CCCCCC')
        
        ctx.fillStyle = gradient
        ctx.strokeStyle = '#4A90E2'
        ctx.lineWidth = 2
        
        // Draw aluminum piece
        ctx.beginPath()
        ctx.rect(-30, -10, 60, 20)
        ctx.fill()
        ctx.stroke()
        
        // Add shine effect
        const shineGradient = ctx.createLinearGradient(-30, -10, -20, 0)
        shineGradient.addColorStop(0, 'rgba(255,255,255,0.6)')
        shineGradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = shineGradient
        ctx.fillRect(-30, -10, 20, 20)
        
        ctx.restore()
      }
      
      time += 16
      animationId = requestAnimationFrame(drawAluminumStructure)
    }

    drawAluminumStructure()
    console.log("3D aluminum structure animation started")

    // Background image slideshow
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(interval)
    }
  }, [])

  const handleGetQuote = () => {
    console.log("Get Quote CTA clicked - scrolling to quote section")
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    { icon: Sparkles, text: "Premium Quality" },
    { icon: Zap, text: "Fast Delivery" },
    
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-metallic-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-silver-mist/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-metallic-blue" />
            <span className="text-dark-graphite font-inter font-medium">
              Premium Aluminum Fabrication Since 2010
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-gradient mb-6"
          >
            METALAURA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-inter font-light text-dark-graphite mb-8"
          >
            Crafting Excellence in{' '}
            <span className="text-metallic-blue font-semibold">Aluminum</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-dark-graphite/80 font-inter max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transform your vision into reality with our premium aluminum fabrication services. 
            From custom designs to precision engineering, we deliver unmatched quality and craftsmanship.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 glass-card px-6 py-4"
              >
                <feature.icon className="w-6 h-6 text-metallic-blue" />
                <span className="text-dark-graphite font-inter font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleGetQuote}
              className="group glass-button text-lg px-8 py-6 animate-glow-pulse hover:scale-110 transition-all duration-300 bg-metallic-blue/20 hover:bg-metallic-blue/30 text-dark-graphite font-semibold"
            >
              Get Your Quote Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              className="glass-button text-lg px-8 py-6 border-2 border-metallic-blue/30 text-dark-graphite hover:bg-metallic-blue/10"
              onClick={() => {
                console.log("View Projects button clicked")
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Our Projects
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-metallic-blue/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-metallic-blue rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}