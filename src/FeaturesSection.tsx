// src/FeaturesSection.tsx
import { Mail, BarChart3, RefreshCw, Brain, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Email Automation",
    description: "Send personalized emails triggered by events, schedules, or data changes automatically.",
    icon: Mail,
    className: "md:col-span-2 md:row-span-1", // Spans 2 columns on desktop
  },
  {
    title: "Smart Reports",
    description: "AI-powered insights delivered straight to your inbox.",
    icon: BarChart3,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Task Syncing",
    description: "Keep your tools in sync with instant updates.",
    icon: RefreshCw,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "AI-Powered Logic",
    description: "Smart automation that learns your patterns and suggests optimizations for your workflow.",
    icon: Brain,
    className: "md:col-span-2 md:row-span-1", // Spans 2 columns on desktop
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and SOC 2 compliance.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Team Collaboration",
    description: "Share workflows and templates across your entire team.",
    icon: Users,
    className: "md:col-span-1 md:row-span-1",
  },
];

function Feature() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <Badge variant="outline" className="px-4 py-1 border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.2]">
            Everything You Need to <br className="hidden sm:block" />
            <span className="text-primary italic">Scale Your Output</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Powerful automation tools designed for teams that want to move fast without sacrificing quality.
          </p>
        </div>

        {/* BENTO GRID: Responsive Logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-[2rem]",
                "bg-background/40 backdrop-blur-md border border-border/50 hover:border-primary/50",
                "transition-all duration-500 p-6 md:p-8 min-h-[220px] md:min-h-[260px]",
                feature.className // Desktop spans are applied here
              )}
            >
              {/* Subtle hover glow for mobile/desktop */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 md:mb-6 p-3 w-fit rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300">
                  <span>Explore detail</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Feature };