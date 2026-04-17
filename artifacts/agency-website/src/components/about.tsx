import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Cpu, Users2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: TrendingUp,
    title: "Results First",
    description:
      "We measure everything by one metric: your growth. Every campaign, every automation, every dollar spent is optimized for maximum return.",
  },
  {
    icon: Cpu,
    title: "AI at the Core",
    description:
      "We don't bolt AI on as an afterthought. Our systems are built ground-up with AI at the center — faster responses, smarter qualification, better results.",
  },
  {
    icon: Users2,
    title: "True Partnership",
    description:
      "We're not a vendor. We're your growth partner. When you win, we win. That alignment drives everything we build and every decision we make.",
  },
  {
    icon: Award,
    title: "Proven Playbook",
    description:
      "Hundreds of businesses across home services and healthcare have used our system to build predictable, scalable customer pipelines.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden">
      <div className="bg-glow bg-accent w-[500px] h-[500px] top-[20%] right-[-200px] opacity-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Built the Agency
              <br />
              <span className="text-gradient">We Always Wanted.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Traffickly was founded by marketers, engineers, and AI specialists who were frustrated
              watching great businesses struggle to compete — not because their product was bad, but
              because their marketing couldn't keep up.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combined cutting-edge advertising with AI automation to build something different:
              a growth system that runs 24/7, qualifies leads instantly, and fills your calendar
              automatically. Today, we help businesses across India and the US dominate their local
              markets with technology that was previously only available to enterprise companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="rounded-full group">
                <a href="#contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full bg-background/50">
                <a href="#pricing">See Pricing</a>
              </Button>
            </div>
          </motion.div>

          {/* Right: values grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
