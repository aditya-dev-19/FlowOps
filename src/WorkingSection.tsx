// src/WorkingSection.tsx
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

// Professional Browser Mockup Component (Local Helper)
const BrowserMockup = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/50">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
      </div>
      <div className="mx-auto w-1/2 h-5 rounded-md bg-background/50 border border-border flex items-center justify-center">
        <span className="text-[10px] text-muted-foreground font-mono truncate px-2">flowops.com/dashboard</span>
      </div>
    </div>
    <div className="relative aspect-video bg-muted">
      {children}
    </div>
  </div>
);

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
}

export function FeatureSteps({
  features,
  className,
  title = "How it works?",
  autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("py-16 md:py-24 lg:py-32 px-4 sm:px-6", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 md:mb-20 text-center tracking-tight">
          {title}
        </h2>

        {/* Layout: Vertical on mobile, Grid on large screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* VISUALS: Top on mobile, Right on desktop */}
          <div className="w-full lg:order-2 sticky top-24 lg:top-32">
            <BrowserMockup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={features[currentFeature].image}
                    alt={features[currentFeature].step}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </BrowserMockup>
          </div>

          {/* STEPS: Bottom on mobile, Left on desktop */}
          <div className="w-full lg:order-1 space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => { setCurrentFeature(index); setProgress(0); }}
                className={cn(
                  "relative p-5 md:p-8 rounded-2xl transition-all cursor-pointer border border-transparent",
                  index === currentFeature ? "bg-muted/50 border-border shadow-sm" : "hover:bg-muted/30"
                )}
              >
                {/* Progress Bar Indicator */}
                {index === currentFeature && (
                  <motion.div 
                    layoutId="active-step-bar"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                    initial={{ height: 0 }}
                    animate={{ height: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                )}

                <div className="flex items-start gap-4 md:gap-6">
                  <div
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 border transition-colors",
                      index === currentFeature
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-background border-border text-muted-foreground",
                    )}
                  >
                    {index < currentFeature ? <Check size={16} /> : <span className="text-sm font-bold">{index + 1}</span>}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}