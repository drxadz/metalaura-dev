"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: "/images/projects/project1.jpg",
    alt: "Modern Spiral Staircase",
    category: "Residential"
  },
  {
    id: 2,
    src: "/images/projects/project2.jpg",
    alt: "Industrial Floating Stairs",
    category: "Commercial"
  },
  {
    id: 3,
    src: "/images/hero-bg-1.jpeg",
    alt: "Luxury Curved Staircase",
    category: "Luxury"
  },
  {
    id: 4,
    src: "/images/hero-bg-2.jpeg",
    alt: "Minimalist Straight Stairs",
    category: "Modern"
  },
  {
    id: 5,
    src: "/images/hero-bg-3.jpeg",
    alt: "Outdoor Spiral Staircase",
    category: "Exterior"
  },
  {
    id: 6,
    src: "/images/hero-bg-4.jpeg",
    alt: "Commercial Mezzanine Stairs",
    category: "Commercial"
  },
  {
    id: 7,
    src: "/images/hero-bg-5.jpeg",
    alt: "Contemporary Floating Design",
    category: "Modern"
  },
  {
    id: 8,
    src: "/images/projects/project3.jpg",
    alt: "Premium Aluminium Finish",
    category: "Luxury"
  }
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="used" className="py-20 relative bg-black">
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
            <span>OUR PORTFOLIO</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Project
            <br />
            <span className="text-white/80">Gallery</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our completed projects, each showcasing the perfect blend of 
            design innovation and engineering excellence.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10">
                <div 
                  className="aspect-square bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    filter: 'brightness(0.7) contrast(1.2) saturate(0.8)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-light text-lg mb-2">
                    {image.alt}
                  </h3>
                  <span className="text-white/70 font-light text-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <div 
                    className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${galleryImages[currentIndex].src})`,
                      filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
                    }}
                  />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white font-light text-2xl mb-2">
                      {galleryImages[currentIndex].alt}
                    </h3>
                    <p className="text-white/70 font-light">
                      {galleryImages[currentIndex].category}
                    </p>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 font-light">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 