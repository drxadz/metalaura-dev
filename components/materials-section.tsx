"use client"

import { motion } from 'framer-motion'

const materials = [
  {
    id: 1,
    name: "Brushed Aluminium",
    description: "Classic brushed finish with subtle texture and timeless appeal",
    image: "/images/hero-bg-2.jpeg",
    properties: ["Corrosion Resistant", "Low Maintenance", "Timeless Finish"]
  },
  {
    id: 2,
    name: "Matte Black",
    description: "Modern matte black coating for contemporary aesthetics",
    image: "/images/hero-bg-3.jpeg",
    properties: ["Contemporary", "Durable Coating", "High Contrast"]
  },
  {
    id: 3,
    name: "Tempered Glass",
    description: "Crystal clear glass railings for seamless integration",
    image: "/images/hero-bg-4.jpeg",
    properties: ["Crystal Clear", "Safety Rated", "Seamless Design"]
  }
]

export default function MaterialsSection() {
  return (
    <section className="py-32 relative bg-black">
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
            Materials &
            <br />
            <span className="text-white/80">Finishes</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            We source only the finest materials, ensuring each staircase not only looks 
            exceptional but stands the test of time.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10">
                {/* Image */}
                <div 
                  className="aspect-[3/4] bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${material.image})`,
                    filter: 'brightness(0.7) contrast(1.2) saturate(0.8)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white font-light text-2xl mb-3 group-hover:text-white/90 transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-white/80 font-light mb-6 leading-relaxed">
                    {material.description}
                  </p>
                  
                  {/* Properties */}
                  <div className="space-y-2">
                    {material.properties.map((property, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                        <span className="text-white/70 font-light text-sm">
                          {property}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-white/60 font-light text-lg max-w-3xl mx-auto">
            All our materials undergo rigorous testing and come with comprehensive warranties. 
            We work closely with leading suppliers to ensure consistent quality across every project.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 