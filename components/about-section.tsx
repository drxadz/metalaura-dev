"use client"

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Full-width Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-screen lg:h-[80vh] overflow-hidden"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/hero-bg-2.jpeg')`,
                filter: 'brightness(0.7) contrast(1.1) saturate(0.9)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-20 py-20 lg:py-0"
          >
            <div className="max-w-lg">
              {/* Subtle badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-white/60 text-sm font-light mb-8 tracking-wider"
              >
                <div className="w-8 h-px bg-white/30"></div>
                <span>ABOUT OUR CRAFT</span>
              </motion.div>

              {/* Main heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight"
              >
                Where Precision Meets
                <br />
                <span className="text-white/80">Architectural Vision</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/70 font-light mb-8 leading-relaxed"
              >
                For over a decade, we've been crafting architectural staircases that transcend 
                the ordinary. Our philosophy centers on the perfect marriage of form and function, 
                where every curve, every joint, every finish is meticulously considered.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/70 font-light mb-12 leading-relaxed"
              >
                We work exclusively with premium aluminium, pushing the boundaries of what's 
                possible in modern staircase design. Each project is a testament to our 
                commitment to architectural excellence and engineering precision.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
              >
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">150+</div>
                  <div className="text-white/60 text-sm font-light tracking-wider">PROJECTS COMPLETED</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">12+</div>
                  <div className="text-white/60 text-sm font-light tracking-wider">YEARS EXPERIENCE</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">100%</div>
                  <div className="text-white/60 text-sm font-light tracking-wider">CLIENT SATISFACTION</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}