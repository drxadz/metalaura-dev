"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Custom']

  const projects = [
    {
      id: 1,
      title: "Modern Loft Staircase",
      category: "Residential",
      image: "/images/projects/project1.jpg",
      description: "Floating aluminium steps with glass railing"
    },
    {
      id: 2,
      title: "Industrial Warehouse",
      category: "Commercial",
      image: "/images/projects/project2.jpg",
      description: "Heavy-duty aluminium staircase system"
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      category: "Residential",
      image: "/images/projects/project3.jpg",
      description: "Spiral aluminium staircase with LED integration"
    },
    {
      id: 4,
      title: "Office Complex",
      category: "Commercial",
      image: "/images/hero-bg-1.jpeg",
      description: "Contemporary aluminium stair design"
    },
    {
      id: 5,
      title: "Manufacturing Facility",
      category: "Industrial",
      image: "/images/hero-bg-2.jpeg",
      description: "Durable aluminium stair solutions"
    },
    {
      id: 6,
      title: "Custom Art Installation",
      category: "Custom",
      image: "/images/hero-bg-3.jpeg",
      description: "Unique aluminium staircase sculpture"
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const handleViewAllProjects = () => {
    window.location.href = '/portfolio'
  }

  return (
    <section id="gallery" className="py-32 relative bg-black">
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
            <span>OUR PORTFOLIO</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Architectural
            <br />
            <span className="text-white/80">Excellence</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our collection of premium aluminium staircases, each crafted with 
            precision and architectural vision.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-sm font-light tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'text-white/60 hover:text-white border border-white/20 hover:border-white/40'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Mosaic Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white/60 text-xs font-light tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-light text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={handleViewAllProjects}
            className="group bg-white text-black px-8 py-4 text-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <div className="inline-block ml-3 w-5 h-5 border-2 border-black rounded-full group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}