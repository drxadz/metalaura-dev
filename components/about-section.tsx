"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Target, 
  Users, 
  Trophy, 
  Lightbulb,
  Calendar,
  MapPin,
  CheckCircle
} from 'lucide-react'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("About section visible, triggering animations")
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

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every cut, every weld, every finish meets the highest standards of accuracy and quality.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients as partners, ensuring your vision becomes reality.",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Award-winning craftsmanship and industry recognition for outstanding quality.",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge techniques and materials to deliver innovative aluminum solutions.",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ]

  const timeline = [
    { year: "2010", event: "Company Founded", description: "Started with a vision to revolutionize aluminum fabrication" },
    { year: "2015", event: "First Major Contract", description: "Completed our first large-scale commercial project" },
    { year: "2018", event: "Team Expansion", description: "Grew to 25+ skilled craftsmen and engineers" },
    { year: "2020", event: "Technology Upgrade", description: "Invested in state-of-the-art CNC and 3D modeling equipment" },
    { year: "2023", event: "500+ Projects", description: "Reached milestone of 500 completed projects" },
    { year: "2024", event: "Sustainability Focus", description: "Launched eco-friendly aluminum recycling program" }
  ]

  const achievements = [
    "15+ Years of Excellence",
    "500+ Successful Projects",
    "99% Client Satisfaction Rate",
    "ISO 9001:2015 Certified",
    "Award-Winning Team"
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-metallic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-silver-mist/10 rounded-full blur-3xl" />
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
            <Users className="w-5 h-5 text-metallic-blue" />
            <span className="text-dark-graphite font-inter font-medium">About MetaLaura</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Crafting Excellence
            <br />
            <span className="text-metallic-blue">Since 2010</span>
          </h2>

          <p className="text-xl text-dark-graphite/80 font-inter max-w-4xl mx-auto leading-relaxed">
            For over a decade, MetaLaura has been at the forefront of aluminum fabrication, 
            combining traditional craftsmanship with cutting-edge technology to deliver 
            exceptional results that exceed expectations.
          </p>
        </div>

        {/* Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <Card className="glass-card h-full border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-metallic-blue" />
                  <h3 className="text-2xl font-orbitron font-bold text-dark-graphite">
                    Our Story
                  </h3>
                </div>
                <p className="text-dark-graphite/80 font-inter leading-relaxed mb-6">
                  Founded in 2010 by master craftsmen with a shared vision of excellence, 
                  MetaLaura has grown from a small workshop to a leading aluminum fabrication 
                  company. Our journey has been defined by innovation, quality, and an 
                  unwavering commitment to our clients.
                </p>
                <p className="text-dark-graphite/80 font-inter leading-relaxed">
                  Today, we combine decades of traditional metalworking expertise with 
                  state-of-the-art technology to create solutions that are both beautiful 
                  and functional. Every project is a testament to our dedication to 
                  craftsmanship and precision.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <Card className="glass-card h-full border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-metallic-blue" />
                  <h3 className="text-2xl font-orbitron font-bold text-dark-graphite">
                    Our Mission
                  </h3>
                </div>
                <p className="text-dark-graphite/80 font-inter leading-relaxed mb-6">
                  To transform aluminum into exceptional works of art and function, 
                  delivering solutions that not only meet but exceed our clients' 
                  expectations through innovation, precision, and uncompromising quality.
                </p>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-metallic-blue flex-shrink-0" />
                      <span className="text-dark-graphite font-inter">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20 scroll-reveal">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="glass-card border-0 h-full overflow-hidden hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${value.color} p-6 relative overflow-hidden`}>
                      <div className={`w-12 h-12 glass-card flex items-center justify-center mb-4`}>
                        <value.icon className="w-6 h-6 text-metallic-blue" />
                      </div>
                      <h4 className="text-xl font-orbitron font-bold text-dark-graphite mb-3">
                        {value.title}
                      </h4>
                      <p className="text-dark-graphite/80 font-inter text-sm leading-relaxed">
                        {value.description}
                      </p>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="scroll-reveal">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-metallic-blue/20 via-metallic-blue/40 to-metallic-blue/20"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-metallic-blue rounded-full border-4 border-marble z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="glass-card border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-metallic-blue" />
                          <span className="text-metallic-blue font-orbitron font-bold text-lg">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-orbitron font-bold text-dark-graphite mb-2">
                          {item.event}
                        </h4>
                        <p className="text-dark-graphite/80 font-inter">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}