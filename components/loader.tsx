"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["Strategy", "Design", "Development", "Marketing", "Experience"]

export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 1. Counter Logic
    const counterInterval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(counterInterval)
          return 100
        }
        return prev + 1
      })
    }, 25) // Adjust speed here (lower is faster)

    // 2. Word Cycle Logic
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 250)

    // 3. Cleanup & Finish
    const timeout = setTimeout(() => {
      setIsLoading(false)
      clearInterval(wordInterval)
      clearInterval(counterInterval)
    }, 3200) // Total duration (approx 25ms * 100 + buffer)

    return () => {
      clearInterval(counterInterval)
      clearInterval(wordInterval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white overflow-hidden"
          // Exit Animation: Slide Up curtain effect
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background Detail: Grid */}
          <div 
             className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full px-10">
            
            {/* Top: Current Word */}
            <div className="h-10 overflow-hidden mb-4 flex items-center justify-center">
               <AnimatePresence mode="wait">
                 <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#CCFF00] font-mono text-sm uppercase tracking-[0.3em]"
                 >
                    {words[index]}
                 </motion.span>
               </AnimatePresence>
            </div>

            {/* Middle: Massive Counter */}
            <div className="relative">
                <h1 className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter font-oswald flex items-baseline">
                   {count}
                   <span className="text-2xl md:text-5xl ml-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">%</span>
                </h1>
            </div>

            {/* Bottom: Progress Bar */}
            <div className="absolute bottom-10 left-0 w-full px-10">
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-[#CCFF00] shadow-[0_0_20px_#CCFF00]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${count}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500 font-mono">Loading Assets...</span>
                    <span className="text-xs text-gray-500 font-mono">Mariq Agency © 2025</span>
                </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}