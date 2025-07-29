"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
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
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Architectural']
  
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex Facade",
      category: "Commercial",
      location: "Downtown Metro",
      year: "2024",
      description: "A state-of-the-art aluminum facade system for a 20-story office building, featuring integrated solar panels and advanced ventilation systems. The project showcases our expertise in large-scale commercial applications with a focus on sustainability and energy efficiency.",
      longDescription: "This landmark project represents a breakthrough in sustainable building design. The facade incorporates photovoltaic panels that generate 30% of the building's energy needs, while the innovative ventilation system reduces HVAC costs by 25%. The aluminum framework was custom-engineered to support the weight of the solar panels while maintaining structural integrity.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
      ],
      features: ["Solar Integration", "Energy Efficient", "Weather Resistant", "Modern Design"],
      specifications: {
        area: "25,000 sq ft",
        materials: "Premium Aluminum Alloy, Tempered Glass",
        completion: "6 months",
        sustainability: "LEED Platinum Certified"
      },
      challenges: "The main challenge was integrating the solar panels with the aluminum framework while maintaining the building's aesthetic appeal. We developed a custom mounting system that seamlessly blends with the facade design.",
      solutions: "Our team created a proprietary aluminum extrusion profile that serves both structural and aesthetic purposes, allowing for easy installation and maintenance of the solar panels."
    },
    {
      id: 2,
      title: "Luxury Residential Railings",
      category: "Residential",
      location: "Beverly Hills",
      year: "2024",
      description: "Custom-designed aluminum railings with glass panels for a modern luxury home, featuring panoramic views and seamless integration with the architectural design. The project demonstrates our ability to combine aesthetics with functionality.",
      longDescription: "This luxury residence required railings that would provide safety without compromising the stunning views. We designed a system that uses minimal aluminum framework with large glass panels, creating an almost invisible barrier that maintains the home's architectural integrity.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ],
      features: ["Custom Design", "Glass Integration", "Corrosion Resistant", "Premium Finish"],
      specifications: {
        length: "200 linear feet",
        materials: "Marine-grade Aluminum, Tempered Glass",
        finish: "Custom Anodized",
        warranty: "25 years"
      },
      challenges: "The main challenge was creating a railing system that would withstand coastal weather conditions while maintaining its aesthetic appeal.",
      solutions: "We used marine-grade aluminum with a custom anodized finish that provides superior corrosion resistance while maintaining the desired aesthetic."
    },
    {
      id: 3,
      title: "Industrial Storage Systems",
      category: "Industrial",
      location: "Manufacturing District",
      year: "2023",
      description: "Heavy-duty aluminum storage racks and conveyor systems for an automated warehouse facility, designed for maximum efficiency and durability. The project showcases our expertise in industrial applications.",
      longDescription: "This comprehensive storage solution includes custom-designed aluminum racks, automated conveyor systems, and specialized handling equipment. The system was designed to optimize space utilization while ensuring easy access to stored items.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop"
      ],
      features: ["Heavy Duty", "Automated Compatible", "Modular Design", "High Capacity"],
      specifications: {
        capacity: "50,000 kg per rack",
        automation: "Fully Automated",
        maintenance: "Low Maintenance Design",
        safety: "OSHA Compliant"
      },
      challenges: "The main challenge was designing a system that could handle heavy loads while maintaining flexibility for future modifications.",
      solutions: "We developed a modular system with standardized components that can be easily reconfigured as storage needs change."
    },
    {
      id: 4,
      title: "Airport Terminal Canopy",
      category: "Architectural",
      location: "International Airport",
      year: "2023",
      description: "Massive aluminum canopy structure providing weather protection for terminal entrance and passenger areas, combining architectural beauty with structural engineering excellence.",
      longDescription: "This iconic canopy structure spans the entire terminal entrance, providing shelter for passengers while creating a striking architectural feature. The design incorporates advanced engineering to withstand extreme weather conditions.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
      ],
      features: ["Large Span", "Weather Protection", "Architectural Beauty", "Structural Engineering"],
      specifications: {
        span: "150 meters",
        materials: "Aerospace-grade Aluminum",
        windLoad: "150 mph",
        snowLoad: "50 psf"
      },
      challenges: "The main challenge was creating a structure that could span such a large distance while maintaining its aesthetic appeal.",
      solutions: "We used aerospace-grade aluminum with a custom-designed support system that distributes loads efficiently while maintaining visual lightness."
    },
    {
      id: 5,
      title: "Shopping Mall Atrium",
      category: "Architectural",
      location: "City Center",
      year: "2023",
      description: "Stunning aluminum and glass atrium with integrated lighting and climate control systems, creating a modern and inviting space for shoppers.",
      longDescription: "This architectural masterpiece combines aluminum framework with glass panels to create a light-filled atrium that serves as the centerpiece of the shopping mall. The design incorporates advanced lighting and climate control systems.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
      ],
      features: ["Glass Integration", "LED Lighting", "Climate Control", "Aesthetic Design"],
      specifications: {
        height: "40 meters",
        materials: "Structural Aluminum, Laminated Glass",
        lighting: "LED Integration",
        climate: "Automated Control"
      },
      challenges: "The main challenge was creating a structure that would provide natural light while maintaining comfortable temperatures.",
      solutions: "We developed a system of automated louvers and integrated LED lighting that adjusts based on natural light levels and temperature."
    },
    {
      id: 6,
      title: "Residential Window Systems",
      category: "Residential",
      location: "Suburban Community",
      year: "2024",
      description: "Energy-efficient aluminum window systems for a 50-unit residential development, combining modern aesthetics with superior performance.",
      longDescription: "This comprehensive window system was designed for a new residential development, focusing on energy efficiency and noise reduction. The project demonstrates our ability to deliver large-scale residential solutions.",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop"
      ],
      features: ["Energy Efficient", "Noise Reduction", "Security Features", "Low Maintenance"],
      specifications: {
        units: "200 windows",
        materials: "Thermal Break Aluminum",
        glazing: "Double Glazed",
        efficiency: "U-value 1.1"
      },
      challenges: "The main challenge was creating a window system that would meet strict energy efficiency requirements while maintaining security and ease of use.",
      solutions: "We developed a custom thermal break system combined with advanced glazing that exceeds energy efficiency standards while providing superior security features."
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <main className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-metallic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-silver-mist/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 glass-button hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6"
          >
            <FolderOpen className="w-5 h-5 text-metallic-blue" />
            <span className="text-dark-graphite font-inter font-medium">Our Portfolio</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Our
            <br />
            <span className="text-metallic-blue">Projects</span>
          </h1>

          <p className="text-xl text-dark-graphite/80 font-inter max-w-3xl mx-auto leading-relaxed">
            Explore our extensive portfolio of aluminum fabrication projects, 
            showcasing our expertise and commitment to excellence.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
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
                onClick={() => setSelectedCategory(category)}
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
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`transition-all duration-300 ${
                viewMode === 'list' ? 'bg-metallic-blue/20' : ''
              }`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
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
                  </div>

                  {/* Project Info */}
                  <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
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

                      {/* Specifications */}
                      <div className="mb-4">
                        <h4 className="text-sm font-inter font-medium text-dark-graphite mb-2">Specifications:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(project.specifications).map(([key, value]) => (
                            <div key={key} className="text-xs text-dark-graphite/70">
                              <span className="font-medium">{key}:</span> {value}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-white/10 text-dark-graphite rounded text-xs font-inter"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Challenges & Solutions */}
                      <div className="mb-4">
                        <div className="text-xs text-dark-graphite/70">
                          <span className="font-medium">Challenge:</span> {project.challenges}
                        </div>
                        <div className="text-xs text-dark-graphite/70 mt-1">
                          <span className="font-medium">Solution:</span> {project.solutions}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
} 