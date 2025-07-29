"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

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

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mb-4"
          >
            About MetaLaura
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Crafting Excellence Since 2010
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, MetaLaura has been at the forefront of aluminum fabrication, 
            combining traditional craftsmanship with cutting-edge technology to deliver 
            exceptional results that exceed expectations.
          </p>
        </div>

        {/* Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Our Story
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded in 2010 by master craftsmen with a shared vision of excellence, 
                  MetaLaura has grown from a small workshop to a leading aluminum fabrication 
                  company. Our journey has been defined by innovation, quality, and an 
                  unwavering commitment to our clients.
                </p>
                <p className="text-gray-600 leading-relaxed">
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
            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  To transform aluminum into exceptional works of art and function, 
                  delivering solutions that not only meet but exceed our clients' 
                  expectations through innovation, precision, and uncompromising quality.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600">15+ Years of Excellence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600">500+ Successful Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600">99% Client Satisfaction Rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600">ISO 9001:2015 Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Precision", description: "Every cut, every weld, every finish meets the highest standards of accuracy and quality." },
              { title: "Partnership", description: "We work closely with our clients as partners, ensuring your vision becomes reality." },
              { title: "Excellence", description: "Award-winning craftsmanship and industry recognition for outstanding quality." },
              { title: "Innovation", description: "Cutting-edge techniques and materials to deliver innovative aluminum solutions." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-xl font-light text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="scroll-reveal">
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="space-y-8">
            {[
              { year: "2010", event: "Company Founded", description: "Started with a vision to revolutionize aluminum fabrication" },
              { year: "2015", event: "First Major Contract", description: "Completed our first large-scale commercial project" },
              { year: "2018", event: "Team Expansion", description: "Grew to 25+ skilled craftsmen and engineers" },
              { year: "2020", event: "Technology Upgrade", description: "Invested in state-of-the-art CNC and 3D modeling equipment" },
              { year: "2023", event: "500+ Projects", description: "Reached milestone of 500 completed projects" },
              { year: "2024", event: "Sustainability Focus", description: "Launched eco-friendly aluminum recycling program" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="w-16 text-right">
                  <span className="text-gray-900 font-medium">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    {item.event}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}