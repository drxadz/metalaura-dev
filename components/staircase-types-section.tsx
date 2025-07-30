"use client"

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const staircaseTypes = [
  {
    id: 1,
    title: "Floating Spiral",
    description: "Elegant spiral design with hidden support system",
    image: "/images/hero-bg-3.jpeg",
    features: ["Hidden Support", "LED Integration", "Glass Railings"]
  },
  {
    id: 2,
    title: "Industrial Straight",
    description: "Raw aluminium with exposed framework design",
    image: "/images/hero-bg-4.jpeg",
    features: ["Exposed Framework", "Industrial Finish", "Cable Railings"]
  },
  {
    id: 3,
    title: "Curved Luxury",
    description: "Sweeping curves with premium materials",
    image: "/images/hero-bg-5.jpeg",
    features: ["Curved Design", "Premium Finish", "Integrated Lighting"]
  },
  {
    id: 4,
    title: "Minimalist Floating",
    description: "Clean lines with concealed structure",
    image: "/images/hero-bg-1.jpeg",
    features: ["Concealed Structure", "Minimalist Design", "Powder Coated"]
  }
]

export default function StaircaseTypesSection() {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
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
            <span>OUR DESIGNS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Staircase
            <br />
            <span className="text-white/80">Types</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our signature staircase designs, each crafted with precision 
            and engineered for both beauty and functionality.
          </p>
        </motion.div>

        {/* Horizontal Slider */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
            {staircaseTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="flex-shrink-0 w-96 group"
              >
                <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10">
                  {/* Image */}
                  <div 
                    className="aspect-[4/3] bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${type.image})`,
                      filter: 'brightness(0.7) contrast(1.2) saturate(0.8)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white font-light text-2xl mb-3 group-hover:text-white/90 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-white/80 font-light mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/70 rounded-full text-xs font-light"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  )
} 