"use client"

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content - Fading in from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-3 text-white/60 text-sm font-light mb-8 tracking-wider">
              <div className="w-12 h-px bg-white/30"></div>
              <span>ABOUT METALAURA</span>
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl font-light text-white leading-tight"
            >
              Crafting
              <br />
              <span className="text-white/80">Timeless</span>
              <br />
              <span className="text-white/70">Elegance</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl text-white/70 font-light leading-relaxed"
            >
              For over a decade, Metalaura has been at the forefront of architectural innovation, 
              transforming spaces with bespoke aluminium staircases that blend form and function seamlessly. 
              Our commitment to precision engineering and timeless design has made us the choice of 
              discerning architects and homeowners worldwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-white/60 rounded-full mt-3"></div>
                <p className="text-white/70 font-light">
                  Each staircase is a unique collaboration between our master craftsmen and your vision
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-white/60 rounded-full mt-3"></div>
                <p className="text-white/70 font-light">
                  Premium materials and cutting-edge fabrication techniques ensure lasting beauty
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-white/60 rounded-full mt-3"></div>
                <p className="text-white/70 font-light">
                  From concept to installation, we handle every detail with meticulous attention
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image - Fading in from right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="relative overflow-hidden rounded-lg"
          >
            <div 
              className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/hero-bg-2.jpeg')`,
                filter: 'brightness(0.7) contrast(1.2) saturate(0.8)'
              }}
            />
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 