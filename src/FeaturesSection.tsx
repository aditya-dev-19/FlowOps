import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-12 lg:py-4">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Features</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Everything You Need to Automate
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Powerful automation tools designed for teams that want to move fast without sacrificing quality.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Email Automation</p>
                  <p className="text-muted-foreground text-sm">
                    Send personalized emails triggered by events, schedules, or data changes automatically.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Smart Reports</p>
                  <p className="text-muted-foreground text-sm">
                    Generate and distribute reports on autopilot with AI-powered insights and formatting.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Task Syncing</p>
                  <p className="text-muted-foreground text-sm">
                    Keep your tools in sync—updates in one place reflect everywhere instantly.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>AI-Powered Logic</p>
                  <p className="text-muted-foreground text-sm">
                    Smart automation that learns your patterns and suggests optimizations.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enterprise Security</p>
                  <p className="text-muted-foreground text-sm">
                    Bank-level encryption and compliance with SOC 2 Type II standards.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Team Collaboration</p>
                  <p className="text-muted-foreground text-sm">
                    Share workflows, templates, and automation across your entire team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
