"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: "01",
    label: "Fintech App",
    title: "Nova Pay",
    description: "Redesigned the entire banking interface to enhance user retention, resulting in a 30% increase in daily active users.",
    tags: ["UI/UX", "Mobile App", "Strategy"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop", 
    link: "#",
  },
  {
    id: "02",
    label: "E-Commerce",
    title: "Luxe Cart",
    description: "Implemented advanced analytics and a bespoke checkout flow to boost conversion rates by 25% for a luxury fashion brand.",
    tags: ["Web Dev", "Shopify", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop", 
    link: "#",
  },
  {
    id: "03",
    label: "Rebranding",
    title: "Echo Systems",
    description: "Developed a cohesive brand identity and motion language that improved market visibility across all digital channels.",
    tags: ["Branding", "3D Motion", "Identity"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop", 
    link: "#",
  },
]

export function ProjectsSection() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={container} className="bg-[#050505] text-white pt-32 pb-12 relative" id="work">
      
      {/* Background Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      {/* --- Section Header --- */}
      <div className="container mx-auto px-4 mb-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
             <span className="w-12 h-px bg-[#CCFF00]" />
             <span className="text-[#CCFF00] font-mono tracking-widest uppercase text-sm">
               Selected Works
             </span>
             <span className="w-12 h-px bg-[#CCFF00]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Masterpieces</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            We don't just build websites; we craft digital experiences that merge art, technology, and strategic thinking.
          </motion.p>
        </div>
      </div>

      {/* --- Sticky Stacked Cards --- */}
      <div className="container mx-auto px-4 pb-24 w-full">
        {projects.map((project, i) => {
          // Calculate scale: The items further down the list scale down less
          const targetScale = 1 - (projects.length - i) * 0.05
          
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}

// --- Individual Card Component ---
interface CardProps {
  i: number
  title: string
  label: string
  description: string
  image: string
  tags: string[]
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

const Card = ({ i, title, label, description, image, tags, progress, range, targetScale }: CardProps) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  // Card Scaling Animation (The Stack Effect)
  const scale = useTransform(progress, range, [1, targetScale])
  
  // Parallax Image Animation (Image moves slower than container)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ 
          scale, 
          top: `calc(-5vh + ${i * 35}px)` // Staggered top position for stack look
        }}
        className="relative flex flex-col md:flex-row w-full max-w-[1200px] h-[65vh] min-h-[500px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#121212] shadow-2xl origin-top group"
      >
        
        {/* --- Left Content Side --- */}
        <div className="w-full md:w-[45%] p-8 md:p-14 flex flex-col justify-between relative z-20">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]" />
                  <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest">{label}</span>
               </div>
               <span className="text-gray-600 font-mono text-xl">0{i + 1}</span>
            </div>
            
            <h3 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] mb-6 text-white group-hover:text-[#CCFF00] transition-colors duration-500">
              {title}
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mb-8">
              {description}
            </p>

            {/* Tags Row */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-medium text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <button className="flex items-center gap-4 text-white hover:text-[#CCFF00] transition-all duration-300 group/btn">
              <span className="text-lg font-bold uppercase tracking-wider">View Case Study</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-transparent group-hover/btn:bg-[#CCFF00] group-hover/btn:border-[#CCFF00] group-hover/btn:text-black transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* --- Right Image Side (Parallax) --- */}
        <div className="w-full md:w-[55%] h-full relative overflow-hidden bg-neutral-900 border-l border-white/5">
          {/* Overlay to darken image slightly */}
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
          
          <motion.div 
            style={{ scale: imageScale, opacity: imageOpacity }}
            className="w-full h-full"
          >
             <Image 
                src={image} 
                alt={title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
             />
          </motion.div>
        </div>

      </motion.div>
    </div>
  )
}