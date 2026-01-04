"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUp, Instagram, Linkedin, Twitter, Facebook } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  "Main": ["Home", "About", "Services", "Work"],
  "Company": ["Agency Life", "Careers", "Contact", "Partners"],
  "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"],
}

export function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#CCFF00]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Top Section: CTA & Newsletter --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-0 mb-24">
          
          {/* Headline */}
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-oswald text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter"
            >
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-500">
                Something Legendary
              </span>
            </motion.h2>
          </div>

          {/* Newsletter Input */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-auto min-w-[350px]"
          >
             <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">Stay in the loop</p>
             <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#CCFF00] transition-colors pr-12 text-lg"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#CCFF00] group-hover:translate-x-1 transition-transform p-2">
                   <ArrowRight size={24} />
                </button>
             </div>
          </motion.div>
        </div>

        {/* --- Middle Section: Links Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-24 border-t border-white/10 pt-16">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4">
             <div className="flex items-center gap-2 mb-6">
                 {/* Mini Logo */}
                 <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10L30 15V25L20 30L10 25V15L20 10Z" fill="#CCFF00" transform="translate(-5, 0)" />
                    <path d="M28 15L36 19V27L28 31L20 27V19L28 15Z" fill="#CCFF00" fillOpacity="0.5" />
                 </svg>
                 <span className="text-2xl font-bold text-white uppercase font-oswald">Mariq</span>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
               A full-service digital agency crafting experiences that merge art, technology, and strategy for ambitious brands.
             </p>
             
             {/* Socials */}
             <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all duration-300">
                      <Icon size={18} />
                   </a>
                ))}
             </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
             <div key={category} className="col-span-1 md:col-span-2">
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{category}</h4>
                <ul className="space-y-3">
                   {links.map((link) => (
                      <li key={link}>
                         <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                            <span className="w-1 h-1 rounded-full bg-[#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                         </a>
                      </li>
                   ))}
                </ul>
             </div>
          ))}

          {/* Back to Top */}
          <div className="col-span-2 md:col-span-2 flex flex-col justify-between items-start md:items-end">
             <button 
               onClick={scrollToTop}
               className="group flex flex-col items-center gap-2 text-gray-500 hover:text-[#CCFF00] transition-colors"
             >
                <span className="text-xs font-mono uppercase tracking-widest writing-vertical-rl">Back to Top</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#CCFF00] transition-colors">
                   <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                </div>
             </button>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Massive Text --- */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
           <p className="text-gray-600 text-xs">© 2025 Mariq Agency. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">Terms</a>
           </div>
        </div>

        {/* MASSIVE WATERMARK TEXT */}
        <div className="mt-20 select-none pointer-events-none">
           <h1 className="text-[18vw] font-black text-[#CCFF00] opacity-[0.03] leading-none text-center tracking-tighter mix-blend-overlay">
              MARIQ
           </h1>
        </div>
        
      </div>
    </footer>
  )
}