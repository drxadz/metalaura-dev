"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Instagram, 
  ExternalLink, 
  Play, 
  Heart, 
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Users
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Mock Instagram data - replace with real API integration
const mockInstagramPosts = [
  {
    id: '1',
    media_type: 'IMAGE',
    media_url: '/images/hero-bg-1.jpeg',
    permalink: 'https://www.instagram.com/p/CyJI8u_vivq/',
    caption: 'Precision aluminum fabrication in progress. Every detail matters in our craft. #MetalWork #Aluminum #Precision',
    timestamp: '2024-01-15T10:30:00Z',
    like_count: 245,
    comments_count: 18
  },
  {
    id: '2',
    media_type: 'VIDEO',
    media_url: 'https://www.instagram.com/reel/C6l76PjvcsO/',
    thumbnail_url: '/images/hero-bg-2.jpeg',
    permalink: 'https://www.instagram.com/reel/C6l76PjvcsO/',
    caption: 'Watch our master craftsmen shape aluminum into architectural beauty. Process video!',
    timestamp: '2024-01-14T15:45:00Z',
    like_count: 312,
    comments_count: 24
  },
  {
    id: '3',
    media_type: 'IMAGE',
    media_url: '/images/hero-bg-3.jpeg',
    permalink: 'https://www.instagram.com/p/CyJI27jvvCU/',
    caption: 'Modern office facade project completed! Sustainable and stunning aluminum architecture.',
    timestamp: '2024-01-13T09:15:00Z',
    like_count: 189,
    comments_count: 12
  },
  {
    id: '4',
    media_type: 'CAROUSEL_ALBUM',
    media_url: '/images/hero-bg-6.jpg',
    permalink: 'https://www.instagram.com/p/C0Ik-N4Pq6O/',
    caption: 'Behind the scenes: Custom aluminum railings from design to installation. Swipe to see the process!',
    timestamp: '2024-01-12T14:20:00Z',
    like_count: 156,
    comments_count: 8
  },
  {
    id: '5',
    media_type: 'VIDEO',
    media_url: 'https://www.instagram.com/reel/CyCmnI-v7eE/',
    thumbnail_url: '/images/hero-bg-5.jpeg',
    permalink: 'https://www.instagram.com/reel/CyCmnI-v7eE/',
    caption: 'Timelapse: 48 hours of precision welding condensed into 30 seconds. The art of aluminum fabrication.',
    timestamp: '2024-01-11T11:30:00Z',
    like_count: 278,
    comments_count: 19
  },
  {
    id: '6',
    media_type: 'IMAGE',
    media_url: '/images/hero-bg-7.jpg',
    permalink: 'https://www.instagram.com/p/DDU_8dXTwDD/',
    caption: 'Custom aluminum railings installed at the new downtown office complex. #MetalWork #CustomDesign',
    timestamp: '2024-01-10T16:45:00Z',
    like_count: 203,
    comments_count: 15
  },
  {
    id: 'C6l76PjvcsO',
    media_type: 'VIDEO',
    media_url: 'https://www.instagram.com/reel/C6l76PjvcsO/',
    thumbnail_url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/reel/C6l76PjvcsO/',
    caption: 'Watch our latest aluminum fabrication process in action! #MetalWork #Craftsmanship',
    timestamp: '2024-06-01T10:00:00Z',
    like_count: 14,
    comments_count: 2
  }
]

