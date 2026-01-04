"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What specific services do you offer?",
    answer: "We offer a holistic digital suite including SEO Strategy, Performance Paid Ads (Meta/Google), Social Media Management, Custom Web Development (Next.js), and Brand Identity Design. We tailor these to your specific growth stage.",
  },
  {
    question: "How do I know which plan is right for me?",
    answer: "Our Starter plan is perfect for small businesses looking to establish a digital footprint. The Growth plan is designed for established brands ready to scale aggressively. If you're unsure, our strategy team offers a free audit to recommend the best path.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope. A branding overhaul typically takes 3-4 weeks, while a full custom website takes 4-8 weeks. Marketing campaigns are ongoing, with significant ROI usually visible within months 2 and 3.",
  },
  {
    question: "Do you provide monthly reporting?",
    answer: "Absolutely. We believe in radical transparency. You'll receive a detailed dashboard and a monthly video call to review KPIs, budget allocation, and strategy adjustments for the upcoming month.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, our contracts are flexible. You can scale up your ad spend or add additional services like Content Creation or Email Marketing at any time as your business grows.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* --- LEFT COLUMN: Header & CTA --- */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                 <span className="w-8 h-px bg-[#CCFF00]" />
                 <span className="text-[#CCFF00] font-mono text-sm tracking-widest uppercase">FAQ</span>
              </div>

              <h2 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9] mb-6">
                Common <br />
                <span className="text-gray-500">Questions</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Everything you need to know about how we work, our pricing, and our results-driven process.
              </p>

              {/* Contact CTA Box */}
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 inline-block">
                 <p className="text-white font-medium mb-4">Still have questions?</p>
                 <Button className="bg-[#CCFF00] text-black hover:bg-[#b3e600] rounded-full font-bold px-6">
                    Contact Support <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: Accordion --- */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// --- Accordion Item Component ---
function AccordionItem({ faq, isOpen, onClick, index }: { faq: any, isOpen: boolean, onClick: () => void, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border-b border-white/10 transition-colors duration-300 ${isOpen ? "bg-white/[0.02]" : "bg-transparent"}`}
    >
      <button
        onClick={onClick}
        className="w-full py-8 flex items-start justify-between gap-6 text-left group"
      >
        <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? "text-[#CCFF00]" : "text-white group-hover:text-gray-200"}`}>
          {faq.question}
        </span>
        
        {/* Animated Icon Wrapper */}
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-[#CCFF00] bg-[#CCFF00] text-black" : "border-white/20 text-white"}`}>
            <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }} // Rotates the Plus to an X
                transition={{ duration: 0.3, ease: "backOut" }}
            >
               <Plus size={18} />
            </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-lg leading-relaxed pb-8 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}