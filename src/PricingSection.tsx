// src/PricingSection.tsx
import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header content with responsive text sizes */}
        <div className="flex text-center justify-center items-center gap-4 flex-col mb-12 md:mb-20">
          <Badge variant="outline" className="px-4 py-1 border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest">
            Pricing
          </Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tight max-w-xl text-center font-bold">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base md:text-xl leading-relaxed text-muted-foreground max-w-xl text-center mx-auto">
              Choose the plan that fits your team. All plans include a 14-day free trial.
            </p>
          </div>
        </div>

        {/* Pricing Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-8 items-start">
          
          {/* Starter Plan */}
          <Card className="w-full rounded-3xl bg-background/40 backdrop-blur-md border-border/50 transition-all hover:border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Starter</CardTitle>
              <CardDescription className="text-sm">
                Perfect for solo founders and small teams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold">$29</span>
                  <span className="text-muted-foreground text-sm">/ month</span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Up to 1,000 tasks/month",
                    "5 active workflows",
                    "Basic integrations",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm md:text-base">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full py-6 rounded-xl gap-2 font-bold group">
                  Sign up today <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Growth Plan - Highlighted */}
          <Card className="w-full rounded-3xl bg-background/60 backdrop-blur-xl border-primary/50 shadow-2xl shadow-primary/10 relative overflow-hidden transform md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
              Recommended
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Growth</CardTitle>
              <CardDescription className="text-sm">
                For growing teams that need more power
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold">$99</span>
                  <span className="text-muted-foreground text-sm">/ month</span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Up to 10,000 tasks/month",
                    "Unlimited workflows",
                    "All 100+ integrations",
                    "Priority support",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm md:text-base">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full py-6 rounded-xl gap-2 font-bold shadow-lg shadow-primary/20 group">
                  Sign up today <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="w-full rounded-3xl bg-background/40 backdrop-blur-md border-border/50 transition-all hover:border-primary/30 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
              <CardDescription className="text-sm">
                For organizations with custom needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold">Custom</span>
                  <span className="text-muted-foreground text-sm">/ month</span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Unlimited tasks",
                    "Custom workflows",
                    "SLA & Dedicated manager",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm md:text-base">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full py-6 rounded-xl gap-2 font-bold group">
                  Book a meeting <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export { Pricing };