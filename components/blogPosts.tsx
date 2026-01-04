"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web: Why Headless CMS is Taking Over",
    excerpt: "Traditional monoliths are dying. Discover how separating your backend from your frontend can 10x your site performance.",
    category: "Development",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Dark Mode Design in 2025",
    category: "Design",
    date: "Oct 08, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "SEO Strategies that Actually Work for SaaS",
    category: "Marketing",
    date: "Sep 29, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "The Psychology of Color in Conversion Rates",
    category: "Strategy",
    date: "Sep 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
]

export function BlogSection() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

  return (
    // Responsive Padding: py-16 on mobile, py-24 on desktop
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden" id="blog">
      
      {/* Background Ambience - Adjusted size for mobile */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CCFF00]/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- Header --- */}
        {/* Items alignment: start on mobile, end on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-0">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <span className="w-8 h-px bg-[#CCFF00]" />
              <span className="text-[#CCFF00] font-mono text-xs md:text-sm tracking-widest uppercase">
                News & Insights
              </span>
            </div>
            {/* Responsive Typography */}
            <h2 className="font-oswald text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9]">
              Latest <span className="text-gray-500">Thinking</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-white text-sm md:text-base border-b border-[#CCFF00] pb-1 hover:text-[#CCFF00] transition-colors"
          >
            View All Articles 
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Featured Post (Big Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // Responsive Height: 400px on mobile, 600px on desktop
            className="lg:col-span-7 group relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0 w-full h-full">
               <Image 
                 src={featuredPost!.image} 
                 alt={featuredPost!.title} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            {/* Content Overlay */}
            {/* Responsive Padding: p-6 on mobile, p-12 on desktop */}
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-12">
               {/* Meta Badges */}
               <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="px-3 py-1 bg-[#CCFF00] text-black text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                    Featured
                  </span>
                  <span className="flex items-center gap-2 text-gray-300 text-xs md:text-sm backdrop-blur-md bg-white/10 px-3 py-1 rounded-full">
                     <Calendar size={12} className="md:w-[14px] md:h-[14px]" /> {featuredPost!.date}
                  </span>
                  <span className="hidden sm:flex items-center gap-2 text-gray-300 text-xs md:text-sm backdrop-blur-md bg-white/10 px-3 py-1 rounded-full">
                     <Clock size={12} className="md:w-[14px] md:h-[14px]" /> {featuredPost!.readTime}
                  </span>
               </div>

               <h3 className="font-oswald text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase leading-tight mb-2 md:mb-4 group-hover:text-[#CCFF00] transition-colors">
                  {featuredPost!.title}
               </h3>
               <p className="text-gray-300 text-sm md:text-lg max-w-xl line-clamp-2 mb-4 md:mb-6 group-hover:text-white transition-colors">
                  {featuredPost!.excerpt}
               </p>

               <div className="flex items-center gap-2 text-[#CCFF00] font-bold uppercase tracking-wider text-xs md:text-sm opacity-100 lg:opacity-0 transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                  Read Article <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Recent Posts List */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            {otherPosts.map((post, index) => (
               <motion.div 
                 key={post.id}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 // Layout: Flex for row layout on all devices
                 className="group flex gap-4 md:gap-5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all cursor-pointer items-start"
               >
                 {/* Thumbnail - Responsive Size */}
                 <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 shrink-0 rounded-lg md:rounded-xl overflow-hidden bg-gray-800">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                 </div>

                 {/* Content */}
                 <div className="flex flex-col h-full justify-between py-1">
                    <div>
                        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                           <span className="text-[#CCFF00] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                              {post.category}
                           </span>
                           <span className="w-1 h-1 bg-gray-600 rounded-full" />
                           <span className="text-gray-500 text-[10px] md:text-xs">
                              {post.readTime}
                           </span>
                        </div>

                        <h4 className="font-oswald text-lg sm:text-xl md:text-2xl font-medium text-white uppercase leading-tight group-hover:text-[#CCFF00] transition-colors line-clamp-2 mb-2">
                           {post.title}
                        </h4>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-[10px] md:text-xs group-hover:text-white transition-colors">
                       <Calendar size={12} /> {post.date}
                    </div>
                 </div>
               </motion.div>
            ))}

            {/* Newsletter Mini-Box */}
            <div className="mt-4 md:mt-auto p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#121212] border border-dashed border-white/20 text-center">
               <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Want insights delivered to your inbox?</p>
               <button className="w-full py-2.5 md:py-3 bg-white text-black text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#CCFF00] transition-colors rounded-lg">
                  Subscribe Now
               </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}