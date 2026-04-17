import { motion } from "framer-motion";
import { Wrench, Stethoscope, CheckCircle2 } from "lucide-react";

const homeServices = [
  "HVAC & Air Conditioning",
  "Plumbing",
  "Roofing & Gutters",
  "Electrical Services",
  "Pest Control",
  "Solar Panel Installation",
  "Landscaping & Lawn Care",
  "Painting (Interior & Exterior)",
  "Flooring & Tiling",
  "Home Security & CCTV",
  "Garage Door Repair",
  "Handyman Services",
];

const healthcareServices = [
  "Dental Clinics",
  "Cosmetic & Aesthetic Clinics",
  "Physiotherapy & Rehabilitation",
  "General Practice / Family Medicine",
  "Dermatology",
  "Orthopedics",
  "Cardiology",
  "Gynecology & Obstetrics",
  "Ophthalmology",
  "ENT Specialists",
  "Mental Health & Psychiatry",
  "Fertility & IVF Clinics",
  "Pediatrics",
  "Oncology Centers",
  "Chiropractic & Wellness",
  "Weight Loss & Nutrition Clinics",
  "Hair Transplant Clinics",
  "Laser & Skin Treatment Centers",
];

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Niches We <span className="text-gradient">Dominate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in high-ticket service industries where our AI-driven systems
            deliver the highest return on investment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Home Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card group hover:border-primary/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />

            <div className="p-8 md:p-10 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Wrench className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Home Services</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Local trades &amp; property services
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                From emergency plumbers to solar installers, we fill your pipeline with
                homeowners actively searching for your service — and convert them into
                confirmed bookings automatically.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {homeServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2.5 bg-background/60 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-border/60 text-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Healthcare Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card group hover:border-accent/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors" />

            <div className="p-8 md:p-10 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Stethoscope className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Healthcare &amp; Clinics</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Every medical &amp; wellness specialty
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Whether you run a dental clinic, a fertility center, or a weight-loss
                practice, our system books qualified patient appointments 24/7 — without
                adding a single person to your front-desk team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {healthcareServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2.5 bg-background/60 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-border/60 text-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted-foreground mt-10 text-sm"
        >
          Not in the list? <a href="#contact" className="text-primary hover:underline">Reach out</a> — if you serve local customers, our system works for you.
        </motion.p>
      </div>
    </section>
  );
}
