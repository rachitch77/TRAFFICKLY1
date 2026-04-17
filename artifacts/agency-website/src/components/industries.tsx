import { motion } from "framer-motion";
import { Wrench, Stethoscope } from "lucide-react";

export function Industries() {
  const industries = [
    {
      title: "Home Services",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      niches: ["HVAC & AC Repair", "Plumbing & Electrical", "Roofing Contractors", "Pest Control"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      color: "from-blue-600/20 to-transparent"
    },
    {
      title: "Healthcare & Clinics",
      icon: <Stethoscope className="h-8 w-8 text-accent" />,
      niches: ["Dental Clinics", "Cosmetic Surgery", "Physiotherapy", "Specialty Clinics"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      color: "from-cyan-500/20 to-transparent"
    }
  ];

  return (
    <section id="industries" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Niches We <span className="text-gradient">Dominate</span></h2>
            <p className="text-lg text-muted-foreground">
              We don't work with everyone. We specialize in high-ticket service industries where our AI-driven systems produce the highest ROI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-border group"
            >
              <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} z-10 opacity-80 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-background/80 z-10" />
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-end min-h-[400px]">
                <div className="bg-card/80 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center border border-border/50 mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{industry.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industry.niches.map((niche) => (
                    <div key={niche} className="bg-background/60 backdrop-blur-md px-4 py-3 rounded-xl border border-border/50 text-sm font-medium">
                      {niche}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
