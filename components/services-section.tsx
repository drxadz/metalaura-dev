"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Shield, Zap, Eye } from 'lucide-react'

export default function ServicesSection() {
  const [hoveredMaterial, setHoveredMaterial] = useState<number | null>(null)

  const materials = [
    {
      id: 1,
      name: "Brushed Aluminium",
      description: "Premium brushed finish with subtle texture and elegant sheen",
      features: ["Corrosion Resistant", "Low Maintenance", "Timeless Appeal"],
      image: "/images/hero-bg-1.jpeg",
      icon: Sparkles
    },
    {
      id: 2,
      name: "Matte Finishes",
      description: "Sophisticated matte surfaces for contemporary aesthetics",
      features: ["Fingerprint Resistant", "Modern Look", "Easy Cleaning"],
      image: "/images/hero-bg-2.jpeg",
      icon: Shield
    },
    {
      id: 3,
      name: "Glass Railings",
      description: "Crystal-clear glass panels for seamless visual flow",
      features: ["Crystal Clear", "Safety Rated", "Minimalist Design"],
      image: "/images/hero-bg-3.jpeg",
      icon: Eye
    },
    {
      id: 4,
      name: "Anodized Aluminium",
      description: "Durable anodized finish with enhanced protection",
      features: ["Enhanced Durability", "Color Options", "Weather Resistant"],
      image: "/images/hero-bg-4.jpeg",
      icon: Zap
    }
  ]

  return (
    <section id="materials" className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-white/60 text-sm font-light mb-8 tracking-wider">
            <div className="w-8 h-px bg-white/30"></div>
            <span>PREMIUM MATERIALS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Crafted with
            <br />
            <span className="text-white/80">Precision</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our selection of premium materials, each chosen for their 
            exceptional quality and architectural potential.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredMaterial(material.id)}
              onMouseLeave={() => setHoveredMaterial(null)}
            >
              <div className="aspect-[3/2] relative overflow-hidden rounded-lg">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${material.image})`,
                    filter: 'brightness(0.7) contrast(1.1) saturate(0.9)'
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <material.icon className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredMaterial === material.id ? 1 : 0,
                        scale: hoveredMaterial === material.id ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-light text-white mb-3">
                      {material.name}
                    </h3>
                    <p className="text-white/70 font-light mb-4 leading-relaxed">
                      {material.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {material.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: hoveredMaterial === material.id ? 1 : 0.7,
                            x: hoveredMaterial === material.id ? 0 : -10
                          }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                          <span className="text-white/80 text-sm font-light">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover effect line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredMaterial === material.id ? '100%' : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-px bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-6">
              Ready to Transform Your Space?
            </h3>
            <p className="text-white/70 font-light mb-8 leading-relaxed">
              Let's discuss your vision and explore how our premium materials 
              can bring your architectural dreams to life.
            </p>
            <button className="group bg-white text-black px-8 py-4 text-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Start Your Project
              <div className="inline-block ml-3 w-5 h-5 border-2 border-black rounded-full group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}