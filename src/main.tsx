import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TestimonialsSection } from './TestimonialsSection.tsx'
import { Feature } from './FeaturesSection.tsx'
import { FeatureSteps } from './WorkingSection.tsx'
import { Pricing } from './PricingSection.tsx'
import { TypewriterEffect } from './CTASection';  // Or TypewriterEffectSmooth if preferred
import { Footer } from './Footer.tsx'
import { NavBar } from './Navbar.tsx'
import { Home, Zap, Settings, DollarSign, MessageSquare, Mail } from 'lucide-react'
import step1Image from './assets/ChatGPT Image Dec 26, 2025, 09_12_12 PM.png'
import step2Image from './assets/ChatGPT Image Dec 26, 2025, 09_13_36 PM.png'
import step3Image from './assets/ChatGPT Image Dec 26, 2025, 09_29_34 PM.png'
const items = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Testimonials', url: '#testimonials', icon: Zap },
  { name: 'Features', url: '#features', icon: Settings },
  { name: 'Working', url: '#working', icon: DollarSign },
  { name: 'Pricing', url: '#pricing', icon: MessageSquare },
  { name: 'Contact', url: '#footer', icon: Mail },
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar items={items} />
    <section id="home">
      <App />
    </section>
    <div id="testimonials">
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
    </div>
    <div id="features">
      <Feature />
    </div>
    <div id="working">
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
      ]} />
    </div>
    <div id="pricing">
      <Pricing/>
    </div>
    <div id="footer">  {/* CTA section moved below pricing */}
      <section className="py-16 text-center">  {/* Removed bg-gradient and changed text-white to text-black for visibility */}
        <TypewriterEffect 
          words={[
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
        <div id="footer">
          <Footer/>
        </div>
      </section>
    </div>
  </StrictMode>,
)
