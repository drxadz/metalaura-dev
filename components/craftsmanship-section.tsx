"use client"

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function CraftsmanshipSection() {
  const handleVideoClick = () => {
    // This would open a video modal or navigate to a video page
    // console.log('Video clicked')
  }

  return (
    <section className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-white/60 text-sm font-light mb-8 tracking-wider">
            <div className="w-8 h-px bg-white/30"></div>
            <span>BEHIND THE SCENES</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            The Art of
            <br />
            <span className="text-white/80">Craftsmanship</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Witness the precision and dedication that goes into every piece we create.
          </p>
        </motion.div>

        {/* Horizontal Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg"
          >
            <div 
              className="aspect-[16/9] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/hero-bg-4.jpeg')`,
                filter: 'brightness(0.7) contrast(1.2) saturate(0.9)'
              }}
            />
            
            {/* Play Button Overlay */}
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button
                onClick={handleVideoClick}
                className="group w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </motion.div>
            
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-white/60 text-sm font-light mb-6 tracking-wider">
              <div className="w-8 h-px bg-white/30"></div>
              <span>OUR PROCESS</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">
              Precision in
              <br />
              <span className="text-white/80">Every Detail</span>
            </h3>
            
            <p className="text-lg text-white/70 font-light leading-relaxed">
              From initial concept to final installation, our team of skilled craftsmen 
              ensures every weld, every cut, and every finish meets our exacting standards. 
              We believe that true quality is found in the details that others might miss.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                <p className="text-white/70 font-light">
                  Custom design consultation and 3D modeling
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                <p className="text-white/70 font-light">
                  Precision cutting and fabrication in our workshop
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                <p className="text-white/70 font-light">
                  Quality control and finishing touches
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-2"></div>
                <p className="text-white/70 font-light">
                  Professional installation and final inspection
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 