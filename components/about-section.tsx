"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

// --- Helper: Reveal Text Animation ---
const RevealText = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <div className={`relative overflow-hidden inline-flex ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// --- Helper: CountUp Animation ---
const Counter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <span ref={ref} className="relative overflow-hidden inline-block">
        <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            className="block"
        >
            {to}
        </motion.span>
    </span>
  )
}

export function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effect
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 lg:py-32 bg-[#050505] overflow-hidden" id="about">
      
      {/* --- Background Noise & Grid --- */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      
      {/* --- Abstract Glowing Blobs (Responsive Size) --- */}
      <motion.div style={{ y: yBg }} className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#CCFF00]/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- SECTION 1: MASSIVE KINETIC HEADLINE --- */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          {/* Label */}
          <div className="mb-4 md:mb-6 flex items-center gap-3">
             <div className="h-px w-8 bg-[#CCFF00]" />
             <span className="text-[#CCFF00] font-mono text-xs md:text-sm tracking-widest uppercase">Who We Are</span>
          </div>

          <h2 className="font-oswald text-[11vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-white leading-[0.9] tracking-tighter uppercase">
            
            {/* Line 1 */}
            {/* Added gap-y-2 to handle wrapping on very small screens */}
            <div className="flex flex-wrap items-center gap-x-3 md:gap-x-8 gap-y-2">
              <RevealText>We Are A</RevealText>
              
              {/* Highlight Pill (Responsive padding/font) */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="overflow-hidden"
              >
                <div className="bg-[#CCFF00] text-black px-4 py-1 md:px-8 md:py-2 rounded-full transform -rotate-2 origin-left">
                    {/* whitespace-nowrap ensures text doesn't break inside the pill */}
                    <span className="text-xl sm:text-4xl lg:text-5xl font-bold whitespace-nowrap block">Strategy-Led</span>
                </div>
              </motion.div>
            </div>

            {/* Line 2: Outline Text + Inline Image */}
            <div className="flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-2 my-2 md:my-4">
               {/* Outline Text */}
               <div className="relative overflow-hidden inline-flex">
                 <motion.span
                   initial={{ y: "100%" }}
                   whileInView={{ y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.1 }}
                   className="text-transparent"
                   style={{ WebkitTextStroke: "1px white" }}
                 >
                   Full Service
                 </motion.span>
               </div>

               {/* Inline Expanding Image (Now visible on mobile but smaller) */}
               <motion.div 
                 initial={{ width: 0, opacity: 0 }}
                 whileInView={{ width: "auto", opacity: 1 }} 
                 viewport={{ once: true }}
                 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                 // h-14 on mobile, h-24 on desktop
                 className="h-14 sm:h-16 md:h-24 rounded-full relative overflow-hidden mx-1 md:mx-2 border-2 border-[#CCFF00] min-w-[10px]"
               >
                 {/* Explicit width on the container div helps animation, but here we animate width auto. 
                     We use a min-width spacer or let the image define ratio */}
                 <div className="w-[100px] sm:w-[140px] md:w-[180px] h-full relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop" 
                      alt="Team" 
                      fill 
                      className="object-cover"
                    />
                 </div>
               </motion.div>

               <RevealText delay={0.2}>Digital</RevealText>
            </div>

            {/* Line 3 */}
            <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4">
               <RevealText delay={0.3}>Agency</RevealText>
               <RevealText delay={0.3} className="text-[#808080] text-[5vw] sm:text-5xl lg:text-6xl ml-2">From 2024</RevealText>
            </div>
          </h2>
        </div>


        {/* --- SECTION 2: CONTENT & STATS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-white/10 pt-12 md:pt-16">
           
           {/* Left: Description */}
           <div className="lg:col-span-7">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-2xl lg:text-3xl text-gray-200 font-light leading-snug mb-8 text-left"
              >
                  We build digital experiences that <span className="text-white font-semibold underline decoration-[#CCFF00] decoration-2 underline-offset-4">resonate</span>. Not just pretty pixels, but robust systems designed for growth, performance, and impact.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-8 md:gap-12"
              >
                  {/* List of values */}
                  <ul className="space-y-3">
                      {["Data-Driven Strategy", "User-Centric Design", "Scalable Development"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                              <CheckCircle2 className="text-[#CCFF00] shrink-0" size={20} />
                              {item}
                          </li>
                      ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-2 sm:mt-0">
                    <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-base md:text-lg overflow-hidden transition-all hover:bg-[#CCFF00]">
                        <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                           More About Us <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>
                  </div>
              </motion.div>
           </div>

           {/* Right: Stats Grid */}
           {/* Changed to grid-cols-1 on mobile for better readability */}
           <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
             
             {/* Stat Item 1 */}
             <div className="bg-neutral-900/50 p-6 rounded-2xl md:rounded-3xl border border-white/5 backdrop-blur-sm hover:border-[#CCFF00]/30 transition-colors duration-300">
                 <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 flex">
                    <Counter from={0} to={98} />%
                 </div>
                 <p className="text-gray-400 text-sm">Client Satisfaction Rate over 2 years</p>
             </div>

             {/* Stat Item 2 */}
             <div className="bg-neutral-900/50 p-6 rounded-2xl md:rounded-3xl border border-white/5 backdrop-blur-sm hover:border-[#CCFF00]/30 transition-colors duration-300">
                 <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#CCFF00] mb-2 flex">
                    <Counter from={0} to={120} />+
                 </div>
                 <p className="text-gray-400 text-sm">Projects Delivered Successfully</p>
             </div>

             {/* Stat Item 3 (Full Width on Desktop, Standard on Mobile) */}
             <div className="sm:col-span-2 bg-[#CCFF00] p-6 rounded-2xl md:rounded-3xl border border-[#CCFF00] flex items-center justify-between group cursor-pointer transition-transform active:scale-95">
                   <div>
                       <div className="text-2xl md:text-3xl font-black text-black mb-1">Let's Talk</div>
                       <p className="text-black/70 font-medium text-sm md:text-base">Have an idea?</p>
                   </div>
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:-rotate-45">
                       <ArrowRight size={20} className="md:w-6 md:h-6" />
                   </div>
             </div>

           </div>
        </div>

      </div>
    </section>
  )
}