export default function InstagramSection() {
  const [posts, setPosts] = useState<typeof mockInstagramPosts>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    // Simulate API call to Instagram Basic Display API
    const fetchInstagramPosts = async () => {
      console.log("Fetching Instagram posts...")
      setIsLoading(true)
      
      try {
        // In real implementation, this would be:
        // const response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption,timestamp,permalink,thumbnail_url&access_token=${accessToken}`)
        // const data = await response.json()
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        setPosts(mockInstagramPosts)
        console.log("Instagram posts loaded:", mockInstagramPosts.length, "posts")
      } catch (error) {
        console.error("Error fetching Instagram posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchInstagramPosts()

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Instagram section visible, triggering animations")
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

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'VIDEO':
        return <Play className="w-6 h-6" />
      case 'CAROUSEL_ALBUM':
        return <div className="flex space-x-1">
          <div className="w-2 h-2 bg-current rounded-full" />
          <div className="w-2 h-2 bg-current rounded-full" />
          <div className="w-2 h-2 bg-current rounded-full" />
        </div>
      default:
        return null
    }
  }

  const handlePostClick = (post: typeof mockInstagramPosts[0]) => {
    console.log(`Opening Instagram post: ${post.id}`)
    // Ensure the permalink is properly formatted
    const permalink = post.permalink.trim()
    if (permalink) {
      window.open(permalink, '_blank', 'noopener,noreferrer')
    } else {
      console.error('Invalid permalink for post:', post.id)
    }
  }

  const handleFollowClick = () => {
    console.log("Follow us on Instagram clicked")
    window.open('https://www.instagram.com/menma_metals/', '_blank')
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
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
            <Instagram className="w-5 h-5 text-pink-500" />
            <span className="text-dark-graphite font-inter font-medium">Follow Our Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient mb-6">
            Behind the Scenes
            <br />
            <span className="text-metallic-blue">@metalaura</span>
          </h2>

          <p className="text-xl text-dark-graphite/80 font-inter max-w-3xl mx-auto leading-relaxed">
            Get an inside look at our aluminum fabrication process, latest projects, 
            and the craftsmanship that goes into every piece we create.
          </p>
        </div>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-metallic-blue border-t-transparent rounded-full"
                />
                <span className="text-dark-graphite font-inter">Loading Instagram feed...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instagram Feed */}
        <AnimatePresence>
          {!isLoading && posts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="scroll-reveal"
            >
              {/* Desktop Grid View */}
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
                {posts.map((post) =>
                  post.id === 'C6l76PjvcsO' ? (
                    <div key={post.id} className="instagram-embed" style={{ maxWidth: 400, margin: '0 auto' }}>
                      <iframe
                        src="https://www.instagram.com/reel/C6l76PjvcsO/embed"
                        width="400"
                        height="480"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency={true}
                        allow="encrypted-media"
                        title="Instagram Reel"
                        style={{ borderRadius: 12, width: '100%', minHeight: 480 }}
                      ></iframe>
                    </div>
                  ) : (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => handlePostClick(post)}
                    >
                      <Card className="glass-card border-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative aspect-square overflow-hidden">
                            <img
                              src={post.media_type === 'VIDEO' || post.media_type === 'CAROUSEL_ALBUM' ? 
                                (post.thumbnail_url || post.media_url) : 
                                post.media_url}
                              alt="Instagram post"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                // Fallback image if the original fails to load
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=1000&auto=format&fit=crop';
                              }}
                            />
                            
                            {getMediaIcon(post.media_type) && (
                              <div className="absolute top-3 right-3 w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm">
                                {getMediaIcon(post.media_type)}
                              </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <div className="flex items-center gap-4 mb-2 text-sm">
                                <div className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  <span>{post.like_count}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{post.comments_count}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="p-4">
                            <p className="text-dark-graphite/80 font-inter text-sm line-clamp-2 mb-2">
                              {post.caption}
                            </p>
                            <span className="text-xs text-dark-graphite/60">
                              {formatTimeAgo(post.timestamp)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                )}
              </div>

              {/* Mobile Slider View */}
              <div className="md:hidden mb-12">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1.2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  breakpoints={{
                    480: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                  }}
                  onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                  className="pb-12"
                >
                  {posts.map((post, index) => (
                    <SwiperSlide key={post.id}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                        onClick={() => handlePostClick(post)}
                      >
                        <Card className="glass-card border-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-0">
                            <div className="relative aspect-square overflow-hidden">
                              <img
                                src={post.media_type === 'VIDEO' || post.media_type === 'CAROUSEL_ALBUM' ? 
                                  (post.thumbnail_url || post.media_url) : 
                                  post.media_url}
                                alt="Instagram post"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  // Fallback image if the original fails to load
                                  e.currentTarget.src = 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=1000&auto=format&fit=crop';
                                }}
                              />
                              
                              {getMediaIcon(post.media_type) && (
                                <div className="absolute top-3 right-3 w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm">
                                  {getMediaIcon(post.media_type)}
                                </div>
                              )}

                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              
                              <div className="absolute bottom-3 left-3 right-3 text-white">
                                <div className="flex items-center gap-4 mb-2 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Heart className="w-4 h-4" />
                                    <span>{post.like_count}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{post.comments_count}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="p-4">
                              <p className="text-dark-graphite/80 font-inter text-sm line-clamp-2 mb-2">
                                {post.caption}
                              </p>
                              <span className="text-xs text-dark-graphite/60">
                                {formatTimeAgo(post.timestamp)}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Follow CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <Card className="glass-card border-0 inline-block">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                        <Instagram className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-orbitron font-bold text-gradient">
                          @metalaura
                        </h3>
                        <p className="text-dark-graphite/80 font-inter">
                          Follow for daily updates
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-dark-graphite/80 font-inter mb-6 max-w-md">
                      Join our community and get exclusive behind-the-scenes content, 
                      project updates, and fabrication tips.
                    </p>
                    
                    <Button
                      onClick={handleFollowClick}
                      className="glass-button bg-gradient-to-r from-pink-500/20 to-purple-600/20 hover:from-pink-500/30 hover:to-purple-600/30 text-lg px-8 py-6 group border-2 border-pink-500/30"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Follow us on Instagram
                      <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}