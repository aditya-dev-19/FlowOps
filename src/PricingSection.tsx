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
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Choose the plan that fits your team. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Starter
                  </span>
                </CardTitle>
                <CardDescription>
                  Perfect for solo founders and small teams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$29</span>
                    <span className="text-sm text-muted-foreground">
                      {""}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Up to 1,000 tasks/month</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>5 active workflows</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Basic integrations (Gmail, Slack, etc)</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Sign up today <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Growth
                  </span>
                </CardTitle>
                <CardDescription>
                  For growing teams that need more power
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$99</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Up to 10,000 tasks/month</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited active workflows</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>All integrations (100+ apps)</p>
                      </div>
                    </div>
                  </div>
                  <Button className="gap-4">
                    Sign up today <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription>
                  For organizations with custom needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">Custom</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited tasks</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited workflows</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited team members</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Book a meeting <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
