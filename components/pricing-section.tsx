"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch" // Assuming you have shadcn switch, or standard html button

const plans = [
  {
    name: "Starter",
    description: "Essential tools for small businesses.",
    priceMonthly: 499,
    priceYearly: 399,
    features: ["SEO Optimization", "Basic Analytics", "Monthly Reports", "Email Support", "5 Keywords Tracked"],
    isPopular: false,
  },
  {
    name: "Growth",
    description: "Advanced solutions for scaling brands.",
    priceMonthly: 1299,
    priceYearly: 999,
    features: [
      "Everything in Starter",
      "Social Media Plan",
      "Technical SEO Audit",
      "Paid Ads Management",
      "Priority 24/7 Support",
      "Unlimited Keywords",
      "Content Strategy",
    ],
    isPopular: true,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="pricing">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#CCFF00]/10 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header & Toggle --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase mb-6"
          >
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-400">
              Pricing
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-lg mb-8"
          >
            Choose the perfect plan for your business needs. No hidden fees.
          </motion.p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-gray-500"}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 rounded-full bg-neutral-800 border border-white/10 p-1 transition-colors hover:border-[#CCFF00]/50 focus:outline-none"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-6 h-6 rounded-full shadow-md ${isYearly ? "ml-auto bg-[#CCFF00]" : "bg-white"}`}
              />
            </button>

            <span className={`text-sm font-medium transition-colors ${isYearly ? "text-white" : "text-gray-500"}`}>
              Yearly <span className="text-[#CCFF00] text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} index={index} />
          ))}
        </div>

        {/* --- Enterprise Option --- */}
        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
                Need a custom solution? <a href="#contact" className="text-[#CCFF00] underline underline-offset-4 hover:text-white transition-colors">Contact our Enterprise Team</a>
            </p>
        </div>

      </div>
    </section>
  )
}

// --- Individual Card Component ---
function PricingCard({ plan, isYearly, index }: { plan: typeof plans[0], isYearly: boolean, index: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className={`relative p-8 md:p-10 rounded-3xl border transition-all duration-500 group ${
          plan.isPopular
            ? "bg-[#121212] border-[#CCFF00] shadow-[0_0_30px_-10px_rgba(204,255,0,0.3)] z-10 scale-100 md:scale-105"
            : "bg-[#0A0A0A] border-white/10 hover:border-white/20"
        }`}
      >
        {/* Popular Badge */}
        {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                <Sparkles size={12} fill="black" />
                Best Deal
            </div>
        )}
  
        {/* Title & Description */}
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-sm">{plan.description}</p>
        </div>
  
        {/* Price Animation */}
        <div className="mb-8 flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-black text-white font-oswald">
                $
                <AnimatePresence mode="wait">
                    <motion.span
                        key={isYearly ? "year" : "month"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isYearly ? plan.priceYearly : plan.priceMonthly}
                    </motion.span>
                </AnimatePresence>
            </span>
            <span className="text-gray-500">/mo</span>
        </div>
  
        {/* CTA Button */}
        <Button
          className={`w-full mb-8 rounded-full py-6 font-bold text-base transition-all duration-300 ${
            plan.isPopular
              ? "bg-[#CCFF00] text-black hover:bg-[#b3e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          Get Started
        </Button>
  
        {/* Features List */}
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <motion.li 
                key={feature} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.05) }}
            >
              <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? "bg-[#CCFF00]/20 text-[#CCFF00]" : "bg-white/10 text-white"}`}>
                <Check size={14} strokeWidth={3} />
              </div>
              <span className={`text-sm ${plan.isPopular ? "text-gray-300" : "text-gray-500"}`}>
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    )
  }