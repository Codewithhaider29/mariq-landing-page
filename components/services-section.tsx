"use client"

import { motion, Variants } from "framer-motion"
import { Code, Megaphone, Zap, BarChart3, Palette, ArrowUpRight } from "lucide-react"

// Updated Data: Unified Theme
// Added 'col-span-12' default for mobile to ensure full width
const services = [
  {
    id: "01",
    title: "SEO Marketing",
    description: "Dominate search rankings with data-driven keyword strategies and technical optimization.",
    icon: BarChart3,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    id: "02",
    title: "Paid Advertising",
    description: "Maximize ROI with targeted campaigns on Google and Meta that convert clicks into customers.",
    icon: Megaphone,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    id: "03",
    title: "Social Growth",
    description: "Cultivate a loyal community with viral content strategies and consistent engagement.",
    icon: Zap,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    id: "04",
    title: "Brand Identity",
    description: "We craft your unique sonic and visual identity, from logo design to comprehensive brand guidelines.",
    icon: Palette,
    span: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    id: "05",
    title: "Web Development",
    description: "Blazing fast, SEO-optimized websites built with Next.js that serve as your 24/7 sales machine.",
    icon: Code,
    span: "col-span-12 md:col-span-12 lg:col-span-6", // Full width on tablet for emphasis
  },
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
}

export function ServicesSection() {
  return (
    // Changed py-24 to py-16 md:py-24 for better mobile spacing
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CCFF00]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- Header Section --- */}
        {/* Changed items-end to items-start md:items-end for better mobile reading flow */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#CCFF00] font-mono text-xs md:text-sm tracking-wider uppercase mb-2 block"
            >
              // What We Do
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Responsive text sizing: text-4xl -> text-7xl
              className="font-oswald text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9]"
            >
              Full Service <br />
              <span className="text-gray-500">Digital Agency</span>
            </motion.h2>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-xs md:text-right" // Align text right on desktop only
          >
             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
               We don't just deliver services; we deliver results. Our comprehensive suite of digital solutions is designed to scale your business.
             </p>
          </motion.div>
        </div>

        {/* --- Bento Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Adjusted margin for mobile trigger
          // Grid gap adjusted for mobile
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                // Height and Padding adjusted for mobile
                className={`${service.span} group relative overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-900/50 border border-white/5 p-6 md:p-8 flex flex-col justify-between h-full min-h-[260px] md:min-h-[300px] backdrop-blur-sm transition-all duration-500 hover:border-[#CCFF00]/50 hover:bg-neutral-900/80`}
              >
                {/* Visual Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

                {/* Top Section: Icon & Arrow */}
                <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] group-hover:scale-110">
                    <Icon size={24} className="text-white transition-colors duration-300 group-hover:text-black md:w-[28px] md:h-[28px]" />
                  </div>
                  
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 transition-all duration-500 group-hover:border-[#CCFF00] group-hover:text-[#CCFF00] group-hover:rotate-45">
                    <ArrowUpRight size={18} className="md:w-[20px] md:h-[20px]" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10">
                  <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 uppercase tracking-wide group-hover:text-[#CCFF00] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-full md:max-w-[90%] group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Background Decoration (Large Number) */}
                <span className="absolute -bottom-4 -right-2 md:-bottom-6 text-[6rem] md:text-[8rem] font-oswald font-bold text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-4 group-hover:text-white/[0.07]">
                  {service.id}
                </span>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
             <Button className="bg-transparent border border-[#CCFF00] text-[#CCFF00] hover:bg-[#CCFF00] hover:text-black rounded-full px-6 py-4 md:px-8 md:py-6 text-base md:text-lg transition-all duration-300 w-full sm:w-auto">
                View All Services
             </Button>
        </div>

      </div>
    </section>
  )
}

function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center justify-center font-medium ${className}`} {...props}>
      {children}
    </button>
  )
}