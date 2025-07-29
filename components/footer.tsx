"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Award,
  Shield,
  Clock,
  MessageCircle
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Custom Fabrication',
    'Design & Engineering',
    'Installation Services',
    'Maintenance & Support'
  ]

  const certifications = [
    { icon: Award, text: 'ISO 9001:2015 Certified' },
    { icon: Shield, text: '25-Year Warranty' },
    { icon: Clock, text: '15+ Years Experience' }
  ]

  const handleScrollToTop = () => {
    console.log("Scroll to top clicked")
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-marble via-soft-platinum to-silver-mist">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-metallic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-dark-graphite/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-silver-mist to-metallic-blue rounded-xl glass flex items-center justify-center">
                  <span className="text-2xl font-orbitron font-bold text-dark-graphite">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gradient">
                    METALAURA
                  </h3>
                  <p className="text-xs text-dark-graphite/70 font-inter">
                    Aluminum Fabrication
                  </p>
                </div>
              </div>
              
              <p className="text-dark-graphite/80 font-inter mb-6 leading-relaxed">
                Crafting excellence in aluminum fabrication since 2010. 
                We transform your vision into reality with precision, innovation, and unmatched quality.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <cert.icon className="w-4 h-4 text-metallic-blue flex-shrink-0" />
                    <span className="text-dark-graphite/80 font-inter text-sm">
                      {cert.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-orbitron font-bold text-dark-graphite mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-dark-graphite/80 hover:text-metallic-blue transition-colors duration-300 font-inter"
                      onClick={() => console.log(`Footer link clicked: ${link.name}`)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-orbitron font-bold text-dark-graphite mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-dark-graphite/80 font-inter">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-orbitron font-bold text-dark-graphite mb-6">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-metallic-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-dark-graphite/80 font-inter text-sm">
                      1234 Industrial Avenue<br />
                      MetroCity, MC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-metallic-blue flex-shrink-0" />
                  <a
                    href="tel:+919995282885"
                    className="text-dark-graphite/80 hover:text-metallic-blue transition-colors font-inter text-sm"
                    onClick={() => console.log("Footer phone clicked")}
                  >
                    +91 919995282885
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-metallic-blue flex-shrink-0" />
                  <a
                    href="https://wa.me/919995282885"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-graphite/80 hover:text-metallic-blue transition-colors font-inter text-sm"
                    onClick={() => console.log("Footer WhatsApp clicked")}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-metallic-blue flex-shrink-0" />
                  <a
                    href="mailto:info@metalaura.com"
                    className="text-dark-graphite/80 hover:text-metallic-blue transition-colors font-inter text-sm"
                    onClick={() => console.log("Footer email clicked")}
                  >
                    info@metalaura.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-card hover:bg-metallic-blue/20"
                  onClick={() => {
                    console.log("Facebook link clicked")
                    window.open('https://facebook.com/metalaura', '_blank')
                  }}
                >
                  <Facebook className="w-5 h-5 text-dark-graphite hover:text-metallic-blue" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-card hover:bg-metallic-blue/20"
                  onClick={() => {
                    console.log("Instagram link clicked")
                    window.open('https://instagram.com/metalaura', '_blank')
                  }}
                >
                  <Instagram className="w-5 h-5 text-dark-graphite hover:text-metallic-blue" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-card hover:bg-green-500/20"
                  onClick={() => {
                    console.log("WhatsApp link clicked")
                    window.open('https://wa.me/919995282885', '_blank')
                  }}
                >
                  <MessageCircle className="w-5 h-5 text-dark-graphite hover:text-green-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-card hover:bg-metallic-blue/20"
                  onClick={() => {
                    console.log("Email link clicked")
                    window.location.href = 'mailto:info@metalaura.com'
                  }}
                >
                  <Mail className="w-5 h-5 text-dark-graphite hover:text-metallic-blue" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <p className="text-dark-graphite/70 font-inter text-sm">
                  © {currentYear} MetaLaura. All rights reserved. 
                  <span className="ml-1">Built with precision and passion.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="flex gap-4 text-sm text-dark-graphite/70 font-inter">
                  <a
                    href="#"
                    className="hover:text-metallic-blue transition-colors"
                    onClick={() => console.log("Privacy Policy clicked")}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-metallic-blue transition-colors"
                    onClick={() => console.log("Terms clicked")}
                  >
                    Terms of Service
                  </a>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="relative overflow-visible group border-0 bg-gradient-to-br from-red-600/70 via-red-400/60 to-red-800/80 shadow-lg hover:from-red-500/90 hover:to-red-700/90 transition-all duration-300 backdrop-blur-md"
                  style={{ boxShadow: '0 0 24px 4px #ff003388, 0 0 60px 8px #ff003355' }}
                  onClick={handleScrollToTop}
                >
                  <span className="absolute inset-0 rounded-full blur-xl opacity-60 animate-pulse bg-gradient-to-br from-red-400/40 via-red-600/30 to-red-800/40 z-0" />
                  <ArrowUp 
                    className="w-8 h-8 z-10 relative text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 group-active:scale-90"
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}