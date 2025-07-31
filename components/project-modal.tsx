"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, MessageCircle, Upload, Send } from 'lucide-react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in starting a project with Metalaura. Can you help me get started?"
    const whatsappUrl = `https://wa.me/919995282885?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    onClose()
    // Here you would typically send the form data to your backend
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-black border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-light text-white mb-2">
                  Let's Build Something Beautiful Together
                </h2>
                <p className="text-white/70 font-light">
                  Share your vision — we'll bring it to life with precision-crafted aluminium staircases and timeless interior design.
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-white/80 font-light text-sm mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/80 font-light text-sm mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-white/80 font-light text-sm mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-white/80 font-light text-sm mb-2">
                    Project Type *
                  </label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-white/40 focus:bg-white/10">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="aluminium-staircase" className="text-white hover:bg-white/10">
                        Aluminium Staircase
                      </SelectItem>
                      <SelectItem value="interior-design" className="text-white hover:bg-white/10">
                        Interior Design
                      </SelectItem>
                      <SelectItem value="both" className="text-white hover:bg-white/10">
                        Both
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="md:col-span-2">
                  <label className="block text-white/80 font-light text-sm mb-2">
                    Location *
                  </label>
                  <Input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10"
                    placeholder="Enter your city or area"
                    required
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-white/80 font-light text-sm mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 min-h-[120px]"
                    placeholder="Tell us about your idea..."
                    required
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-white/80 font-light text-sm mb-2">
                  Upload Sketch/Image (Optional)
                </label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-white/50 mx-auto mb-2" />
                  <p className="text-white/70 font-light text-sm">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-white/50 font-light text-xs mt-1">
                    PNG, JPG up to 10MB
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-white text-black px-8 py-4 font-medium hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Project
                    </div>
                  )}
                </Button>
                
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-white/30 text-white px-8 py-4 font-light hover:bg-white/10 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message on WhatsApp instead
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 