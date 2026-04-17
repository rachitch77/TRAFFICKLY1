import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Next-Gen Hybrid Marketing Agency
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            We Bring You Customers and Convert Them Into <span className="text-gradient">Booked Appointments</span> Automatically
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Stop wasting money on empty clicks. Our powerful combination of targeted Ads, AI Chatbots, and Automation systems guarantees qualified leads and a packed calendar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full text-base h-14 px-8 group">
              <a href="#contact">
                Get More Customers
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base h-14 px-8 bg-background/50 backdrop-blur border-border hover:bg-card">
              <a href="#contact">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Book Free Consultation
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>AI-powered qualification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Proven ROI</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative image abstract */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none hidden md:block">
         <img 
           src="/images/hero-bg.png" 
           alt="Hero abstract background" 
           className="w-full h-full object-cover rounded-full blur-3xl opacity-20"
         />
      </div>
    </section>
  );
}
