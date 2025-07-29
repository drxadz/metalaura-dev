"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FolderOpen, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Filter,
  Grid3X3,
  List,
  Eye,
  Award
} from 'lucide-react'

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Projects section visible, triggering animations")
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Architectural']
  
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex Facade",
      category: "Commercial",
      location: "Downtown Metro",
      year: "2024",
      description: "Complete aluminum facade system with integrated solar panels and ventilation for a 20-story office building.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      features: ["Solar Integration", "Energy Efficient", "Weather Resistant", "Modern Design"],
      award: "Best Commercial Project 2024"
    },
    {
      id: 2,
      title: "Luxury Residential Railings",
      category: "Residential",
      location: "Beverly Hills",
      year: "2024",
      description: "Custom-designed aluminum railings with glass panels for a modern luxury home with panoramic views.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      features: ["Custom Design", "Glass Integration", "Corrosion Resistant", "Premium Finish"],
      award: null
    },
    {
      id: 5,
      title: "Shopping Mall Atrium",
      category: "Architectural",
      location: "City Center",
      year: "2023",
      description: "Stunning aluminum and glass atrium with integrated lighting and climate control systems, creating a modern and inviting space for shoppers.",
      image: "/images/projects/project1.jpg",
      features: ["Glass Integration", "LED Lighting", "Climate Control", "Aesthetic Design"],
      award: null
    },
    {
      id: 6,
      title: "Residential Window Systems",
      category: "Residential",
      location: "Suburban Community",
      year: "2024",
      description: "Energy-efficient aluminum window systems for a 50-unit residential development.",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
      features: ["Energy Efficient", "Noise Reduction", "Security Features", "Low Maintenance"],
      award: null
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  console.log("Projects section rendered, selected category:", selectedCategory, "view mode:", viewMode)

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-metallic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-silver-mist/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6"
          >
            <FolderOpen className="w-5 h-5 text-metallic-blue" />
            <span className="text-dark-graphite font-inter font-medium">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Featured
            <br />
            <span className="text-metallic-blue">Projects</span>
          </h2>

          <p className="text-xl text-dark-graphite/80 font-inter max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional aluminum fabrication projects, 
            each showcasing our commitment to quality, innovation, and craftsmanship.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 scroll-reveal">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`glass-button transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-metallic-blue/30 text-dark-graphite border-metallic-blue/40' 
                    : 'border-white/30 hover:bg-white/20'
                }`}
                onClick={() => {
                  setSelectedCategory(category)
                  console.log(`Category filter changed to: ${category}`)
                }}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 glass-card p-1">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-metallic-blue/20' : ''
              }`}
              onClick={() => {
                setViewMode('grid')
                console.log("View mode changed to grid")
              }}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`transition-all duration-300 ${
                viewMode === 'list' ? 'bg-metallic-blue/20' : ''
              }`}
              onClick={() => {
                setViewMode('list')
                console.log("View mode changed to list")
              }}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-8"
            }
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="scroll-reveal"
              >
                <Card className={`group glass-card border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full ${
                  viewMode === 'list' ? 'md:flex md:h-auto' : ''
                }`}>
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'md:w-1/3' : 'aspect-[4/3]'
                    }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* View Button */}
                      <Button
                        size="sm"
                        className="absolute bottom-4 right-4 glass-button opacity-0 group-hover:opacity-100 transition-all duration-300"
                        onClick={() => {
                          setSelectedProject(project.id)
                          console.log(`Project ${project.id} details viewed`)
                        }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>

                    {/* Project Info */}
                    <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-metallic-blue/20 text-metallic-blue rounded-full text-xs font-inter font-medium">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-orbitron font-bold text-dark-graphite mb-3 group-hover:text-metallic-blue transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-dark-graphite/80 font-inter mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-dark-graphite/70 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-white/10 text-dark-graphite rounded text-xs font-inter"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="px-2 py-1 bg-white/10 text-dark-graphite/70 rounded text-xs font-inter">
                              +{project.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="glass-button border-metallic-blue/30 hover:bg-metallic-blue/20 w-full group/btn"
                        onClick={() => console.log(`View full project details: ${project.title}`)}
                      >
                        View Project Details
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 scroll-reveal"
        >
          <Button
            className="glass-button bg-metallic-blue/20 hover:bg-metallic-blue/30 text-lg px-8 py-6"
            onClick={() => window.location.href = '/portfolio'}
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}