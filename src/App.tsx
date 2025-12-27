// src/App.tsx
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { NavBar } from './Navbar';
import InfiniteGrid from './InfiniteGrid';
import { Feature } from './FeaturesSection';
import { FeatureSteps } from './WorkingSection';
import { Pricing } from './PricingSection';
import { TestimonialsSection } from './TestimonialsSection'; // Import Testimonials
import { CTA } from './CTASection'; // Import CTA
import { Footer } from './Footer';
import { LayoutPanelLeft, Info, CreditCard, MessageSquare, Mail, Sun, Moon, Star } from 'lucide-react';
import step1Image from './assets/ChatGPT Image Dec 26, 2025, 09_12_12 PM.png'
import step2Image from './assets/ChatGPT Image Dec 26, 2025, 09_13_36 PM.png'
import step3Image from './assets/ChatGPT Image Dec 26, 2025, 09_29_34 PM.png'
// 1. Updated navItems to include Testimonials
const navItems = [
  { name: "Home", url: "#home", icon: LayoutPanelLeft },
  { name: "Features", url: "#features", icon: Star },
  { name: "Process", url: "#process", icon: Info },
  { name: "Pricing", url: "#pricing", icon: CreditCard },
  { name: "Testimonials", url: "#testimonials", icon: MessageSquare },
  { name: "Contact", url: "#contact", icon: Mail }, 
];

// Sample Testimonial Data
const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
];

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const revealVariants = {
    hidden: { opacity: 0, y: 20 } as const,
    visible: {
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } as const
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <InfiniteGrid />
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-[60] p-3 rounded-full bg-background/20 backdrop-blur-lg border border-border/50 shadow-xl active:scale-90 transition-all"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun size={20} className="text-yellow-500" />
        ) : (
          <Moon size={20} className="text-indigo-400" />
        )}
      </button>
      <NavBar 
        items={navItems} 
      />
      
      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 px-4">
              Automate <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Everything
              </span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 px-6">
              The ultimate workflow engine for modern teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </section>

        {/* FEATURES SECTION */}
        <motion.section 
          id="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="py-16 md:py-32"
        >
          <Feature />
        </motion.section>

        {/* WORKING SECTION */}
        <motion.section 
          id="process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="py-16 md:py-32"
        >
          <FeatureSteps 
            title="How FlowOps Works"
            features={[
              { step: "Connect", content: "Link your favorite tools in seconds.", image: step1Image },
              { step: "Automate", content: "Build workflows with our AI builder.", image: step2Image },
              { step: "Scale", content: "Relax while your automation runs 24/7.", image: step3Image }
            ]} 
          />
        </motion.section>

        {/* PRICING SECTION */}
        <motion.section 
          id="pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="py-16 md:py-32"
        >
          <Pricing />
        </motion.section>

        {/* 2. Added TESTIMONIALS SECTION */}
        <motion.section 
          id="testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="py-16 md:py-32"
        >
          <TestimonialsSection 
            title="Trusted by Innovative Teams"
            description="See how FlowOps is helping teams reclaim their time and focus on what matters most."
            testimonials={testimonials}
          />
        </motion.section>

        {/* 3. Added CTA SECTION */}
        <motion.section 
          id = "contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={revealVariants}
          className="py-16 md:py-32"
        >
          <CTA />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default App;