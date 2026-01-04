"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react"

const services = [
  "Web Development",
  "UI/UX Design",
  "SEO & Marketing",
  "Branding",
  "Motion Graphics",
  "Consulting",
]

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden" id="contact">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CCFF00]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* --- LEFT: Contact Info & Status --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
               </span>
               <span className="text-gray-300 text-xs font-mono uppercase tracking-widest">
                  Available for new projects
               </span>
            </div>

            <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] mb-8">
              Let's Start <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-500">
                The Conversation
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-lg">
               Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
               <ContactItem 
                  icon={Mail} 
                  label="Email Us" 
                  value="hello@mariq.agency" 
                  href="mailto:hello@mariq.agency"
               />
               <ContactItem 
                  icon={Phone} 
                  label="Call Us" 
                  value="+1 (555) 123-4567" 
                  href="tel:+15551234567"
               />
               <ContactItem 
                  icon={MapPin} 
                  label="Visit Us" 
                  value="1200 Digital Blvd, Tech City, USA" 
               />
            </div>
          </motion.div>


          {/* --- RIGHT: Interactive Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#121212] border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
          >
             {/* Form Glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/5 blur-[80px] pointer-events-none" />

             <form className="space-y-8 relative z-10">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="group">
                      <label className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-2 block group-focus-within:text-[#CCFF00] transition-colors">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-[#CCFF00] transition-all text-lg"
                      />
                   </div>
                   <div className="group">
                      <label className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-2 block group-focus-within:text-[#CCFF00] transition-colors">Your Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-[#CCFF00] transition-all text-lg"
                      />
                   </div>
                </div>

                {/* Service Selection */}
                <div>
                   <label className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4 block">I'm interested in...</label>
                   <div className="flex flex-wrap gap-3">
                      {services.map((service) => (
                         <button
                           key={service}
                           type="button"
                           onClick={() => toggleService(service)}
                           className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                              selectedServices.includes(service)
                                ? "bg-[#CCFF00] text-black border-[#CCFF00] font-bold"
                                : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                           }`}
                         >
                            {service}
                         </button>
                      ))}
                   </div>
                </div>

                {/* Message */}
                <div className="group">
                   <label className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-2 block group-focus-within:text-[#CCFF00] transition-colors">Project Details</label>
                   <textarea 
                     rows={4} 
                     placeholder="Tell us about your project goals, timeline, and budget..." 
                     className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-[#CCFF00] transition-all text-lg resize-none"
                   />
                </div>

                {/* Submit Button */}
                <button className="w-full group relative bg-white text-black h-16 rounded-xl font-bold text-lg uppercase tracking-wider overflow-hidden hover:bg-[#CCFF00] transition-colors duration-300">
                   <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </span>
                </button>

             </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// --- Helper: Contact Item ---
function ContactItem({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
   const Content = (
      <div className="flex items-center gap-6 group cursor-pointer">
         <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] transition-all duration-300">
            <Icon size={24} />
         </div>
         <div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{label}</p>
            <p className="text-white text-xl md:text-2xl font-medium group-hover:text-[#CCFF00] transition-colors">{value}</p>
         </div>
      </div>
   )

   return href ? <a href={href}>{Content}</a> : <div>{Content}</div>
}