"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  console.log("Navigation rendered, scrolled:", scrolled, "mobile menu open:", isOpen)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Quote', href: '#quote' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/menma_metals/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/adarsh.adz.91460/', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@metalaura.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919995282885', label: 'Phone' },
    { icon: MessageCircle, href: 'https://wa.me/919995282885', label: 'WhatsApp' }
  ]

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title - Always visible on mobile */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center">
                <span className="text-xl font-orbitron font-bold text-gradient">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-dark-graphite font-inter font-medium">
                  Premium Aluminum Fabrication Since 2010
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-graphite hover:text-metallic-blue transition-colors font-inter font-medium"
                  onClick={() => console.log(`Navigation clicked: ${item.name}`)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                className="glass-button text-dark-graphite font-inter font-semibold hover:text-metallic-blue"
                onClick={() => {
                  console.log("Get Quote button clicked")
                  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-card border-t border-white/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-dark-graphite hover:text-metallic-blue transition-colors duration-300 font-inter font-medium text-lg"
                    onClick={() => {
                      setIsOpen(false)
                      console.log(`Mobile navigation clicked: ${item.name}`)
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <Button 
                  className="w-full glass-button text-dark-graphite font-inter font-semibold mt-4"
                  onClick={() => {
                    setIsOpen(false)
                    console.log("Mobile Get Quote button clicked")
                    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating Social Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: link.label === 'Instagram' ? 'rgba(225, 48, 108, 0.9)' :
                               link.label === 'Facebook' ? 'rgba(66, 103, 178, 0.9)' :
                               link.label === 'WhatsApp' ? 'rgba(37, 211, 102, 0.9)' :
                               link.label === 'Phone' ? 'rgba(59, 130, 246, 0.9)' :
                               'rgba(255, 255, 255, 0.9)'
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-3 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 transition-all duration-300 group hover:border-transparent"
              onClick={() => console.log(`${link.label} clicked`)}
            >
              <link.icon className={`w-5 h-5 text-white/90 transition-colors duration-300
                ${link.label === 'Instagram' ? 'group-hover:text-white' :
                  link.label === 'Facebook' ? 'group-hover:text-white' :
                  link.label === 'WhatsApp' ? 'group-hover:text-white' :
                  link.label === 'Phone' ? 'group-hover:text-white' :
                  'group-hover:text-black'}`}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  )
}