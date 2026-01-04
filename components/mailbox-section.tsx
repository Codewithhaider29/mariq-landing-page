"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Layers, ArrowRight } from "lucide-react"

const solutions = [
  {
    title: "Strategy First",
    subtitle: "Custom Tailored",
    description: "We don't follow templates. We engineer bespoke roadmaps aligned with your specific KPIs.",
    icon: Layers,
  },
  {
    title: "High Impact",
    subtitle: "Creative Design",
    description: "Interfaces that don't just look stunning but are psychologically triggered to convert.",
    icon: Sparkles,
  },
  {
    title: "Agile Build",
    subtitle: "Fast Deployment",
    description: "Rapid iteration cycles ensure you launch faster without sacrificing code quality.",
    icon: Zap,
  },
]

export function MailboxSection() {
  return (
    // Responsive Padding: py-16 on mobile, py-24/32 on desktop
    <section className="py-16 md:py-32 bg-[#050505] overflow-hidden flex flex-col justify-center relative border-t border-white/5">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Headline - Responsive Positioning */}
        {/* On Mobile: Static at top. On Desktop: Absolute positioned */}
        <div className="mb-12 md:mb-0 md:absolute md:top-0 md:left-4 z-20 pointer-events-none text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // Responsive Typography
            className="font-oswald text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9]"
          >
            Delivery <br />
            <span className="text-[#CCFF00]">System</span>
          </motion.h2>
        </div>

        {/* Main Content Area */}
        {/* Mobile: Column layout. Desktop: Row layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end relative min-h-[auto] lg:min-h-[500px] gap-10 lg:gap-0">
          
          {/* --- RIGHT: Industrial Drop-Box Graphic --- */}
          {/* Order-1 on mobile (shows first), Order-2 on desktop */}
          <div className="relative z-20 order-1 lg:order-2 transform scale-75 sm:scale-90 md:scale-110 lg:translate-x-10">
            <IndustrialBox />
          </div>

          {/* --- LEFT: Sliding Data Cards --- */}
          {/* Order-2 on mobile (shows second), Order-1 on desktop */}
          <div className="w-full lg:w-auto order-2 lg:order-1 lg:absolute lg:right-[380px] flex flex-col gap-4 z-10 perspective-1000">
            {solutions.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.2 + (index * 0.2), 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20 
                  }}
                  whileHover={{ x: -5, scale: 1.02, borderColor: "rgba(204, 255, 0, 0.5)" }}
                  // Responsive Width: Full on mobile, 350px fixed on tablet/desktop
                  className="w-full md:w-[350px] p-5 md:p-6 rounded-xl md:rounded-2xl bg-[#121212] border border-white/10 shadow-2xl backdrop-blur-md group cursor-pointer relative overflow-hidden"
                >
                  {/* Hover Glow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div>
                        <p className="font-mono text-[#CCFF00] text-[10px] md:text-xs uppercase tracking-widest mb-1">{card.subtitle}</p>
                        <h3 className="font-oswald text-xl md:text-2xl text-white uppercase leading-none">{card.title}</h3>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-[#CCFF00] transition-colors">
                        <Icon size={18} className="md:w-5 md:h-5" />
                    </div>
                  </div>
                  
                  <p className="text-sm font-light leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                    {card.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="mt-12 md:mt-16 text-center lg:text-right lg:pr-20"
        >
            <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4">Ready to receive your custom strategy?</p>
            <button className="text-white border-b border-[#CCFF00] pb-1 hover:text-[#CCFF00] transition-colors flex items-center gap-2 ml-auto mr-auto lg:mr-0 text-sm md:text-base">
                Start a Project <ArrowRight size={14} className="md:w-4 md:h-4" />
            </button>
        </motion.div>

      </div>
    </section>
  )
}

// --- Custom 3D-Style CSS Component for the "Box" ---
function IndustrialBox() {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
      className="relative w-[280px] h-[360px]"
    >
       {/* Shadow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-black blur-xl opacity-80" />

       {/* Stand / Leg */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[100px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-b-lg border-x border-white/5" />

       {/* Main Body */}
       <div className="absolute top-[20px] left-0 w-full h-[240px] bg-[#121212] rounded-[40px] rounded-br-[10px] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] border border-white/10 z-20 overflow-hidden">
          
          {/* Metallic Sheen Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          
          {/* The "Slot" where cards come out */}
          <div className="absolute top-[60px] -left-4 w-4 h-[120px] bg-black blur-sm z-0" /> {/* Depth shadow */}

          {/* Front Panel Details */}
          <div className="absolute bottom-6 left-8 right-8">
             <div className="flex justify-between items-end">
                <div className="space-y-2">
                    {/* Status Text */}
                    <div className="flex items-center gap-2">
                        <motion.div 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" 
                        />
                        <span className="text-[10px] text-[#CCFF00] font-mono tracking-widest uppercase">System Online</span>
                    </div>
                    <div className="h-1 w-12 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-[#CCFF00]" 
                        />
                    </div>
                </div>
                
                {/* Logo Mark */}
                <div className="text-white/20 font-black text-4xl">01</div>
             </div>
          </div>
       </div>

       {/* The "Flag" / Signal Arm */}
       <div className="absolute top-[60px] -right-[10px] w-2 h-[80px] bg-[#333] rounded-full z-10" />
       
       <motion.div 
         initial={{ rotate: 0 }}
         whileInView={{ rotate: -45 }}
         transition={{ 
           delay: 1,
           type: "spring",
           stiffness: 200,
           damping: 10
         }}
         className="absolute top-[45px] -right-[14px] origin-bottom-left z-30"
       >
         {/* The Signal Light */}
         <div className="w-[60px] h-[30px] bg-black rounded-r-full border border-[#CCFF00] flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.2)]">
            <span className="text-[#CCFF00] text-[10px] font-bold uppercase tracking-widest">New</span>
         </div>
       </motion.div>
       
       {/* Emitter Glow (Where cards slide out) */}
       <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-[50px] -left-[20px] w-[20px] h-[140px] bg-[#CCFF00]/20 blur-xl z-0"
       />

    </motion.div>
  )
}