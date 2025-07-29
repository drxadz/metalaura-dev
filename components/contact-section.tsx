"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  Calendar,
  MessageCircle
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Contact section visible, triggering animations")
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    console.log(`Contact form field changed: ${name} = ${value}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Contact form submitted:", formData);

    try {
      const response = await fetch('/api/send-quote-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Your message has been sent to our team. We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          timeline: ''
        });
      } else {
        toast({
          title: "Error Sending Message",
          description: result.message || "There was an error sending your message. Please try again or contact us directly.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 919995282885"],
      action: "tel:+919995282885",
      buttonText: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 919995282885"],
      action: "https://wa.me/919995282885",
      buttonText: "Chat on WhatsApp"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@metalaura.com", "quotes@metalaura.com"],
      action: "mailto:info@metalaura.com",
      buttonText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["1234 Industrial Ave", "MetroCity, MC 12345"],
      action: "https://maps.google.com",
      buttonText: "Get Directions"
    }
  ]

  const services = [
    "Custom Fabrication",
    "Design & Engineering", 
    "Installation Services",
    "Maintenance & Support",
    "Emergency Repairs",
    "Consultation"
  ]

  const timelines = [
    "ASAP - Rush Job",
    "Within 1 week",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months"
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-metallic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-silver-mist/10 rounded-full blur-3xl" />
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
            <MessageSquare className="w-5 h-5 text-metallic-blue" />
            <span className="text-dark-graphite font-inter font-medium">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Start Your
            <br />
            <span className="text-metallic-blue">Project Today</span>
          </h2>

          <p className="text-xl text-dark-graphite/80 font-inter max-w-3xl mx-auto leading-relaxed">
            Ready to bring your aluminum fabrication project to life? Contact our expert team 
            for a free consultation and personalized quote.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 scroll-reveal">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card border-0 h-full group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 glass-card mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-metallic-blue" />
                  </div>
                  <h3 className="text-lg font-orbitron font-bold text-dark-graphite mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-dark-graphite/80 font-inter text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-metallic-blue hover:bg-metallic-blue/20 flex items-center gap-2"
                      onClick={() => {
                        console.log(`Contact action clicked: ${info.title}`)
                        if (info.action!.startsWith('http')) {
                          window.open(info.action!, '_blank')
                        } else {
                          window.location.href = info.action!
                        }
                      }}
                    >
                      {info.icon === MessageCircle ? (
                        <MessageCircle className="w-4 h-4" />
                      ) : info.icon === Phone ? (
                        <Phone className="w-4 h-4" />
                      ) : info.icon === Mail ? (
                        <Mail className="w-4 h-4" />
                      ) : (
                        <MapPin className="w-4 h-4" />
                      )}
                      {info.buttonText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 scroll-reveal"
          >
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-orbitron font-bold text-gradient mb-6">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2 text-dark-graphite font-inter font-medium">
                        <User className="w-4 h-4 text-metallic-blue" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        required
                        className="glass-card border-white/30 bg-white/10 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-dark-graphite font-inter font-medium">
                        <Mail className="w-4 h-4 text-metallic-blue" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="glass-card border-white/30 bg-white/10 h-12"
                      />
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2 text-dark-graphite font-inter font-medium">
                        <Building className="w-4 h-4 text-metallic-blue" />
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="glass-card border-white/30 bg-white/10 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2 text-dark-graphite font-inter font-medium">
                        <Phone className="w-4 h-4 text-metallic-blue" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="glass-card border-white/30 bg-white/10 h-12"
                      />
                    </div>
                  </div>

                  {/* Subject and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-dark-graphite font-inter font-medium">
                        Service Needed *
                      </Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full glass-card border-white/30 bg-white/10 h-12 px-3 rounded-lg text-dark-graphite focus:border-metallic-blue focus:ring-metallic-blue/20"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="flex items-center gap-2 text-dark-graphite font-inter font-medium">
                        <Calendar className="w-4 h-4 text-metallic-blue" />
                        Project Timeline
                      </Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full glass-card border-white/30 bg-white/10 h-12 px-3 rounded-lg text-dark-graphite focus:border-metallic-blue focus:ring-metallic-blue/20"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2 text-dark-graphite font-inter font-medium">
                      <MessageSquare className="w-4 h-4 text-metallic-blue" />
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project requirements, specifications, dimensions, materials, or any other relevant details..."
                      required
                      rows={6}
                      className="glass-card border-white/30 bg-white/10 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass-button bg-metallic-blue/20 hover:bg-metallic-blue/30 text-lg py-6 group"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 scroll-reveal"
          >
            {/* 3D Map Placeholder */}
            <Card className="glass-card border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-metallic-blue/20 to-silver-mist/20 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-metallic-blue mx-auto mb-4" />
                      <h4 className="text-lg font-orbitron font-bold text-dark-graphite mb-2">
                        Visit Our Facility
                      </h4>
                      <p className="text-dark-graphite/80 font-inter text-sm">
                        1234 Industrial Avenue<br />
                        MetroCity, MC 12345
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 glass-button border-metallic-blue/30"
                        onClick={() => {
                          console.log("Get directions clicked")
                          window.open('https://maps.google.com', '_blank')
                        }}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-metallic-blue/20 rounded-full blur-xl" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-orbitron font-bold text-dark-graphite mb-4">
                  Need Immediate Assistance?
                </h4>
                <p className="text-dark-graphite/80 font-inter mb-4 text-sm">
                  For urgent inquiries or emergency services, contact us directly:
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full glass-button bg-metallic-blue/20 hover:bg-metallic-blue/30 flex items-center justify-center gap-2"
                    onClick={() => {
                      console.log("Emergency call clicked")
                      window.location.href = 'tel:+919995282885'
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: +91 919995282885
                  </Button>
                  <Button
                    className="w-full glass-button bg-green-500/20 hover:bg-green-500/30 flex items-center justify-center gap-2"
                    onClick={() => {
                      console.log("WhatsApp clicked")
                      window.open('https://wa.me/919995282885', '_blank')
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full glass-button border-metallic-blue/30"
                    onClick={() => {
                      console.log("Emergency email clicked")
                      window.location.href = 'mailto:emergency@metalaura.com'
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Emergency Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}