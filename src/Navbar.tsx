// src/Navbar.tsx
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Zap, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = `#${entry.target.id}`
          const matchingItem = items.find(item => item.url === sectionId)
          if (matchingItem) {
            setActiveTab(matchingItem.name)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    items.forEach((item) => {
      if (item.url.startsWith('#')) {
        const sectionId = item.url.substring(1)
        const element = document.getElementById(sectionId)
        if (element) {
          observer.observe(element)
        }
      }
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, itemName: string, url: string) => {
    e.preventDefault()
    setActiveTab(itemName)
    
    if (url.startsWith('#')) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav
      className={cn(
        // Positioning: Fixed to bottom, 50% from left, then pulled back by half its own width
        "fixed bottom-6 sm:top-0 left-1/2 -translate-x-1/2 z-50 sm:pt-6",
        // Width: Use max-content so the pill doesn't stretch wider than its items
        "w-max max-w-[95vw]", 
        className,
      )}
    >
      <div className="flex items-center bg-background/10 border border-border/50 backdrop-blur-xl py-1 px-1 rounded-full shadow-2xl">
        
        {/* BRAND SECTION */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-r border-border/20">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500/20" />
          <span className="hidden md:inline text-sm font-bold tracking-tighter text-foreground">
            FlowOps
          </span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => handleClick(e, item.name, item.url)}
                className={cn(
                  "relative cursor-pointer text-xs sm:text-sm font-semibold transition-colors",
                  // Standardized padding for both mobile icons and desktop text
                  "px-3 sm:px-6 py-2.5 rounded-full flex items-center justify-center",
                  "text-foreground/70 hover:text-primary",
                  isActive && "text-primary",
                )}
              >
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden flex items-center justify-center">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    {/* The Desktop-only Lamp Glow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full hidden sm:block">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}