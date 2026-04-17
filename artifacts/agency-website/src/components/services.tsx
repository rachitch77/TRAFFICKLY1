import { motion } from "framer-motion";
import { Target, Bot, Globe, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Lead Generation",
      description: "Hyper-targeted campaigns that put your offer in front of buyers actively searching for your services.",
      icon: <Target className="h-10 w-10 text-primary" />,
      features: ["Google Ads", "Meta Ads (FB + IG)", "YouTube Ads", "Retargeting Campaigns"]
    },
    {
      title: "AI & Automation",
      description: "Never miss a lead again. Our AI systems engage prospects instantly and guide them to book.",
      icon: <Bot className="h-10 w-10 text-accent" />,
      features: ["RAG-based AI Chatbots", "WhatsApp Automation", "Lead Follow-Up Sequence", "Automated Booking"]
    },
    {
      title: "Digital Presence",
      description: "Foundational digital assets optimized to build trust and convert traffic into paying customers.",
      icon: <Globe className="h-10 w-10 text-blue-400" />,
      features: ["High-Converting Websites", "Google Maps Optimization", "SEO Foundations", "Review Management"]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Growth<span className="text-primary"> Ecosystem</span></h2>
          <p className="text-lg text-muted-foreground">
            We do more than just run ads. We build an end-to-end client acquisition machine using the latest in marketing and AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 border-border/50 hover:border-primary/50 transition-colors group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <CardHeader>
                  <div className="mb-4 bg-card w-16 h-16 rounded-2xl flex items-center justify-center border border-border shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm font-medium text-muted-foreground">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
