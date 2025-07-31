"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import ProjectModal from './project-modal'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const handleStartProject = () => {
    setIsProjectModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <span className="text-white font-light text-lg tracking-wider">METAL AURA</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Prominent Navigation Buttons */}
              <motion.button
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('used')}
                className="px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-light border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg"
              >
                Used
              </motion.button>
              <motion.button
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('materials')}
                className="px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-light border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg"
              >
                Materials
              </motion.button>
              <motion.button
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-light border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg"
              >
                Contact
              </motion.button>
              
              <Button
                onClick={handleStartProject}
                className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-white/90 transition-all duration-300"
              >
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => handleNavClick('used')}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors font-light py-2 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3"
                >
                  Used
                </button>
                <button
                  onClick={() => handleNavClick('materials')}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors font-light py-2 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3"
                >
                  Materials
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors font-light py-2 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3"
                >
                  Contact
                </button>
                
                <Button
                  onClick={handleStartProject}
                  className="w-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-all duration-300"
                >
                  Start Project
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
      />
    </>
  )
}