import { motion } from "framer-motion";
import { ArrowRight, Target, Bot, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "We Run Precision Ads",
    description:
      "We craft and launch hyper-targeted ad campaigns on Google, Meta, YouTube, and Instagram — putting your brand in front of people who are actively looking for exactly what you offer.",
    highlight: "You get a flood of high-intent leads",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Engages & Qualifies Instantly",
    description:
      "Our AI system responds to every lead within seconds — 24/7. It answers questions, qualifies prospects, and filters out time-wasters so only serious buyers reach you.",
    highlight: "No more chasing cold or unqualified leads",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Leads Become Booked Appointments",
    description:
      "Qualified leads are automatically guided through your booking system. They self-schedule, get confirmation, and show up ready to buy — your calendar fills itself.",
    highlight: "Your business grows while you sleep",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-36 relative overflow-hidden">
      <div className="bg-glow bg-accent w-[600px] h-[600px] top-1/2 left-[60%] opacity-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Simple Process, Powerful Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            From Ads to Appointments —
            <br />
            <span className="text-gradient">Fully Automated</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We handle every step of the customer acquisition journey. You just show up and serve your clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[18%] right-[18%] h-px bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30 z-0" />

          {steps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants} className="relative z-10">
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20 font-heading">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{step.description}</p>

                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    <ArrowRight className="h-4 w-4 flex-shrink-0" />
                    <span>{step.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="h-8 w-px bg-gradient-to-b from-primary/40 to-accent/40" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="rounded-full text-base h-14 px-10 group">
            <a href="#contact">
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
