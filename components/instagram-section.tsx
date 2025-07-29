"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Instagram, Play, ExternalLink } from 'lucide-react'

export default function InstagramSection() {
  const handleVideoClick = () => {
    window.open('https://www.instagram.com/reel/C6l76PjvcsO/', '_blank')
  }

  const handleFollowClick = () => {
    window.open('https://www.instagram.com/metalaura/', '_blank')
  }

  return (
    <section className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-white/60 text-sm font-light mb-8 tracking-wider">
            <div className="w-8 h-px bg-white/30"></div>
            <span>FOLLOW OUR JOURNEY</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Behind the Scenes
            <br />
            <span className="text-white/80">@metalaura</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Watch our latest aluminum fabrication process in action and see the craftsmanship 
            that goes into every project.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="relative group cursor-pointer" onClick={handleVideoClick}>
                <div className="aspect-[9/16] md:aspect-[16/9] relative overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop')`,
                      filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Instagram className="w-5 h-5 text-white/80" />
                      <span className="text-white/80 text-sm font-light">@metalaura</span>
                    </div>
                    <h3 className="text-white font-light text-lg mb-2">
                      Aluminum Fabrication Process
                    </h3>
                    <p className="text-white/70 text-sm font-light">
                      Watch our master craftsmen shape aluminum into architectural beauty
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-6">
              Follow for Daily Updates
            </h3>
            <p className="text-white/70 font-light mb-8 leading-relaxed">
              Join our community and get exclusive behind-the-scenes content, 
              project updates, and fabrication insights.
            </p>
            <Button
              onClick={handleFollowClick}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 text-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              <Instagram className="mr-2 w-5 h-5" />
              Follow @metalaura
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}