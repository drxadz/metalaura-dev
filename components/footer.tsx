"use client"

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'

export default function Footer() {
  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your aluminium staircase services."
    const whatsappUrl = `https://wa.me/919995282885?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <span className="text-white font-light text-xl tracking-wider">METAL AURA</span>
            </div>
            <p className="text-white/70 font-light leading-relaxed mb-6 max-w-md">
              Premium aluminium fabrication specialists crafting architectural staircases 
              with precision and design excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-light text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#materials" 
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  Materials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/70 hover:text-white transition-colors font-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-light text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/60 mt-0.5" />
                <div>
                  <a 
                    href="mailto:contact@metalaura.in" 
                    className="text-white/70 hover:text-white transition-colors font-light text-sm"
                  >
                    contact@metalaura.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/60 mt-0.5" />
                <div>
                  <a 
                    href="tel:+919995282885" 
                    className="text-white/70 hover:text-white transition-colors font-light text-sm"
                  >
                    +91 99952 82885
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5" />
                <div>
                  <p className="text-white/70 font-light text-sm">
                    Calicut, Kerala<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 font-light text-sm">
            © 2024 METAL AURA. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-light text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}