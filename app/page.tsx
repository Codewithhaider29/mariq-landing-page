"use client"
import { useState, useEffect } from "react";
import Loading from "@/components/loader";

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoSection } from "@/components/logo-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blogPosts"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { MailboxSection } from "@/components/mailbox-section"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/footer"

export default function Home() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay or wait for real data fetching
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // <-- show your full-screen loader
  }
  
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <LogoSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <MailboxSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
