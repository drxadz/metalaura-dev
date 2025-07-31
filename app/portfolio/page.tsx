"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  specs: {
    material: string
    finish: string
    railing: string
    height: string
    diameter?: string
    width?: string
    radius?: string
  }
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Spiral Staircase",
    category: "Residential",
    image: "/images/projects/project1.jpg",
    description: "A stunning spiral staircase featuring brushed aluminium construction with glass railings. This custom design seamlessly integrates with the modern interior, providing both functionality and aesthetic appeal.",
    specs: {
      material: "Brushed Aluminium",
      finish: "Matte",
      railing: "Tempered Glass",
      height: "3.2m",
      diameter: "2.1m"
    },
    features: ["Custom Design", "LED Integration", "Anti-slip Treads", "Sound Dampening"]
  },
  {
    id: 2,
    title: "Industrial Floating Stairs",
    category: "Commercial",
    image: "/images/projects/project2.jpg",
    description: "Industrial-style floating stairs with exposed aluminium framework. Perfect for modern office spaces and commercial environments, combining raw materials with refined execution.",
    specs: {
      material: "Raw Aluminium",
      finish: "Industrial",
      railing: "Cable System",
      height: "4.5m",
      width: "1.8m"
    },
    features: ["Floating Design", "Cable Railings", "Industrial Finish", "Load Bearing"]
  },
  {
    id: 3,
    title: "Luxury Curved Staircase",
    category: "Luxury",
    image: "/images/projects/project3.jpg",
    description: "An elegant curved staircase with premium aluminium construction and sophisticated lighting integration. This piece serves as the centerpiece of a luxury residential project.",
    specs: {
      material: "Premium Aluminium",
      finish: "Polished",
      railing: "Stainless Steel",
      height: "5.2m",
      radius: "3.8m"
    },
    features: ["Curved Design", "Premium Finish", "Integrated Lighting", "Custom Railings"]
  },
  {
    id: 4,
    title: "Minimalist Straight Stairs",
    category: "Modern",
    image: "/images/hero-bg-1.jpeg",
    description: "Clean, minimalist straight stairs with hidden aluminium framework. Perfect for contemporary homes seeking a seamless integration with modern interiors.",
    specs: {
      material: "Aluminium Frame",
      finish: "Powder Coated",
      railing: "Minimalist",
      height: "3.6m",
      width: "1.2m"
    },
    features: ["Hidden Framework", "Minimalist Design", "Powder Coated", "Easy Maintenance"]
  },
  {
    id: 5,
    title: "Outdoor Spiral Staircase",
    category: "Exterior",
    image: "/images/hero-bg-2.jpeg",
    description: "Weather-resistant outdoor spiral staircase designed for coastal environments. Features corrosion-resistant aluminium with specialized coatings for long-term durability.",
    specs: {
      material: "Marine Grade Aluminium",
      finish: "Corrosion Resistant",
      railing: "Stainless Steel",
      height: "4.8m",
      diameter: "2.4m"
    },
    features: ["Weather Resistant", "Marine Grade", "Anti-corrosion", "UV Protected"]
  },
  {
    id: 6,
    title: "Commercial Mezzanine Stairs",
    category: "Commercial",
    image: "/images/hero-bg-3.jpeg",
    description: "Heavy-duty commercial mezzanine stairs designed for high-traffic environments. Built to withstand industrial use while maintaining aesthetic appeal.",
    specs: {
      material: "Industrial Aluminium",
      finish: "Durable Coating",
      railing: "Industrial Grade",
      height: "6.2m",
      width: "2.4m"
    },
    features: ["Heavy Duty", "High Traffic", "Industrial Grade", "Safety Compliant"]
  }
]

const categories = ["All", "Residential", "Commercial", "Luxury", "Modern", "Exterior"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const handleBackToHome = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative py-16 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>

          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-white/60 text-sm font-light mb-6 tracking-wider">
              <div className="w-8 h-px bg-white/30"></div>
              <span>OUR WORK</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              <span className="text-white/90">Our</span>
              <br />
              <span className="text-white/80">Portfolio</span>
            </h1>
            
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Explore our collection of custom aluminium staircases, each crafted with precision 
              and designed to transform spaces with architectural elegance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-light transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group-hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div 
                        className="aspect-[4/3] bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-light">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-white font-light text-xl mb-3 group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 font-light text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs font-light"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 text-xs font-light">
                          View Details
                        </span>
                        <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-black border border-white/10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div 
                className="aspect-[16/9] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${selectedProject.image})`,
                  filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-light">
                  {selectedProject.category}
                </span>
              </div>
              
              <h2 className="text-white font-light text-3xl mb-4">
                {selectedProject.title}
              </h2>
              
              <p className="text-white/70 font-light mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Specifications */}
                <div>
                  <h4 className="text-white font-light text-lg mb-4">Specifications</h4>
                  <div className="space-y-3">
                    {Object.entries(selectedProject.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-white/60 font-light capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-white font-light">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div>
                  <h4 className="text-white font-light text-lg mb-4">Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-2 bg-white/10 text-white/70 rounded text-sm font-light"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button className="bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition-all duration-300">
                  Get Quote
                </Button>
                <Button variant="outline" className="border-white/30 text-white px-6 py-3 font-light hover:bg-white/10 transition-all duration-300">
                  View Similar
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
} 