"use client"

import { ArrowRight, TrendingUp, Target, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

// --- 1. Background Grid Component ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
    <motion.div
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      className="w-full h-full"
      style={{
        backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
  </div>
)

// --- 2. Interactive Sticker (unchanged logic, applied layout classes later) ---
const InteractiveSticker = ({
  children,
  rotate = 0,
  top, left, right, bottom,
  className,
  delay = 0,
  icon: Icon
}: {
  children: React.ReactNode
  rotate?: number
  top?: string; left?: string; right?: string; bottom?: string
  className?: string
  delay?: number
  icon?: React.ElementType
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50, rotate: rotate - 10 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: rotate }}
      whileInView={{
        y: [0, -15, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: rotate + 5, 
        zIndex: 30,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
      }}
      transition={{ 
        type: "spring", stiffness: 200, damping: 20,
        opacity: { duration: 0.4, delay: delay * 0.2 }
      }}
      // Added 'hidden lg:flex' to show only on large screens, or 'md:flex' for tablets
      className={`absolute z-20 hidden lg:flex items-center gap-3 backdrop-blur-md border border-white/10 shadow-lg cursor-default ${className}`}
      style={{ top, left, right, bottom }}
    >
      {Icon && <Icon className="w-5 h-5 opacity-80" />}
      {children}
    </motion.div>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0, rotateX: -20 },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotateX: 0, 
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  }
}

export function HeroSection() {
  return (
    // Changed min-h to 100dvh for better mobile browser support
    <section className="min-h-[100dvh] bg-[#050505] py-20 relative overflow-hidden flex flex-col items-center justify-center">
      
      <BackgroundGrid />

      {/* --- Background Interactive Stickers (Visible only on Desktop/Large Tablets) --- */}
      <div className="absolute inset-0 max-w-[1600px] mx-auto pointer-events-none h-full w-full perspective-1000">
        <InteractiveSticker icon={Target} rotate={-12} top="15%" left="5%" delay={0} className="bg-[#FDE047] text-[#422006] px-4 py-2 md:px-5 md:py-3 rounded-2xl pointer-events-auto">
          <span className="font-bold text-sm md:text-lg uppercase tracking-wide">Strategy</span>
        </InteractiveSticker>

        <InteractiveSticker icon={TrendingUp} rotate={10} top="20%" right="8%" delay={0.2} className="bg-[#FFEDD5] text-[#9A3412] px-4 py-2 md:px-5 md:py-3 rounded-2xl pointer-events-auto">
          <span className="font-bold text-sm md:text-lg uppercase tracking-wide">Success</span>
        </InteractiveSticker>

        <InteractiveSticker icon={Megaphone} rotate={-8} bottom="15%" right="10%" delay={0.4} className="bg-[#E9D5FF] text-[#6B21A8] px-4 py-2 md:px-5 md:py-3 rounded-2xl pointer-events-auto">
          <span className="font-bold text-sm md:text-lg uppercase tracking-wide">Marketing</span>
        </InteractiveSticker>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center w-full">
        
        {/* Tagline */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="mb-4 md:mb-6 inline-block rounded-full border border-[#EF4444]/30 bg-[#EF4444]/10 px-3 py-1 md:px-4 md:py-1.5 backdrop-blur-sm"
        >
           <p className="text-[#EF4444] font-semibold tracking-wider text-[10px] sm:text-xs md:text-sm uppercase flex items-center gap-2">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF4444]"></span>
             </span>
             #1 Digital Marketing Agency
           </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // Responsive Font Sizes: Uses VW for fluid scaling on mobile, capped at max sizes
          className="font-oswald text-[13vw] sm:text-[10vw] md:text-8xl lg:text-9xl xl:text-[11rem] font-black text-center leading-[0.9] uppercase tracking-tighter flex flex-col items-center w-full max-w-5xl"
        >
          <motion.span variants={itemVariants} className="text-white block relative z-10">
            Transforming
          </motion.span>
          
          <motion.span variants={itemVariants} className="block relative z-10 my-1 md:my-2">
            {/* Added whitespace-nowrap to prevent awkward breaking on medium screens */}
            <span className="text-[#93C5FD] inline-block hover:scale-105 transition-transform duration-300 origin-center whitespace-nowrap">Ideas Into </span>
            <span className="text-white whitespace-nowrap"> Real World</span>
          </motion.span>

          {/* Line 3: RESULTS + Upgraded Image Attached */}
          <motion.div variants={itemVariants} className="relative inline-flex items-center justify-center z-10 mt-1 md:mt-4 group">
            
            {/* --- UPGRADED IMAGE STICKER (Responsive Positioning) --- */}
            <motion.div 
               initial={{ scale: 0, rotate: -20 }}
               animate={{ scale: 1, rotate: 6 }}
               transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
               whileHover={{ 
                 rotate: 0, 
                 scale: 1.1,
                 filter: "drop-shadow(0 0 20px rgba(249, 115, 22, 0.4))" 
               }}
               className="absolute 
                          -left-8 -top-6 w-12 h-12       /* Mobile: Small & tighter position */
                          sm:-left-16 sm:-top-10 sm:w-20 sm:h-20 /* Small Tablet */
                          md:-left-24 md:-top-14 md:w-24 md:h-24 /* Tablet/Desktop */
                          lg:-left-32 lg:-top-16 lg:w-28 lg:h-28 /* Large Desktop */
                          bg-gradient-to-br from-[#F97316] to-[#f59e0b]
                          p-1 md:p-1.5 rounded-lg md:rounded-xl shadow-2xl rotate-6 z-20 cursor-pointer"
            >
               <div className="relative w-full h-full bg-[#050505] overflow-hidden rounded md:rounded-lg">
                 <Image 
                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&q=80" 
                   alt="Success Results" 
                   fill 
                   className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                 />
               </div>
            </motion.div>

            {/* The Text */}
            <span className="text-[#FFE500] drop-shadow-lg group-hover:text-[#fff700] transition-colors">
              Results
            </span>
          </motion.div>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          // Adjusted max-width and font size for readability
          className="text-gray-300 text-center max-w-xs sm:max-w-lg md:max-w-2xl mt-6 md:mt-10 mb-8 md:mb-12 text-sm sm:text-lg md:text-2xl font-light leading-relaxed px-2"
        >
          From strategy to execution — we handle everything from SEO to paid ads, 
          social media, web design, and beyond.
        </motion.p>

        {/* Upgraded CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="w-full flex justify-center"
        >
          <Button 
            className="group relative overflow-hidden bg-[#CCFF00] text-black text-lg md:text-2xl font-bold rounded-full px-8 py-6 md:px-12 md:py-8 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] active:scale-95 w-auto"
          >
            <span className="relative z-10 flex items-center">
               Book A Call
               <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
            </span>
            
            <div className="absolute inset-0 h-full w-full scale-x-0 group-hover:scale-x-100 group-hover:bg-white/30 transition-transform origin-left duration-500 ease-out" />
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}