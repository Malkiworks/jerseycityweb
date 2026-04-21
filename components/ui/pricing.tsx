"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export interface PricingPlan {
  name: string;
  onceOffFee: number;
  monthlyRetainer: number;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular?: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function PricingSection({
  plans,
  title = "Simple, Transparent Pricing",
  description = "One-time build fee, then a monthly retainer for support and growth.",
}: PricingSectionProps) {
  return (
    <section className="w-full bg-background py-20 sm:py-24" id="pricing">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8",
        plan.isPopular ? "border-2 border-foreground shadow-xl" : "border-border",
      )}
    >
      {plan.isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-1.5">
          <div className="flex items-center gap-1.5 text-background">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">Most Popular</span>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <h3 className="text-center text-xl font-semibold">{plan.name}</h3>
        <p className="mt-2 text-center text-sm text-muted-foreground">{plan.description}</p>

        <div className="mt-6 rounded-xl bg-muted/50 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Once-off build fee</p>
          <p className="text-3xl font-bold">${plan.onceOffFee}</p>
          <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">Monthly retainer</p>
          <p className="text-2xl font-semibold">${plan.monthlyRetainer}/month</p>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <Check className="h-5 w-5 flex-none text-foreground" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <Link
            href={plan.href}
            className={cn(
              buttonVariants({ variant: plan.isPopular ? "default" : "outline", size: "lg" }),
              "w-full",
            )}
          >
            {plan.buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
