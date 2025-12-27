// src/TestimonialsSection.tsx
import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-transparent text-foreground", // Background transparent to show InfiniteGrid
      "py-16 sm:py-24 md:py-32 px-0 overflow-hidden",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center sm:gap-16">
        {/* Header content with responsive text sizes */}
        <div className="flex flex-col items-center gap-4 px-6 sm:gap-8">
          <h2 className="max-w-[800px] text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            {title}
          </h2>
          <p className="text-base max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        {/* Marquee container - optimized for touch and narrow widths */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s] sm:[--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {/* Duplicate testimonials for seamless looping */}
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <div key={`${setIndex}-${i}`} className="w-[280px] sm:w-[350px] shrink-0">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))
              ))}
            </div>
          </div>

          {/* Fade gradients - hidden on very small screens to maximize visible card area */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}