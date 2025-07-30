"use client"

import { motion } from 'framer-motion'

export default function VerticalImagePair() {
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
            <span>OUR WORK</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Staircase
            <br />
            <span className="text-white/80">Showcase</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of custom aluminium staircases, each crafted with 
            precision and designed to elevate any space.
          </p>
        </motion.div>

        {/* Image Pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg group"
          >
            <div 
              className="aspect-[3/4] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/projects/project1.jpg')`,
                filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
              }}
            />
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />
            
            {/* Overlay Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-light text-2xl mb-2">
                Modern Spiral
              </h3>
              <p className="text-white/80 font-light">
                Contemporary design meets functionality
              </p>
            </div>
          </motion.div>

          {/* Second Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative overflow-hidden rounded-lg group"
          >
            <div 
              className="aspect-[3/4] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/projects/project2.jpg')`,
                filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
              }}
            />
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />
            
            {/* Overlay Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-light text-2xl mb-2">
                Industrial Elegance
              </h3>
              <p className="text-white/80 font-light">
                Raw materials, refined execution
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 font-light text-lg">
            Each project is a unique collaboration between our craftsmen and your vision.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 