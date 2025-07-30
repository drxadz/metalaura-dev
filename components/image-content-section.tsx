"use client"

import { motion } from 'framer-motion'

export default function ImageContentSection() {
  return (
    <section className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg"
          >
            <div 
              className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/hero-bg-2.jpeg')`,
                filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
              }}
            />
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
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
              <span>OUR APPROACH</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Where Precision
              <br />
              <span className="text-white/80">Meets Design</span>
            </h2>
            
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Every staircase we create is a testament to our commitment to excellence. 
              We blend cutting-edge fabrication techniques with timeless design principles, 
              ensuring each piece not only meets but exceeds expectations.
            </p>
          </motion.div>
        </div>

        {/* Second Row - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 text-white/60 text-sm font-light mb-6 tracking-wider">
              <div className="w-8 h-px bg-white/30"></div>
              <span>MATERIALS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Premium Aluminium
              <br />
              <span className="text-white/80">Craftsmanship</span>
            </h2>
            
            <p className="text-xl text-white/70 font-light leading-relaxed">
              We source only the finest aluminium alloys, ensuring durability and beauty 
              that lasts generations. Our finishes range from brushed to matte, each 
              carefully applied to enhance the material's natural elegance.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative overflow-hidden rounded-lg lg:order-2"
          >
            <div 
              className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/hero-bg-3.jpeg')`,
                filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
              }}
            />
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 