import React, { useEffect, useState } from 'react';
import './App.css'; // Optional: for styling
import { NavBar } from './Navbar';
import {Hero} from './InfiniteGrid';
import { Feature } from './FeaturesSection';
import { Home, Zap, Settings, DollarSign, MessageSquare, Mail } from 'lucide-react';
import step1Image from './assets/ChatGPT Image Dec 26, 2025, 09_12_12 PM.png';
import step2Image from './assets/ChatGPT Image Dec 26, 2025, 09_13_36 PM.png';
import step3Image from './assets/ChatGPT Image Dec 26, 2025, 09_29_34 PM.png';
import { FeatureSteps } from './WorkingSection';
import { Pricing } from './PricingSection';
import { TypewriterEffect } from './CTASection';
import { Footer } from './Footer';
import { TestimonialsSection } from './TestimonialsSection';
import InfiniteGrid from './InfiniteGrid';
import { motion } from 'framer-motion';

const navitems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Testimonials', url: '#testimonials', icon: Zap },
  { name: 'Features', url: '#features', icon: Settings },
  { name: 'Working', url: '#working', icon: DollarSign },
  { name: 'Pricing', url: '#pricing', icon: MessageSquare },
  { name: 'Contact', url: '#footer', icon: Mail },
]

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  // Reveal Animation variants
  const revealVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" as const } 
    }
  };
  return (
    <div className='relative min-h-screen'>
      <InfiniteGrid/> {/*only infinite grid component needs to come here...rest of the content of hero section should be inside main */}
      <NavBar items={navitems} 
        isDark={isDark} 
        toggleTheme={() => setIsDark(!isDark)} />
      <main>
        <motion.section 
          id="home"
          className="min-h-screen flex items-center justify-center" // Added for full height and centering
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
        >
          <Hero />
        </motion.section>
        <section id = "testimonials">
          <motion.section id="testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}>
            <TestimonialsSection title={'TRUSTED BY INNOVATIVE TEAMS WORLDWIDE'} description={'No credit card required • Setup in 5 minutes • Cancel anytime'} testimonials={[{
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
              }]} />
          </motion.section>
        </section>
        <section id = "features"><motion.section id="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
          variants={revealVariants}><Feature/></motion.section></section>
          <section id = "working"><motion.section id="working"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}>
            <FeatureSteps features={[
              { 
                step: 'Step 1', 
                title: 'Connect Your Tools',
                content: 'Link your existing apps and platforms in seconds with our pre-built integrations.', 
                image: step1Image
              },
              { 
                step: 'Step 2', 
                title: 'Build Your Flow',
                content: 'Use our visual builder to create automation workflows without any coding required.', 
                image: step2Image 
              },
              { 
                step: 'Step 3', 
                title: 'Activate & Scale ',
                content: 'Turn on your automations and watch them work 24/7 while you focus on growth.', 
                image: step3Image 
              },
            ]}/>
          </motion.section>
          </section>
        <section id = "pricing"><motion.section id="pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants} ><Pricing/></motion.section></section>
        <section id = "footer"><motion.section id="footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}>
          <TypewriterEffect words={[
            { text: "Ready" },
            { text: "to" },
            { text: "Automate" },
            { text: "Your"},
            { text: "Workflows?", className: "text-blue-300" }
          ]}
          className="mb-8"
          cursorClassName="bg-white"
        />
        <p className="text-lg mb-6">Join thousands of teams saving 10+ hours per week with FlowOps.</p>
        <button className="px-8 py-3 mb-20 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition border-1">
          Start Free Trial
        </button>
          </motion.section>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
