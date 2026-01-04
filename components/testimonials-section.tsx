"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Startup",
    quote: "MARIQ transformed our digital presence. Our conversions increased by 200% in just 3 months. The strategy was flawless.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    quote: "The team is incredibly responsive and strategic. They truly understand our business goals and deliver beyond expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, SaaS Platform",
    quote: "Best investment we made for our marketing. The ROI has been exceptional from day one. Highly recommended.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "COO, Digital Agency",
    quote: "Professional, creative, and results-driven. They bridged the gap between design and function perfectly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    name: "Olivia Patel",
    role: "VP of Sales, FinTech",
    quote: "Their analytical approach to design is exactly what we needed. A game changer for our quarterly targets.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
]

// Duplicate data to ensure seamless loop
const allTestimonials = [...testimonials, ...testimonials, ...testimonials]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden relative border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* --- Header --- */}
      <div className="container mx-auto px-4 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
             <Star className="w-4 h-4 text-[#CCFF00] fill-[#CCFF00]" />
             <span className="text-[#CCFF00] font-mono text-sm tracking-widest uppercase">
               Client Feedback
             </span>
             <Star className="w-4 h-4 text-[#CCFF00] fill-[#CCFF00]" />
          </div>

          <h2 className="font-oswald text-5xl md:text-8xl font-bold text-white uppercase leading-[0.9] tracking-tighter mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Visionaries</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
             Don't just take our word for it. Here is what the industry leaders are saying about our impact.
          </p>
        </motion.div>
      </div>

      {/* --- Marquee Container --- */}
      <div className="relative w-full flex flex-col gap-8">
        
        {/* Side Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Moving Left */}
        <MarqueeRow items={allTestimonials} direction="left" speed={40} />
        
        {/* Row 2: Moving Right */}
        <MarqueeRow items={allTestimonials} direction="right" speed={50} />

      </div>
    </section>
  )
}

// --- Helper Components ---

const MarqueeRow = ({ items, direction, speed }: { items: typeof testimonials, direction: "left" | "right", speed: number }) => {
  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        className="flex gap-6 pl-6"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {items.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 bg-[#121212] border border-white/5 rounded-2xl p-8 hover:border-[#CCFF00]/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
      
      {/* Subtle Lime Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Quote Icon */}
      <div className="mb-6 flex justify-between items-start">
         <Quote className="text-[#CCFF00] w-10 h-10 opacity-20 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110" />
         
         {/* Stars */}
         <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#CCFF00] text-[#CCFF00]" />
            ))}
         </div>
      </div>

      {/* Text */}
      <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 relative z-10">
        "{testimonial.quote}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-auto relative z-10">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#CCFF00] transition-colors duration-300">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg leading-none mb-1 group-hover:text-[#CCFF00] transition-colors">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-xs font-mono uppercase tracking-wide">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )
}