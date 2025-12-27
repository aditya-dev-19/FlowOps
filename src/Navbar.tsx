import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  isDark: boolean;      // Prop to track current theme
  toggleTheme: () => void; // Prop to trigger theme switch
}

export function NavBar({ items, className, isDark, toggleTheme }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  // Intersection Observer to detect which section is in view
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
    } else {
      window.location.href = url
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item.name, item.url)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-all duration-300",
                "text-foreground/70 hover:text-primary",
                isActive && "text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
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
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}

        {/* Theme Toggle Button with Vertical Separator */}
        <div className="flex items-center pl-1 border-l border-border/50 ml-1">
          <button
            onClick={toggleTheme}
            className="p-2 ml-1 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={18} strokeWidth={2.5} className="text-yellow-500" />
            ) : (
              <Moon size={18} strokeWidth={2.5} className="text-indigo-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}