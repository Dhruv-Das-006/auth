"use client";

import { Check, Zap } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Hobby",
      price: "$0",
      description: "Perfect for side projects and learning.",
      features: ["Up to 1,000 monthly active users", "Social Login (Google, GitHub)", "Basic MFA", "Community Support"],
      cta: "Start for Free",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$29",
      description: "Everything you need to scale your app.",
      features: ["Up to 25,000 monthly active users", "Passkey & WebAuthn support", "Custom Domains", "Priority Email Support", "Advanced Analytics"],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs.",
      features: ["Unlimited monthly active users", "SAML SSO & OIDC", "Dedicated Account Manager", "SLAs & 24/7 Phone Support", "On-premise deployment"],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include 
            our core security features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted 
                  ? "bg-primary/5 border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary/20" 
                  : "bg-card hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                  <Zap size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.highlighted 
                  ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20" 
                  : "border hover:bg-secondary"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
