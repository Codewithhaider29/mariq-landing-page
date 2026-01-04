"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function LogoSection() {
  const logos = [
    { name: "Logoipsum 1", url: "https://placehold.co/200x60/transparent/000000?text=Logoipsum&font=roboto" },
    { name: "Logoipsum 2", url: "https://placehold.co/200x60/transparent/000000?text=NextGen&font=roboto" },
    { name: "Logoipsum 3", url: "https://placehold.co/200x60/transparent/000000?text=Cyber&font=roboto" },
    { name: "Logoipsum 4", url: "https://placehold.co/200x60/transparent/000000?text=Vertex&font=roboto" },
    { name: "Logoipsum 5", url: "https://placehold.co/200x60/transparent/000000?text=Orbit&font=roboto" },
  ]

  // Triple the logos to ensure smooth infinite scroll without gaps on wide screens
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="w-full bg-[#050505] py-10 md:py-16 overflow-hidden border-t border-white/5 relative">
      
      {/* Background ambient glow (optional subtle detail) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 mb-8 md:mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] font-medium">
            Trusted by <span className="text-white font-bold">Global Leaders</span>
          </h3>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative w-full flex overflow-hidden group"
        style={{
           // Enhanced gradient mask for smoother fade-out on edges
           maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
           WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <motion.div
          className="flex flex-nowrap gap-12 md:gap-24 pl-4"
          animate={{ x: "-33.33%" }} // Move 1/3 of the width (since we tripled the list)
          transition={{
            ease: "linear",
            duration: 20, // Adjust speed
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative w-32 h-10 md:w-40 md:h-12 flex-shrink-0 cursor-pointer"
              // Hover Effects
              initial={{ opacity: 0.4, filter: "grayscale(100%) brightness(0) invert(1)" }} 
              whileHover={{ 
                opacity: 1, 
                scale: 1.1,
                // The Magic: Keeps white text but adds Lime Green Glow
                filter: "grayscale(0%) brightness(0) invert(1) drop-shadow(0 0 5px #CCFF00)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={logo.url}
                alt={logo.name}
                fill
                className="object-contain select-none"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bottom Separator */}
      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}