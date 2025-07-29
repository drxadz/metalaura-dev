"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Wrench, 
  Ruler, 
  Hammer, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Award,
  ExternalLink
} from 'lucide-react'

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Services section visible, triggering animations")
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

  const services = [
    {
      icon: Wrench,
      title: "Custom Fabrication",
      description: "Precision-crafted aluminum components tailored to your exact specifications and requirements.",
      features: ["CAD Design Integration", "Precision Cutting", "Custom Welding", "Quality Assurance"],
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-600"
    },
    {
      icon: Ruler,
      title: "Design & Engineering",
      description: "Expert engineering services from concept to completion with structural analysis and optimization.",
      features: ["3D Modeling", "Structural Analysis", "Material Optimization", "Technical Documentation"],
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-600"
    },
    {
      icon: Hammer,
      title: "Installation Services",
      description: "Professional installation by certified technicians ensuring perfect fit and finish every time.",
      features: ["Site Assessment", "Professional Installation", "Safety Compliance", "Final Inspection"],
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-600"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance programs to keep your aluminum installations in perfect condition.",
      features: ["Regular Inspections", "Preventive Maintenance", "Repair Services", "25-Year Warranty"],
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600"
    }
  ]

  const stats = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: CheckCircle, value: "99%", label: "Client Satisfaction" }
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-metallic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-silver-mist/10 rounded-full blur-3xl" />
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
            <Wrench className="w-5 h-5 text-metallic-blue" />
            <span className="text-dark-graphite font-inter font-medium">Our Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Premium Aluminum
            <br />
            <span className="text-metallic-blue">Solutions</span>
          </h2>

          <p className="text-xl text-dark-graphite/80 font-inter max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional aluminum fabrication services 
            with unmatched precision and craftsmanship.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 scroll-reveal">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center glass-card p-8"
            >
              <stat.icon className="w-12 h-12 text-metallic-blue mx-auto mb-4" />
              <div className="text-4xl font-orbitron font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-dark-graphite/80 font-inter font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="scroll-reveal"
            >
              <Card className="group perspective-card glass-card border-0 h-full overflow-hidden hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 relative overflow-hidden`}>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className={`w-16 h-16 ${service.iconColor} mb-6 glass-card flex items-center justify-center`}>
                          <service.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold text-dark-graphite mb-4">
                          {service.title}
                        </h3>
                        <p className="text-dark-graphite/80 font-inter leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  </div>

                  {/* Features List */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-metallic-blue flex-shrink-0" />
                          <span className="text-dark-graphite font-inter">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button 
                      className="w-full glass-button group hover:bg-metallic-blue/20 transition-all duration-300"
                      onClick={() => console.log(`Learn more about ${service.title}`)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-card p-12 scroll-reveal"
        >
          <h3 className="text-3xl font-orbitron font-bold text-gradient mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-dark-graphite/80 font-inter mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your aluminum fabrication needs. 
            Our experts are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="glass-button bg-metallic-blue/20 hover:bg-metallic-blue/30 text-lg px-8 py-6 group"
              onClick={() => {
                console.log("Get Free Quote clicked from services")
                document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="glass-button text-lg px-8 py-6 border-2 border-metallic-blue/30 text-dark-graphite hover:bg-metallic-blue/10"
              onClick={() => {
                console.log("View Portfolio button clicked")
                window.location.href = '/portfolio'
              }}
            >
              View Portfolio
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}