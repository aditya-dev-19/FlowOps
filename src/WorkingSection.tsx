import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// import { BrowserMockup } from "./BrowserMockup"
interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

// Utility function to merge classNames (replace cn from @/lib/utils)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
// Add this helper component inside WorkingSection.tsx
const BrowserMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
    {/* Browser Header */}
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/50">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
      </div>
      <div className="mx-auto w-1/2 h-5 rounded-md bg-background/50 border border-border flex items-center justify-center">
        <span className="text-[10px] text-muted-foreground font-mono">flowops.com/dashboard</span>
      </div>
    </div>
    {/* Browser Content */}
    <div className="relative aspect-video bg-muted">
      {children}
    </div>
  </div>
);

// src/WorkingSection.tsx refactored
export function FeatureSteps({
  features,
  className,
  title = "How it works?",
  autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("py-24 px-8 md:px-12", className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center tracking-tight">
          Built for <span className="text-primary">Speed</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT: Interactive Steps */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                onClick={() => { setCurrentFeature(index); setProgress(0); }}
                className={cn(
                  "relative p-6 rounded-2xl transition-all cursor-pointer border-2 border-transparent",
                  index === currentFeature ? "bg-muted/50 border-border shadow-sm" : "hover:bg-muted/30"
                )}
              >
                {/* Progress Fill Indicator (Inside the card) */}
                {index === currentFeature && (
                  <motion.div 
                    layoutId="active-step-bar"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                    initial={{ height: 0 }}
                    animate={{ height: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                )}

                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                    index === currentFeature ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground border-border"
                  )}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title || feature.step}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Mockup Visuals */}
          <div className="sticky top-32">
            <BrowserMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <img
                    src={features[currentFeature].image}
                    alt={features[currentFeature].step}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle AI Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </BrowserMockup>
          </div>
        </div>
      </div>
    </div>
  );
}