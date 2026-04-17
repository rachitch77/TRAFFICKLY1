import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    priceINR: "₹25,000",
    priceUSD: "$400",
    period: "/month",
    tagline: "Get your first wave of qualified leads",
    features: [
      "1 Ad Platform (Google or Meta)",
      "Lead capture landing page",
      "Basic AI lead response bot",
      "WhatsApp follow-up automation",
      "Monthly performance report",
      "Dedicated account manager",
    ],
    cta: "Start Growing",
    popular: false,
  },
  {
    name: "Growth",
    priceINR: "₹50,000",
    priceUSD: "$900",
    period: "/month",
    tagline: "Full-stack customer acquisition machine",
    features: [
      "3 Ad Platforms (Google + Meta + Instagram)",
      "Advanced AI chatbot (RAG-based)",
      "Full lead follow-up automation",
      "Appointment booking system",
      "WhatsApp + Email automation",
      "A/B tested ad creatives",
      "Bi-weekly strategy calls",
      "Real-time lead dashboard",
    ],
    cta: "Most Popular — Get Started",
    popular: true,
  },
  {
    name: "Premium",
    priceINR: "₹90,000",
    priceUSD: "$1,800",
    period: "/month",
    tagline: "Complete domination of your market",
    features: [
      "All ad platforms including YouTube",
      "Custom AI system + integrations",
      "Full CRM automation setup",
      "Google Business Profile optimization",
      "Website development & optimization",
      "Conversion rate optimization",
      "Weekly strategy & review calls",
      "Priority 24/7 support",
      "Quarterly growth audit",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 relative overflow-hidden">
      <div className="bg-glow bg-primary w-[500px] h-[500px] bottom-0 right-0 opacity-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Invest in Growth.
            <br />
            <span className="text-gradient">See Real Returns.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick the plan that fits your goals. All plans come with a dedicated team, performance tracking, and a growth-first strategy. Ad spend is billed separately.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary/50 shadow-2xl shadow-primary/10 scale-[1.02]"
                  : "bg-card border-border hover:border-primary/30 transition-colors"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Zap className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-muted-foreground mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold">{plan.priceINR}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <div className="text-muted-foreground text-sm mb-3">
                  or{" "}
                  <span className="font-semibold text-foreground">
                    {plan.priceUSD}
                  </span>
                  {plan.period}
                </div>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <CheckCircle2
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-primary" : "text-accent"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full font-semibold group ${
                  plan.popular ? "" : "variant-outline"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All plans require a minimum 3-month commitment. Ad spend budget is billed separately and goes directly to the ad platforms. No hidden fees.
        </motion.p>
      </div>
    </section>
  );
}
