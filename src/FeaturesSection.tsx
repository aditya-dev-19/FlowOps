import { Check, Mail, BarChart3, RefreshCw, Brain, ShieldCheck, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; //

const features = [
  {
    title: "Email Automation",
    description: "Send personalized emails triggered by events, schedules, or data changes automatically. Scale your outreach without increasing your workload.",
    icon: Mail,
    className: "md:col-span-2 md:row-span-2", // Primary feature gets more height and width
  },
  {
    title: "Smart Reports",
    description: "Generate and distribute reports on autopilot with AI-powered insights.",
    icon: BarChart3,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Task Syncing",
    description: "Keep your tools in sync—updates in one place reflect everywhere instantly.",
    icon: RefreshCw,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "AI-Powered Logic",
    description: "Smart automation that learns patterns and suggests optimizations.",
    icon: Brain,
    className: "md:col-span-1 md:row-span-2", // Taller card for vertical balance
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2 standards.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Team Collaboration",
    description: "Share workflows and templates across your entire organization.",
    icon: Users,
    className: "md:col-span-1 md:row-span-1",
  },
];

function Feature() {
  return (
    <section className="w-full py-24 relative bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <Badge variant="outline" className="px-4 py-1.5 border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            Features
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Automate Your Workflow
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Powerful automation tools designed for teams that want to move fast without sacrificing quality or security.
          </p>
        </div>

        {/* REFINED BENTO GRID WITH FIXED ALIGNMENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[2rem]",
                "bg-background/40 backdrop-blur-xl border border-border/50 hover:border-primary/40",
                "transition-all duration-500 p-8",
                // Force height to fill the grid cell and use spans correctly
                "h-full", 
                feature.className
              )}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-3 w-fit rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <feature.icon className="w-7 h-7" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
                  <span>Explore detail</span>
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Feature };