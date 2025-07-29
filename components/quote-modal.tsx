"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  console.log("QuoteModal rendered, isOpen:", isOpen)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    console.log(`Form field changed: ${name} = ${value}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    console.log("Quote form submitted:", formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    onClose()
  }

  const inputFields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, placeholder: 'John Smith' },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, placeholder: 'john@example.com' },
    { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, placeholder: '+1 (555) 123-4567' }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass-card border-0 p-0 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-metallic-blue/20 to-silver-mist/20 p-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <DialogTitle className="text-3xl font-orbitron font-bold text-gradient mb-2">
                Get Your Quote
              </DialogTitle>
              <p className="text-dark-graphite/80 font-inter">
                Let's bring your aluminum fabrication project to life
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="glass-button w-10 h-10"
            >
              <X className="w-5 h-5" />
            </Button>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-metallic-blue/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-silver-mist/20 rounded-full blur-xl" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <Label 
                  htmlFor={field.name}
                  className="text-dark-graphite font-inter font-medium flex items-center gap-2"
                >
                  <field.icon className="w-4 h-4 text-metallic-blue" />
                  {field.label}
                </Label>
                <div className="relative">
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    required
                    className="glass-card border-white/30 bg-white/10 backdrop-blur-sm text-dark-graphite placeholder:text-dark-graphite/50 focus:border-metallic-blue focus:ring-metallic-blue/20 h-12"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <Label 
              htmlFor="message"
              className="text-dark-graphite font-inter font-medium flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-metallic-blue" />
              Project Details
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your aluminum fabrication project. Include dimensions, specifications, timeline, or any special requirements..."
              required
              rows={5}
              className="glass-card border-white/30 bg-white/10 backdrop-blur-sm text-dark-graphite placeholder:text-dark-graphite/50 focus:border-metallic-blue focus:ring-metallic-blue/20 resize-none"
            />
          </motion.div>

          {/* Project Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Label className="text-dark-graphite font-inter font-medium">
              Service Type (Select all that apply)
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Custom Fabrication', 'Design & Engineering', 'Installation', 'Maintenance'].map((service, index) => (
                <motion.button
                  key={service}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 text-sm text-dark-graphite hover:bg-metallic-blue/20 hover:text-metallic-blue transition-all duration-300 font-inter"
                  onClick={() => console.log(`Service selected: ${service}`)}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full glass-button bg-metallic-blue/20 hover:bg-metallic-blue/30 text-dark-graphite font-semibold text-lg py-6 group"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                />
              ) : (
                <>
                  Send Quote Request
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-4 border-t border-white/20"
          >
            <p className="text-sm text-dark-graphite/70 font-inter">
              We typically respond within 24 hours. For urgent requests, call us directly.
            </p>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  )
}